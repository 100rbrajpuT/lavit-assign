import React, { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/AuthReducer/action'


const Login = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
     const dispatch = useDispatch();


     const handleSubmit = (e)=>{
    
        const payload = {
          email,
          password, 
         
        }
       if(email, password){
        dispatch(login({email, password}))
        .then((r)=>{
          if(r.type === USER_LOGIN_SUCCESS){
            if(r.payload){
                  localStorage.setItem("psc_app_token",r.payload)
                  alert("login successful")
                }
            console.log(r.payload)
            navigate(comingFrom, {replace:true});
          }
          
        })
        
       }
     }
  return (
    <div>
      <h1>login page</h1>
      <div>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button onClick={handleSubmit}>Login</button>
        <div style={{ color: "wheat", margin: "20px" }}>
          <p style={{ padding: "5px" }}>Not a Member?</p>
          <Link
            to="/signup"
            style={{
              border: "2px solid black",
              padding: "5px",
              borderRadius: "10px",
            }}
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
