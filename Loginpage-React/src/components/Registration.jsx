import React from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();

  const handleRegister = () => {
    // Navigate to login page after clicking register button
    navigate("/login");
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <form>
        <input type="text" placeholder="Username" /><br />
        <input type="password" placeholder="Password" /><br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;

