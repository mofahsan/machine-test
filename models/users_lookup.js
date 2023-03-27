const mongoose = require("mongoose")

const usersLookup = new mongoose.Schema({
        userid :{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users"
        },
        EID:{
            type:String
        }
    }
)

module.exports = mongoose.model("users_lookup",usersLookup)