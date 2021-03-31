import React from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({
  component: Component,
  authenticated,
  setAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated === false ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} setAuthenticated={setAuthenticated} />
      )
    }
  />
);
export default PrivateRoute;
