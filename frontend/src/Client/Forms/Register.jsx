import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {

  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
    name:""
  });
  const [err, setErr] = useState(false)

  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}));
  };

  const handleClick = async (e) => {
    e.preventDefault()

    try{ 
      await axios.post("http://localhost:8800/backend/auth/register", inputs)
    }catch(err){
      setErr(err.response.data)
    }
  };

    console.log(err)

    return (
        <div className="register">
          <div className="card">
            <div className="center-register">
              <h1>Register</h1>
              {err && <div className="error-message">{err}</div>}
              <form className="register-input">
                <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
                <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
                <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
            
                <button onClick={handleClick}>Register</button>
              </form>
              <span>Do you have an account?</span>
              <Link to="/login">
              <button>Login</button>
              </Link>
            </div>
          </div>
        </div>
      )
}

export default Register