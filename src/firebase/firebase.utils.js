import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCZN7FUfo7Uo52HTqs51taQ2QPwYu_HoHo",
  authDomain: "crwn-db-d2958.firebaseapp.com",
  projectId: "crwn-db-d2958",
  storageBucket: "crwn-db-d2958.appspot.com",
  messagingSenderId: "95600074285",
  appId: "1:95600074285:web:6e3cf5112959daa7dfa2a4",
  measurementId: "G-H9VVB06Z7Q",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
