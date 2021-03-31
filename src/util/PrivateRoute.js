import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { DataContext } from "./Context";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useContext(DataContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
export default PrivateRoute;
