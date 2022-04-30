// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBUa8yvGcC2bk9fFfldSp31gTLvZttk9PI",
    authDomain: "voting-3e697.firebaseapp.com",
    databaseURL: "https://voting-3e697-default-rtdb.firebaseio.com",
    projectId: "voting-3e697",
    storageBucket: "voting-3e697.appspot.com",
    messagingSenderId: "1020625217030",
    appId: "1:1020625217030:web:162efc409b80072af18587",
    measurementId: "G-D1KSLPE1GT"
  };
  
  
  firebase.initializeApp(firebaseConfig); 
  export const firebaseApp = firebase;

  const baseDb = firebaseApp.firestore(); 

  const database = firebaseApp.database();  

  const auth = firebaseApp.auth();

export {auth ,database ,baseDb};