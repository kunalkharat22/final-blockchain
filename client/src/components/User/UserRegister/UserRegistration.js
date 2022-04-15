import React, { useEffect, useState } from 'react';
import "./UserRegister.css"
import "./userreg";
import $ from 'jquery';
import {sendOtp,verifyOtp} from "../../../redux/ActionCreaters/userActions"
import { connect } from 'react-redux';
import {firebaseApp ,auth} from "../../../firebase"

const UserRegistration = (props) => {
  
    console.log(props.user)

    const [data,setData]=useState({
        adhar:"",
        otp:"",
    })

    const [adharerror,setAdharError]=useState(null)

    const [otpClicked,setOtpClicked]=useState(false)
   
  const onChangeHandler=(e)=>{         
           setData({...data,[e.target.name]:e.target.value})   
  } 


  const Sendotp=()=>{

var verify = new firebaseApp.auth.RecaptchaVerifier('recaptcha-container', {
  'size': 'invisible'
  });
      

 if( !otpClicked){  

        if(data.adhar){         
          setAdharError(null)
          $("#otp").addClass("color-green");
           //send otp
           props.sendOtp(data,verify)
          
        }else{
          setAdharError("invalid adhar")
        }
       
      }       
 }


    const VerifyOtp=()=>{
        //verify otp
        if(data.otp){
          props.verifyOtp(data.otp)
        }
       
    }
    
    const SignInClicked=()=>{
            console.log(props);
                props.history.push("/user/login")
            }

    return (

        
<div class="main">
  
  <div class="comp2-left ">
    <h1 class="text-align-left color-white logo"> E - VOTING PORTAL</h1>
    <div class="d-flex">
      
    <h1 class="color-white text-align-center already-registered">Already   Registered ?</h1>
        <h3 class="color-white text-align-center details ">Log in with your Aadhar to get started <br/>with your online e-voting process <br/>in just a few steps.
</h3>
    
    <button class="signIn-btn btn text-align-center  btn-bg-transparent "  onClick={(e)=>{SignInClicked(e)}}>SIGN IN </button>
    </div>
  </div>
  
  
  <div class="comp2-right d-flex">
  
    <h1 class="text-align-center color-green sign-in">Register Or SignIn</h1>
    <div class="form"> 
      
          
          
       <div class="input-field-cont">
       <i class="fa fa-id-card icon "></i>
       <input class="input-field" type="number" placeholder="Adhar" name="adhar" value={data.adhar} onChange={(e)=>{onChangeHandler(e)}} />
       <span onClick={()=>{Sendotp()}} id="otp"> <i class="fa fa-check-circle icon " id="#otp"></i></span>
      
         </div>
        <h4 class="color-green">{adharerror}</h4>
        <div id="recaptcha-container"></div>
      
      {  props.user.otpsent && <h4 class="color-green"> Verify OTP sent to your registered phone no. linked to your Aadhar</h4>
      }
       <div class="input-field-cont">
       <i class="fa fa-key icon"></i>
       <input class="input-field" type="text" placeholder="Otp" name="otp" value={data.otp} onChange={(e)=>{onChangeHandler(e)}} />
       </div>
      
  
    <button class="signIn-btn btn text-align-center btn-bg-green " onClick={(e)=>{VerifyOtp(e)}} >Verify Otp </button>
    
    </div> 
  </div>
</div>


    )}

    

const mapStateToProps=({user})=>{
  return {user}
}

export default connect(mapStateToProps,{verifyOtp,sendOtp})(UserRegistration); 

