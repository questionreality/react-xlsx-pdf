import "./App.css";
import React, { useEffect, useState } from "react";
import AuthRoute from "./util/AuthRoute";
import AuthPage from "./pages/AuthPage";
import PrivateRoute from "./util/PrivateRoute";
import Search from "./pages/Search";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("authState")) {
      setAuthenticated(true);
    }
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          <AuthRoute
            exact
            path="/"
            component={AuthPage}
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
          <PrivateRoute
            exact
            path="/search"
            component={Search}
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
