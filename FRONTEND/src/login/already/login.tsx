// import React, { useState } from "react";
// import "./login.css";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Build payload
//     const payload = {
//       username: username,
//       password: password,
//     };

//     console.log("Payload:", payload);

//     // Example: send to backend
//     // fetch("/api/login", {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/json" },
//     //   body: JSON.stringify(payload),
//     // })
//     // .then(res => res.json())
//     // .then(data => console.log("Response:", data));
//   };

//   return (
//     <div className="container">
//       <div className="login-container">
//         <h1>LOGIN</h1>
//         <form onSubmit={handleSubmit}>
//           <h4>Username :</h4>
//           <input
//             placeholder="Enter your Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />

//           <h4>Password :</h4>
//           <input
//             type="password"
//             placeholder="Enter your Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <br />
//           <br />
//           <button type="submit" className="login-button">
//             LOGIN
//           </button>
//         </form>

//         <div className="options-container">
//           <a href="/forgotpass">Forgot Password ?</a>
//           <a href="/user-registration">New User</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "./login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = { username, password };

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        alert("Login successful ✅");
        // Example: save token or redirect
        // localStorage.setItem("token", data.token);
        // window.location.href = "/dashboard";
      } else {
        alert("Invalid username or password ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <h4>Username :</h4>
          <input
            type="text"
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <h4>Password :</h4>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <br />
          <br />
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "LOGIN"}
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
