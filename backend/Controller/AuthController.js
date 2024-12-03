const UserModel = require("../model/user.schema");
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

const signup = async(req,res)=>{
    try{
        const {name,email,password,phoneNumber} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(409)
                .json({message: "user is already exist, you can login", success:false})
        }
        const userModel = new UserModel({name,email,password,phoneNumber});
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message:"Signup Successfull",
                success:true
            })
    }
    catch(err){
        res.status(500)
            .json({
                message:"Internal Server Error",
                success:false
            })

    }
}


const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await UserModel.findOne({email});
        const errMsg = "Auth is Failed, Wrong Email or Password"
        if(!user){
            return res.status(403)
                .json({message: errMsg, success:false})
        }
        const isPassEqual = await bcrypt.compare(password,user.password);
        if(!isPassEqual){
            return res.status(403)
            .json({message: errMsg, success:false})
        }
        const jwtToken = jwt.sign(
            {email:user.email, _id:user._id},
            process.env.JWT_SECRET,
            {expiresIn : "24h"}
        )

        res.status(200).json({
            message: "Login Successful",
            success: true,
            jwtToken,
            userId: user._id,
            name: user.name,
            email: user.email, 
        });
    }
    catch(err){
        res.status(500)
            .json({
                message:"Internal Server Error",
                success:false
            })

    }
}


module.exports = {
    signup,
    login
}