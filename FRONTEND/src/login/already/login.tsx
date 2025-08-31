import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build payload
    const payload = {
      username: username,
      password: password,
    };

    console.log("Payload:", payload);

    // Example: send to backend
    // fetch("/api/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // })
    // .then(res => res.json())
    // .then(data => console.log("Response:", data));
  };

  return (
    <div className="container">
      <div className="login-container">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <h4>Username :</h4>
          <input
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <h4>Password :</h4>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />
          <br />
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>

        <div className="options-container">
          <a href="/forgotpass">Forgot Password ?</a>
          <a href="/user-registration">New User</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
