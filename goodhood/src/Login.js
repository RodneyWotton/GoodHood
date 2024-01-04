import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import your CSS file for styling


function Login({ setIsAuth }) {
  const [username, setUsername] = useState("");
  const [loginText, setLoginText] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/registration");
  };
  const handleLogin = () => {
    navigate("/user-dashboard");
  };

  const pageStyles = {
    textAlign: 'center',
    padding: '20px',
    backgroundSize: '500px 500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    height: '100vh',
  };

  return (
    <div className="pageStyles">
    <div className="Login">
      <div className="box">
        <div>
          <h2>Login</h2>
          <p>{loginText}</p>
          <div>
            <input
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "20px",
                boxSizing: "border-box",
              }}
              type="text"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "20px",
                boxSizing: "border-box",
              }}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br></br>
          <button onClick={handleLogin} className="login-button">
            Login
          </button>
          <button onClick={handleClick} className="register-button">
            Register
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;