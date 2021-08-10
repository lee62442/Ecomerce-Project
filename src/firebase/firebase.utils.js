import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);

  const userRef = firebase.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
