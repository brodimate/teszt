import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
    return (
        <div className="register">
          <div className="card">
            <div className="center-register">
              <h1>Register</h1>
              <form className="register-input">
                <input type="text" placeholder="Username"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="text" placeholder="Name"/>
                <button>Register</button>
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