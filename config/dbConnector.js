const mongoose=require("mongoose")

mongoose.connect(`mongodb://localhost/${process.env.database}`,{useNewUrlParser:true}).catch(error=>console.log(error))