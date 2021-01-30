// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
console.log(firebaseConfig)
const firebaseConfig = {
    apiKey: "AIzaSyDHE9fVBUM_mto-p_SkWnyKtOiRu8M5F98",
    authDomain: "react-firebase-farazamiruddin.firebaseapp.com",
    databaseURL: "https://react-firebase-farazamiruddin.firebaseio.com",
    projectId: "react-firebase-farazamiruddin",
    storageBucket: "react-firebase-farazamiruddin.appspot.com",
    messagingSenderId: "338564911587",
    appId: "1:338564911587:web:c34e6fee0ff41bbe7fd0d6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebaseConfig)
