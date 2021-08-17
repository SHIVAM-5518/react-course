// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBnGOBOewEyPJST0dnJgmuNZPqsz7Sy0M4",
    authDomain: "clone-app-6a943.firebaseapp.com",
    projectId: "clone-app-6a943",
    storageBucket: "clone-app-6a943.appspot.com",
    messagingSenderId: "639439055025",
    appId: "1:639439055025:web:93f9ff2cf36ce8974f9a90",
    measurementId: "G-BENEY4QL5G"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };