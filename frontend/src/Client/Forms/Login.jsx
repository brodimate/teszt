import React from 'react'
import './Login.css';


const Login = () => {
    return (
        <div className="container">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username'/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Password'/>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an Account?<a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;