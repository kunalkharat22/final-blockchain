import React, { useEffect,useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  useHistory
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import UnProtectedRoute from "./UnProtectedRoute";


import  HomePage from "./components/MainHomePage/Home.js"
import UserRegister  from "./components/User/UserRegister/UserRegistration";
import AdminLogin from "./components/Admin/AdminLogin/AdminLogin.js";
import AdminHomePage  from "./components/Admin/AdminHomePage/AdminHomePage.js";
import UserHomePage  from "./components/User/UserHomePage/UserHomePage.js";
import NotFound  from "./components/NotFound/NotFound";

import { connect } from 'react-redux';
import {logoutUser} from "./redux/ActionCreaters/userActions"

function App(props) {
  const { isAuthenticated, isVerifying , isAdmin} = props;
  useEffect(()=>{
    //props.logoutUser()
     
    /* database.ref('users/'+"3333333333").set({
      name:"desale",
      ph:"7083192202"
    })
    */
   
    })
 
      
  let history = useHistory();  
         return (
          
      <div className="App">
        <Router history={history}>

        <Switch>          
      
        <ProtectedRoute exact path="/" component={withRouter(HomePage)} history={history}></ProtectedRoute>          
              
       
       <UnProtectedRoute
        exact
        path="/user/login"
        component={withRouter(UserRegister)}
        isAuthenticated={isAuthenticated}
        history={history}
        isVerifying={isVerifying}
        isAdmin={isAdmin}
        forAdmin={false}
      /> 
        
      
    <ProtectedRoute
        exact
        path="/user/home"
        component={withRouter(UserHomePage)}
        isAuthenticated={isAuthenticated}
        history={history}
        isVerifying={isVerifying}
        isAdmin={isAdmin}  
        forAdmin={false}
        />
        
           
      
      <UnProtectedRoute
        exact
        path="/admin/login"
        component={withRouter(AdminLogin)}
        isAuthenticated={isAuthenticated}
        history={history}
        isVerifying={isVerifying}
        isAdmin={isAdmin}
        forAdmin={true}
      /> 
        
      
     
       <ProtectedRoute
        exact
        path="/admin/home"
        component={withRouter(AdminHomePage)}
        isAuthenticated={isAuthenticated}
        history={history}
        isVerifying={isVerifying}
        isAdmin={isAdmin}
        forAdmin={true}
      />
      
        <Route exact path="*" component={withRouter(NotFound)} history={history} ></Route> 
      
        </Switch>
     
      </Router>   
        
          </div>
        )
    }
    
    
const mapStateToProps=({user})=>{
  return {
    isAuthenticated: user.isAuthenticated,
    isVerifying: user.isVerifying,
    isAdmin:user.isAdmin
  };
}

export default connect(mapStateToProps,{logoutUser})(App); 

