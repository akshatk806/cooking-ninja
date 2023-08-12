import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBtQaWtAEjQFzvJ36Dah0hyjFWoCnBvZ2E",
    authDomain: "cooking-ninja-site-9fcef.firebaseapp.com",
    projectId: "cooking-ninja-site-9fcef",
    storageBucket: "cooking-ninja-site-9fcef.appspot.com",
    messagingSenderId: "755313331986",
    appId: "1:755313331986:web:3285ea5953ca6e381fedcb"
};

// initliase firebase
firebase.initializeApp(firebaseConfig)    // by this we conncet to  firebase backend

// initliase services
const projectFirestore = firebase.firestore();

export { projectFirestore }