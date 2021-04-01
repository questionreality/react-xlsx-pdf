import React, { useContext } from "react";
import { DataContext } from "../util/Context";
import { Redirect } from "react-router-dom";

function Logout(props) {
  const { setData, setAuthenticated, setUserInputs } = useContext(DataContext);
  const handleLogout = () => {
    setData([]);
    localStorage.setItem("data", null);
    setAuthenticated(false);
    localStorage.setItem("authenticated", null);
    setUserInputs([]);
    localStorage.setItem("userInputs", null);
    props.history.push("/");
  };
  return (
    <button className="btn btn-red btn-large" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
