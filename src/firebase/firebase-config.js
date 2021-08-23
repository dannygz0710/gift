import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';




const firebaseConfig = {
    apiKey: "AIzaSyA1aaCJVkGr0XeOg9t6lUN2x2c_IeLkCKs",
    authDomain: "react-app-cursos-9f5ac.firebaseapp.com",
    projectId: "react-app-cursos-9f5ac",
    storageBucket: "react-app-cursos-9f5ac.appspot.com",
    messagingSenderId: "1085753588911",
    appId: "1:1085753588911:web:604210902a53bd8db4285a"
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }