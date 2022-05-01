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
        
        <a  onClick={() => props.setActiveIndex(0) }  className={props.activeIndex==0 ? "a-active" : null }><i class="fa fa-signal"></i> Voting Area </a>
        <a  onClick={() => props.setActiveIndex(1) } className={props.activeIndex==1 ? "a-active" : null }><i class="fa fa-signal"></i> Results </a>
       
        <a  onClick={() => logout()} ><i class="fa fa-sign-out-alt"></i>Logout </a>
          
  </div> 

    </div>
  
  );
};
  


export default connect(null,{logoutUser})(Navbar); 