const mongoose = require("mongoose")

const mongo_url = process.env.MONGO_STR

mongoose.connect(mongo_url)
    .then(()=>{
        console.log("MongoDB Connected...")
    }).catch((err)=>{
        console.log("MongoDB connection error:",err)
    })