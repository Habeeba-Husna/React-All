import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Navigate to home page after clicking login button
    navigate("/home");
  };
  const handleLogin1 = () => {
    // Navigate to home page after clicking login button
    navigate("/");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <input type="text" placeholder="Username" /><br />
        <input type="password" placeholder="Password" /><br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        <button type="button1" onClick={handleLogin1}>
          preveous
        </button>
      </form>
    </div>
  );
}

export default Login;
