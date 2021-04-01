import "./App.css";
import React, { useEffect, useState } from "react";
import { DataContext } from "./util/Context";
import AuthRoute from "./util/AuthRoute";
import AuthPage from "./pages/AuthPage";
import PrivateRoute from "./util/PrivateRoute";
import Search from "./pages/Search";

import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated") === "true" ? true : false
  );
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const [userInputs, setUserInputs] = useState(
    JSON.parse(localStorage.getItem("userInputs")) || []
  );

  const contextData = {
    authenticated,
    setAuthenticated,
    // users,
    // setUsers,
    userInputs,
    setUserInputs,
    data,
    setData,
  };
  console.log(contextData);
  useEffect(() => {}, []);
  return (
    <div>
      <DataContext.Provider value={contextData}>
        <Router>
          <Switch>
            <AuthRoute exact path="/" component={AuthPage} />
            <PrivateRoute exact path="/search" component={Search} />
          </Switch>
        </Router>
      </DataContext.Provider>
    </div>
  );
}

export default App;
