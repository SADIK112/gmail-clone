import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAyF83zre3QmovBMbkwH5xVLqOzZ7uoxwk",
    authDomain: "contactform-e72ff.firebaseapp.com",
    databaseURL: "https://contactform-e72ff.firebaseio.com",
    projectId: "contactform-e72ff",
    storageBucket: "contactform-e72ff.appspot.com",
    messagingSenderId: "65105219385",
    appId: "1:65105219385:web:ff694ec91070761d4962e8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export  { db, auth, provider };