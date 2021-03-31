import React from "react";
import { Route, Redirect } from "react-router-dom";
const AuthRoute = ({
  component: Component,
  authenticated,
  setAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated === true ? (
        <Redirect to="/search" />
      ) : (
        <Component {...props} setAuthenticated={setAuthenticated} />
      )
    }
  />
);

export default AuthRoute;
