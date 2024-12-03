import React from 'react'
import {ToastContainer} from "react-toastify";
import { useState } from 'react'; 
import {Link, useNavigate} from "react-router-dom"
import { handleError } from '../../util';
import { handleSuccess } from '../../util';
import './Signup.css';

import burgerLoginImage from "../assets/burgerLoginImage.png"
import LOGO from "../assets/LOGO 1.png"
import LOGO2 from "../assets/LOGO2.png"
import intro from "../assets/Intro.png"
import playstore from "../assets/Playtstore.png"
import facebook from "../assets/Facebook.png"
import instagram from "../assets/Instagram.png"
import snapchat from "../assets/Snapchat.png"
import tiktok from "../assets/TikTok.png"


const Signup = () => {

    const [SignupInfo, setSignupInfo] = useState({
        name:"",
        email:"",
        password:"",
        phoneNumber:""
    })

    const navigate = useNavigate();

    const handleChange = async(e) => {
        const { name, value } = e.target; 
        setSignupInfo({
          ...SignupInfo,
          [name]: value, 
        });
        console.log(name, value); 
      };
      console.log("LoginInfo-> ",SignupInfo)

      const handleSignup=async(e)=>{
        e.preventDefault();
        const {name,email,password,phoneNumber} = SignupInfo;
        if(!name || !email || !password || !phoneNumber){
            return handleError("All fields are required")
        }
        try{
            const url = "https://food-delivery-website-1-tobh.onrender.com/auth/signup";
            const response = await fetch(url,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(SignupInfo)
            })
            const result = await response.json()
            const {success,message} = result
            if(success){
                handleSuccess(message)
                setTimeout(()=>{
                    navigate("/login")
                },1000)
            }else if(error){
                const details = error?.details[0].message;
                handleError(details);
            }else if(!success){
                handleError(message)
            }
            console.log(result)
        }
        catch (err) {
            handleError(err.message || "An unexpected error occurred");
        }
      }

  return (
    <>
    <div id='container'>
        {/* <h1>Signup</h1> */}
        <form id ="form" onSubmit={handleSignup}>
        <img  id="logo" src={LOGO} alt="" />
        <img id="intro" src={intro} alt="" />
        
            <div>

                <label htmlFor="name">Name</label>
                <input 
                onChange={handleChange}
                type="text" 
                name="name"
                autoFocus
                placeholder="enter your name"
                value={SignupInfo.name}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                onChange={handleChange}
                type="text" 
                name="email"
                placeholder="enter your email"
                value={SignupInfo.email}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                onChange={handleChange}
                type="password" 
                name="password"
                placeholder="enter your password"
                value={SignupInfo.password}
                />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input 
                onChange={handleChange}
                type="phoneNumber" 
                name="phoneNumber"
                placeholder="enter your Phone Number"
                value={SignupInfo.phoneNumber}
                />
            </div>
            <button>Signup</button>
            <span>Already have an account?
                <Link to="/login">Sign in</Link>
            </span>
        </form>
        <div id ="image-div">
                <img 
                src={burgerLoginImage} 
                alt=""
                id="burgerLoginImage" />
            </div>
        <ToastContainer/>
    </div>
    

    <div id="footer">
        <div id ="footerLogo">
    
        <img id="LOGO2" src={LOGO2} alt="" />
        <img id="playstore" src={playstore} alt="" />
            {/* <p>&copy; 2024, All Rights Reserved.</p> */}
        <p>Company # 490039-445, Registered with</p>
        <p>House of companies.</p>
        {/* <div>
            <img src="app-store.png" alt="App Store" />
            <img src="google-play.png" alt="Google Play" />
        </div> */}
    </div>  
    <div class="wrapper">
            <p>Get Exclusive Deals in Your Inbox</p>
            <input type="email" placeholder="yourmail@gmail.com" />
            <button>Subscribe</button>
            <p id="social-media">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={snapchat} alt="" />
            <img src={tiktok} alt="" />
            </p>
        </div>
    <div>
        <p>Legal Pages</p>
        <a href="#">Terms and Conditions</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Privacy Policy</a>
    </div>
    <div>
        <p>Important Links</p>
        <a href="#">Add your Restraunt</a>
        <a href="#">Sign up to deliver</a>
        <a href="#">Create a business account</a>
    </div>
    </div>
</>

  )
}

export default Signup