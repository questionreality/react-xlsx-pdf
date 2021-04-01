import React, { useState, useContext } from "react";
import { DataContext } from "../util/Context";
function Signup() {
  const { setAuthenticated } = useContext(DataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (users.map((users) => users.email).find((ele) => ele === email)) {
    //   //   setLoginPage(true);
    // } else {
    //   //   setAuthenticated(true);
    //   //   localStorage.setItem("auth", "true");
    // }
    setAuthenticated(true);
    localStorage.setItem("authenticated", "true");
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
      <p className="text-gray-700 mt-2  mx-auto w-full text-center cursor-pointer text-xs inline-block mb-2">
        By clicking Create Account, you agree to our{" "}
        <a href="/" className="underline text-primary-700">
          {" "}
          Terms{" "}
        </a>{" "}
        and{" "}
        <a href="/" className="underline text-primary-700">
          {" "}
          Cookie Policy
        </a>
        .
      </p>
      <div className="google-btn">
        <div className="google-icon-wrapper">
          <img
            alt="google-icon"
            className="google-icon-svg"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <p className="btn-text">
          <b>Sign up with Google</b>
        </p>
      </div>
    </form>
  );
}

export default Signup;
