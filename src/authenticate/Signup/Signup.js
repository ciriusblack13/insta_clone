import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
  
    const handleSignUp = async () => {
      try {
        const userData = {
          email: email,
          password: password,
          username: username,
        };

        const response = await axios.post("/auth/register", userData);

        if (response.status === 200) {
          console.log(response.data);
        }
      } catch (error) {
        console.error("Errore durante la registrazione:", error);
      }
    };

    return (
      <div className="signup">
        <img
          src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
          alt=""
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          value={email}
        />
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="email"
          placeholder="Username"
          value={username}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          value={password}
        />
        <button onClick={handleSignUp}>Sign up</button>
      </div>
    );
}

export default Signup