const Encrypt = require("../Utils").Encrypt


const ecryptionMiddleware = (req,res,next)=>{
    try{
        //validation
        if(req.method==='GET' && req.query.email === undefined || req.method ==='POST' && req.body.email === undefined ){
            return res.status(400).send({success:false, message:"No Email Provided"})
        }
        //encryption
       if(req.method === 'GET'){
            req.query.email = Encrypt( req.query.email,process.env.SECRETKEY)
       }else{
         req.body.EID = Encrypt(req.body.email,process.env.SECRETKEY)
       }
       next()
    }catch(error){
        res.status(500).send({success:false,message:err.message})
    }
}

module.exports = ecryptionMiddleware

