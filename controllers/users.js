const USERMODEL = require("../models/users")
const USERLOOKUPMODEL = require("../models/users_lookup")

const addUser = async (req,res,next)=>{
    try{
        let {email,EID} = req.body
        console.log(EID)
            const ifexist = await USERMODEL.findOne({email:email})

            if(ifexist==null){
                const response =  await USERMODEL({email:email}).save()
                await USERLOOKUPMODEL({userid:response._id,EID:EID}).save()
                res.status(200).send({success:true, message:"Email Successfully inserted"})
            }else{
                res.status(400).send({success:false, message:"Email Already Exists"})
            }      
        }
    catch(err){
        res.status(500).send({success:false,message:err.message})
    }
}

const searchApi = async(req,res,next)=>{
    try{
         let EID = req.query.email
        const response = await USERLOOKUPMODEL.findOne({EID:EID}).populate('userid')
        if(response != null){
            res.status(200).send({success:true, booleanresponse:true , data : response})
        }else{
            res.status(400).send({success:false, booleanresponse:false , data :"Not found in records"})
        }
    }
    catch(err){
        res.status(500).send({success:false,message:err.message})
    }
}

module.exports = {addUser,searchApi}