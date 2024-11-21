import React from 'react'
import {ToastContainer} from "react-toastify";
import { useState } from 'react'; 
import {Link, useNavigate} from "react-router-dom"
import { handleError } from '../../util';

const Signup = () => {

    const [SignupInfo, setSignupInfo] = useState({
        name:"",
        email:"",
        password:""
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
        const {name,email,password} = SignupInfo;
        if(!name || !email || !password){
            return handleError("All fields are required")
        }
        try{
            const url = "http://localhost:3000/auth/signup";
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
    <div className='container'>
        <h1>Signup</h1>
        <form onSubmit={handleSignup}>
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
            <button>Signup</button>
            <span>Already have an account?
                <Link to="/login">Sign in</Link>
            </span>
        </form>
        <ToastContainer/>
    </div>
  )
}

export default Signup