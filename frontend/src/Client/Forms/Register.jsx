// src/Register.jsx
import { useState } from "react";
import React from 'react';
import './Register.css';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
        name:"",
    });
    const [err, setErr] = useState(null);

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));

    }

    const handleClick = async e => {
        e.preventDefault()

        try{
            await axios.post("http://localhost:8800/backend/auth/register", inputs)
        }catch(err){
            setErr(err.response.data)
        }
    }
    
    console.log(err)

    return (
        <div className="container">
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input placeholder="Username" name="username" onChange={handleChange}/>
                </div>
                <div className="input-box">
                    <input placeholder="Email" name="email" onChange={handleChange}/>
                </div>
                <div className="input-box">
                    <input placeholder="Password" name="password" onChange={handleChange}/>
                </div>
                <div className="input-box">
                    <input placeholder="Name" name="name" onChange={handleChange}/>
                </div>
                {err && err}
                <button onClick={handleClick}>Register</button>
                <div className="login-link">
                    <p>Already have an account? <button onClick={() => navigate('/login')}>Login</button></p>
                </div>
            </form>
        </div>
    );
};

export default Register;
