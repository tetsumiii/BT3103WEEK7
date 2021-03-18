import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyD35N5Iu6kE01l1HwDTh1oDKn6kBTr-eeI",
    authDomain: "bt3103-week-6-30710.firebaseapp.com",
    projectId: "bt3103-week-6-30710",
    storageBucket: "bt3103-week-6-30710.appspot.com",
    messagingSenderId: "68704676565",
    appId: "1:68704676565:web:e1c8e698f7504ecf4ed05c",
    measurementId: "G-QZR7CDQY5C"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;