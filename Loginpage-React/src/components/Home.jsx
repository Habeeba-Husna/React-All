import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const handleLogin2 = () => {
    // Navigate to home page after clicking login button
    navigate("/");
  };
  return (
    <div>
      <h1>Welcome to Home Page!</h1>
      <button type="button" onClick={handleLogin2}>
          prev
        </button>
    </div>
  );
}

export default Home;
