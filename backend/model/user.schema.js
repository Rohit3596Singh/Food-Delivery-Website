const mongoose = require ("mongoose")
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    Gender:{
        type:String,
    },
    Country:{
        type:String
    },
    CardCredentials: [
        {
            CardNumber: { type: String },
            Expiration: { type: String },
            CCV: { type: String },
            NameonCard: { type: String },
        },
    ],
})

const userModel = mongoose.model("users",UserSchema)
module.exports = userModel;