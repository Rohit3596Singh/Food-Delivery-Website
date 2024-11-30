import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import "../Pages/Login.css"
import { ToastContainer } from 'react-toastify';
import { handleError } from '../../util';
import { handleSuccess } from '../../util';

import burgerLoginImage from "../assets/burgerLoginImage.png"
import LOGO from "../assets/LOGO 1.png"
import LOGO2 from "../assets/LOGO2.png"
import intro from "../assets/Intro.png"
import playstore from "../assets/Platstore.png"
import facebook from "../assets/Facebook.png"
import instagram from "../assets/Instagram.png"
import snapchat from "../assets/Snapchat.png"
import tiktok from "../assets/TikTok.png"

function Login() {

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     const { email, password } = loginInfo;
    //     if (!email || !password) {
    //         return handleError('email and password are required')
    //     }
    //     try {
    //         const url = "http://localhost:3000/auth/login"
    //         const response = await fetch(url, {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(loginInfo)
    //         });
    //         const result = await response.json();
    //         const { success, message, jwtToken, name, error } = result;
    //         if (success) {
    //             handleSuccess(message);
    //             localStorage.setItem('token', jwtToken);
    //             localStorage.setItem('loggedInUser', name);
    //             console.log("Login API Response:", result);

    //             navigate('/home');

    //         } else if (error) {
    //             const details = error?.details[0].message;
    //             handleError(details);
    //         } else if (!success) {
    //             handleError(message);
    //         }
    //         console.log(result);
    //     } catch (err) {
    //         handleError(err);
    //     }
    // }

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
    
        if (!email || !password) {
            return handleError("Email and password are required");
        }
    
        try {
            const url = "http://localhost:3000/auth/login";
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginInfo),
            });
    
            const result = await response.json();
            console.log("Login API Response:", result);
    
            const { success, message, jwtToken, name, email: userEmail, error } = result;
    
            if (success) {
                handleSuccess(message);
    
                // Store user details in localStorage
                localStorage.setItem("name", name);
                localStorage.setItem("email", userEmail);
                localStorage.setItem("token", jwtToken);
                // localStorage.setItem("userID1", );
    
                // Redirect to the home page or desired route
                navigate("/home");
            } else if (error) {
                const details = error?.details[0]?.message || "An error occurred";
                handleError(details);
            } else {
                handleError(message || "Login failed");
            }
        } catch (err) {
            console.error("Login Error:", err);
            handleError(err.message || "An unexpected error occurred");
        }
    };
    
    

    return (
        <>
        <div id='container'>
            
            <form id ="form" onSubmit={handleLogin}>
            
            <img  id="logo" src={LOGO} alt="" />
            <img src={intro} alt="" />
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        // className='input'
                        onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                        value={loginInfo.email}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        // className='input'
                        onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder='Enter your password...'
                        value={loginInfo.password}
                    />
                </div>
                <button type='submit'>Login</button>
                <span>Does't have an account ?
                    <Link to="/signup">Signup</Link>
                </span>
            </form>
            <div id ="image-div">
                <img 
                src={burgerLoginImage} 
                alt=""
                id="burgerLoginImage" />
            </div>
            <ToastContainer />
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
        {/* <p id="social-media">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={snapchat} alt="" />
            <img src={tiktok} alt="" />
        </p> */}
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

export default Login