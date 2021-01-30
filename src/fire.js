import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDLAxAs9S-F3R5F80T7Nt_Vaab5zC2hCkk",
    authDomain: "aesthetic-92afd.firebaseapp.com",
    databaseURL: "https://aesthetic-92afd-default-rtdb.firebaseio.com",
    projectId: "aesthetic-92afd",
    storageBucket: "aesthetic-92afd.appspot.com",
    messagingSenderId: "489247555505",
    appId: "1:489247555505:web:8c6b17023ad08467518790"
  };
  const fire = firebase.initializeApp(firebaseConfig);


  export default fire;