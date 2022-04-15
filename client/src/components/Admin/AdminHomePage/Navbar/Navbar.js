import React from 'react';

import { connect } from 'react-redux';

import {logoutAdmin} from "../../../../redux/ActionCreaters/AdminActions"
  
import "./Navbar.css"
const Navbar = (props) => {
  const logout=()=>{
    props.setActiveIndex(4) ;
     props.logoutAdmin(props.history);
  }
  
  
  return (
    <div class="main-nav">
       <div class="admin-logo">
       <i class="fa fa-user icon"></i>
       Admin
          </div>
          
      <div className='nav '>
        
        <a  onClick={() => props.setActiveIndex(0) } className={props.activeIndex==0 ? "a-active" : null} ><i class="fa fa-square-info"></i> Candidate details </a>
        <a  onClick={() => props.setActiveIndex(1)} className={props.activeIndex==1 ? "a-active" : null}><i class="fa fa-user-plus"></i>  Add/Delete Candidate </a>
        <a  onClick={() => props.setActiveIndex(2)} className={props.activeIndex==2 ? "a-active" : null}><i class="fa fa-signal"></i>  Election Status  </a>          
        <a  onClick={() => props.setActiveIndex(3)} className={props.activeIndex==3 ? "a-active" : null}><i class="fa fa-chart-bar"></i> User Statistics   </a>                 
        <a  onClick={() => {logout()}} className={props.activeIndex==4 ? "a-active" : null}><i class="fa fa-sign-out-alt"></i> Logout   </a>
       
       
  </div> 

    </div>
  
  );
};
  


export default connect(null,{logoutAdmin})(Navbar); 