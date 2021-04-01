import React, { useState, useContext } from "react";
import { DataContext } from "../util/Context";

function Login() {
  const { setAuthenticated, users, setUsers } = useContext(DataContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      users.find((user) => user.email === email && user.password === password)
    ) {
      //   setAuthenticated(true);
    } else {
      //   setLoginPage(false);
    }
    // setAuthenticated(true);
    // localStorage.setItem("auth", "true");
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
      <button type="submit" className="btn" onClick={handleSubmit}>
        LOG IN
      </button>
      <a
        href="#"
        className="text-primary-700  mt-2 underline mx-auto w-full text-center cursor-pointer text-xs inline-block"
      >
        Forgotten password?
      </a>
      <div className="google-btn">
        <div className="google-icon-wrapper">
          <img
          alt="google-icon"
            className="google-icon-svg"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <p className="btn-text">
          <b>Log in with Google</b>
        </p>
      </div>
    </form>
  );
}

export default Login;
