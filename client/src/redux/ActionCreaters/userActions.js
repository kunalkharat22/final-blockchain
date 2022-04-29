
import {auth,firebaseApp,database } from "../../firebase";

import {
  
     USER_LOGOUT ,LOAD_USER ,
     USER_SIGNIN_REQUEST,USER_SIGNIN_SUCCESS,USER_SIGNIN_FAIL
     ,OTP_INVALID,OTP_SENT,OTP_VERIFIED,
     VERIFY_AUTH_REQUEST,VERIFY_AUTH_SUCCESS,
     ADMIN_SIGNIN_REQUEST,ADMIN_SIGNIN_SUCCESS,ADMIN_SIGNIN_FAIL   ,
     OTP_SENT_ERROR  

} from "../actions.js";

var final;
var dataAdhar;
var tempuser;

export const verifyAuth = () => (dispatch,getState) => {

    dispatch({ type: VERIFY_AUTH_REQUEST});
    
    firebaseApp.auth().onAuthStateChanged(user => {
          
      if (user && user.email) {         
        
        dispatch(Adminsignin(user));
        console.log(user);
        console.log(`${user.email} is  loggedIn as admin  `);
      }
      
     else if (user !== null) {
       
        dispatch(signin(user));         


        //get Details of this user from firebase
        console.log(user);
        console.log(`${user.uid} logged In as User`);
      }
      else{
        console.log("no user/admin");
      }
     
      
      dispatch({ type: VERIFY_AUTH_SUCCESS});
    });


  };

export const Adminsignin = (user) => async (dispatch) => {
  console.log(user);
  dispatch({ type: ADMIN_SIGNIN_SUCCESS,payload:user});  

}

export const signin = (user) => async (dispatch,getState) => {
  console.log(user);
  dispatch({ type: USER_SIGNIN_SUCCESS,payload:user});   

   

}



export const sendOtp=(data,verify) => async (dispatch,getState) => {{

 console.log("in sendOtp");  
  console.log(verify);

  var starCountRef = database.ref('users/' +data.adhar);
  dataAdhar=data.adhar;

  console.log(starCountRef);
  starCountRef.on('value', (snapshot) => {
    const user = snapshot.val();
    tempuser=user
    console.log(user);

    if(user&&user.ph){
      auth.signInWithPhoneNumber(user.ph, verify).then((result) => {    
        final=result;     
        dispatch({ type: OTP_SENT });    
    })
        .catch((err) => {
            console.log(err);
            dispatch({ type: OTP_SENT_ERROR,payload:"Server Error , Try Again After SomeTime" }); 
        });
    }else{
      console.log("no user"); 
      dispatch({ type: OTP_SENT_ERROR,payload:"Invalid Adhar" });  
       
    }   

  });

}
}

export const verifyOtp=(otp) => async (dispatch,getState) => {{
    console.log(final);
    console.log(otp);
    

    if (otp === null || final === null)
        dispatch({ type: OTP_INVALID });
       final.confirm(otp).then((result) => {
        console.log(tempuser);        
       
           console.log(result);           
           dispatch({ type: OTP_VERIFIED });

           if(tempuser.newUser === true){
            
           const user1 = firebaseApp.auth().currentUser;
           console.log(user1);          
       
          database.ref('usersDetails/'+user1.uid).set({
            adhar:dataAdhar,
            isVotes:false
          })         
            
          
          database.ref('users/' + dataAdhar).update({          
            newUser:false  
          }, (error) => {
            if (error) {
              // The write failed...       
              console.log(error);
            } else {
              console.log("User Registered - Creating Copy");
            }
          });
          
       
         
        } 
           dispatch(verifyAuth());         
        

        }).catch((err) => {
          console.log(err);
            dispatch({ type: OTP_INVALID,payload:"Invalid Otp " });
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