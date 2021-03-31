import React, { useState, useContext } from "react";
import { DataContext } from "../util/Context";
function Signup() {
  const { setAuthenticated, users, setUsers } = useContext(DataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (users.map((users) => users.email).find((ele) => ele === email)) {
      //   setLoginPage(true);
    } else {
      //   setAuthenticated(true);
      //   localStorage.setItem("auth", "true");
    }
  };
  return (
    <form className="form">
      <div>
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          type="email"
          value={email}
          className="input"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password" className="label">
          Password:
        </label>
        <input
          type="password"
          value={password}
          className="input"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="label">
          Confirm Password:
        </label>
        <input
          type="password"
          value={confirmPassword}
          className="input"
          placeholder="Confirm your password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button className="btn" type="submit" onClick={handleSubmit}>
        CREATE ACCOUNT
      </button>
    </form>
  );
}

export default Signup;
