import React from 'react';

import { connect } from 'react-redux';
import {logoutUser} from "../../../redux/ActionCreaters/userActions"

import "./Navbar.css"

const Navbar = (props) => {
  const logout=()=>{
     props.logoutUser(props.history);
  }
  
  
  return (
    <div class="main-nav">
       <div class="admin-logo">
       <i class="fa fa-user icon"></i>
             Voter
          </div>
       
          
      <div className='nav1'>
        
        <a className="a-active" ><i class="fa fa-signal"></i> Voting Area </a>
        <a  onClick={() => logout()} ><i class="fa fa-sign-out-alt"></i>Logout </a>
          
  </div> 

    </div>
  
  );
};
  


export default connect(null,{logoutUser})(Navbar); 