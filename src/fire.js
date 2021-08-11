import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBQNSkaEBstK_6HjJuVXLfkW9aDi-XZpq8",
    authDomain: "auth-login-e60e5.firebaseapp.com",
    databaseURL: "https://auth-login-e60e5-default-rtdb.firebaseio.com",
    projectId: "auth-login-e60e5",
    storageBucket: "auth-login-e60e5.appspot.com",
    messagingSenderId: "802530648720",
    appId: "1:802530648720:web:ef6dbabb98f26049a62e15"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;