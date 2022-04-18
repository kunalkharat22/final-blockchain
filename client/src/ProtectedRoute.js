import React from "react";
import { Route, Redirect,withRouter } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  forAdmin,
  isAdmin,
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

        to={ 
          isAdmin && forAdmin ? 
          {
            pathname: "/admin/login",
            state: { from: props.location }
          }:

          {
            pathname: "/user/register",
            state: { from: props.location }
          }
        
        }

        />
      )
    }
  />
);

export default ProtectedRoute;