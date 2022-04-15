import React from "react";
import { Route, Redirect,withRouter } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isVerifying ? (
        <div />
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/user/register",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;