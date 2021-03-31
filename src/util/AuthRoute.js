import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { DataContext } from "./Context";

const AuthRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(DataContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Redirect to="/search" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AuthRoute;
