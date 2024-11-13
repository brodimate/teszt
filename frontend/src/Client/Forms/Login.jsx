import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/authContext";
import "./Login.css";

const Login = () => {
  const [inputs, setInputs] = useState({
    username:"",
    password:""
  });
  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}));
  };
  const {login} = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault()
    try{
      await login(inputs);
      navigate("/")
    }catch(err){
      setErr(err.response.data)
    }
    
  }

  return (
    <div className="login">
      <div className="card">
        <div className="center-login">
          <h1>Login</h1>
          {err && <div className="error-message">{err}</div>}
          <form className="login-input">
            <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
            <button onClick={handleLogin}>Login</button>
          </form>
          <span>Don't you have an account?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login