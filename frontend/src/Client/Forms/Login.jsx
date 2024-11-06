import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import React from 'react'
import './Login.css';
import { AuthContext } from '../Context/authContext';


const Login = () => {

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
      });
      const [err, setErr] = useState(null);
    
      const navigate = useNavigate()
    
      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
      const { login } = useContext(AuthContext);
    
      const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await login(inputs);
          navigate("/")
        } catch (err) {
          setErr(err.response.data);
        }
      };


    return (
        <div className="container">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                </div>
                {err && err}
                <button onClick={handleLogin}>Login</button>

                <div className="register-link">
                    <p>Don't have an Account?<button onClick={() => navigate('/register')}>Register</button></p>
                </div>
            </form>
        </div>
    );
};

export default Login;