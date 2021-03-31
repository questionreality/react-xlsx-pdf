import React, { useState } from "react";

function Login({ users, setAuthenticated, authenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthenticated(true);
  };
  return (
    <form>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        LOG IN
      </button>
    </form>
  );
}

export default Login;
