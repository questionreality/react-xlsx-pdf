import "./App.css";
import React, { useEffect, useState } from "react";
import { DataContext } from "./util/Context";
import AuthRoute from "./util/AuthRoute";
import AuthPage from "./pages/AuthPage";
import PrivateRoute from "./util/PrivateRoute";
import Search from "./pages/Search";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("auth") === "true" ? true : false
  );
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const [searchData, setSearchData] = useState(
    JSON.parse(localStorage.getItem("searchData")) || []
  );

  const contextData = {
    authenticated,
    setAuthenticated,
    users,
    setUsers,
    searchData,
    setSearchData,
    data,
    setData,
  };
  console.log(contextData);
  useEffect(() => {
    if (localStorage.getItem("authState")) {
      setAuthenticated(true);
    }
  }, []);
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
