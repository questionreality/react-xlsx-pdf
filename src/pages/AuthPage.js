import React, { useState, useEffect } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

function AuthPage(props) {
  const [loginPage, setLoginPage] = useState(false);
  const [users, setUsers] = useState([]);
  console.log(props);
  useEffect(() => {
    if (localStorage.getItem("users")) {
      setUsers(JSON.parse(localStorage.getItem("users")));
    } else {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, []);

  return (
    <div>
      <div>
        <div onClick={() => setLoginPage(true)}>
          <h1>LOGIN</h1>
        </div>
        <div onClick={() => setLoginPage(false)}>
          <h1>SIGNUP</h1>
        </div>
      </div>
      {loginPage && <Login {...props} users={users} />}
      {!loginPage && <Signup {...props} users={users} setUsers={setUsers} />}
    </div>
  );
}

export default AuthPage;
