import axios from "axios";
import {auth,firebaseApp,database } from "../../firebase";

import {
     USER_LOGOUT ,LOAD_USER ,
     USER_SIGNIN_REQUEST,USER_SIGNIN_SUCCESS,USER_SIGNIN_FAIL
     ,OTP_INVALID,OTP_SENT,OTP_VERIFIED,
     VERIFY_AUTH_REQUEST,VERIFY_AUTH_SUCCESS
     

} from "../actions.js";


export const verifyAuth = () => dispatch => {

    dispatch({ type: VERIFY_AUTH_REQUEST});
    
    firebaseApp.auth().onAuthStateChanged(user => {
            
      if (user !== null) {
        dispatch(signin(user));
        console.log(user);
      }
      dispatch({ type: VERIFY_AUTH_SUCCESS});
    });


  };

export const Adminsignin = (user) => async (dispatch) => {
  console.log(user);
  dispatch({ type: USER_SIGNIN_SUCCESS,payload:user});  

}

export const signin = (user) => async (dispatch) => {
  console.log(user);
  dispatch({ type: USER_SIGNIN_SUCCESS,payload:user});   
}

var final;

export const sendOtp=(data,verify) => async (dispatch) => {{

 console.log("in sendOtp");  
  console.log(verify);

  var starCountRef = database.ref('users/' +data.adhar);
  starCountRef.on('value', (snapshot) => {
    const user = snapshot.val();
    console.log(user);
    
  auth.signInWithPhoneNumber(user.ph, verify).then((result) => {    
      final=result;
   
      dispatch({ type: OTP_SENT });    
  })
      .catch((err) => {
          console.log(err);
         // window.location.reload()
      });
  });



}
}
export const verifyOtp=(otp) => async (dispatch) => {{
    console.log(final);
    console.log(otp);

    if (otp === null || final === null)
        dispatch({ type: OTP_INVALID });
      final.confirm(otp).then((result) => {
           console.log(result);           
           dispatch({ type: OTP_VERIFIED });
           dispatch(verifyAuth());

        }).catch((err) => {
            dispatch({ type: OTP_INVALID });
            console.log("Wrong code");
        }) 
     
   }}
   


export const logoutUser = () => dispatch => {   
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        dispatch({type:USER_LOGOUT});
      })
      .catch(error => {
        //Do something with the error if you want!
       alert(error)
      });
  };