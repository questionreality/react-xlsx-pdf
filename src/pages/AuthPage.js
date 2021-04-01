import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

function AuthPage(props) {
  const [loginPage, setLoginPage] = useState(false);
  console.log(props);

  return (
    <div className="lg:w-2/6 md:w-3/5 sm:w-5/6 w-11/12 mx-auto md:my-10 my-5 shadow-2xl">
      <div
        className={loginPage ? "active default" : "default"}
        onClick={() => setLoginPage(true)}
      >
        <h1>LOG IN</h1>
      </div>
      <div
        className={!loginPage ? "active default" : "default"}
        onClick={() => setLoginPage(false)}
      >
        <h1>SIGN UP</h1>
      </div>
      <div className="bg-primary-100">
        {loginPage && <Login />}
        {!loginPage && <Signup />}
      </div>
    </div>
  );
}

export default AuthPage;
