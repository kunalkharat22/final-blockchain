import React from "react";
import { Route, Redirect,withRouter } from "react-router-dom";
const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  forAdmin,
  isAdmin,
  isLoading,
  ...rest
}) => (

  <Route
    {...rest}
     render={props =>
      (isVerifying && isLoading) ? (
        <div>Loading</div>
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
        to={ 
           forAdmin ? 
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
