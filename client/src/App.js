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
import {database} from './firebase';

function App(props) {
  const { isAuthenticated, isVerifying } = props;
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
          
        <Route exact path="/" component={withRouter(HomePage)} history={history}></Route> 
            
              
      {  <UnProtectedRoute
        exact
        path="/user/register"
        component={withRouter(UserRegister)}
        isAuthenticated={isAuthenticated}
        history={history}
        isVerifying={isVerifying}
      />   }
      
        <ProtectedRoute
        exact
        path="/user/home"
        component={withRouter(UserHomePage)}
        isAuthenticated={isAuthenticated}
        history={history}
        isVerifying={isVerifying}
      />
        

        <Route exact path="/admin/login" component={withRouter(AdminLogin)} history={history}></Route>   
        <Route exact path="/admin/home" component={withRouter(AdminHomePage)} history={history}></Route>  
        <Route exact path="*" component={withRouter(NotFound)} history={history} ></Route>   

       
       
        </Switch>
     
      </Router>

    
        
          </div>
        )
    }
    
    
const mapStateToProps=({user})=>{
  return {
    isAuthenticated: user.isAuthenticated,
    isVerifying: user.isVerifying
  };
}

export default connect(mapStateToProps,{logoutUser})(App); 

