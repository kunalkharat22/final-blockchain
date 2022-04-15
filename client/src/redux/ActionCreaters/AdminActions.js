
import {auth,firebaseApp,database } from "../../firebase";
import {
    ADMIN_SIGNIN_REQUEST ,ADMIN_SIGNIN_SUCCESS, ADMIN_SIGNIN_FAIL,USER_LOGOUT 
    

} from "../actions.js";

export const adminLogin = (email, password,history) => dispatch => {
  console.log(email );
  console.log(password);
    dispatch({ type: ADMIN_SIGNIN_REQUEST});


   auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
        console.log(user);
        dispatch({ type: ADMIN_SIGNIN_SUCCESS,payload:user}); 
        history.push("/admin/home")

    })
    .catch((error) => {
      console.log(error);

    var errorCode = error.code;
    var errorMessage = error.message;

    dispatch({ type: ADMIN_SIGNIN_FAIL,payload:errorCode}); 

    });

}

export const logoutAdmin = (history) => dispatch => {   
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        dispatch({type:USER_LOGOUT});
        console.log("executed logtu");
        history.push("/admin/login")
      })
      .catch(error => {
        //Do something with the error if you want!
       alert(error)

      });
  };