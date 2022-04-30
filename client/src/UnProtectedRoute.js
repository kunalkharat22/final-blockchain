import React from "react";
import { Route, Redirect } from "react-router-dom";
const UnProtectedRoute = ({
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
        isVerifying ? (
        <div>Loading </div>
      ) : !isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
        to={ 
          isAdmin && forAdmin ? 
          {
            pathname: "/admin/home",
            state: { from: props.location }
          }:
          {
            pathname: "/user/home",
            state: { from: props.location }
          }
        
        }
        />
      )
    }
  />
);
/*

*/
export default UnProtectedRoute;
