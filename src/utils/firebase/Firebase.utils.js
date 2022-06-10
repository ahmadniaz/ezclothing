import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyARzfTP_KY2e9z51gOL82Zc1xvo9N2rwu8",
  authDomain: "ezclothing-3ecc9.firebaseapp.com",
  projectId: "ezclothing-3ecc9",
  storageBucket: "ezclothing-3ecc9.appspot.com",
  messagingSenderId: "247230749778",
  appId: "1:247230749778:web:538136958e032d508f138b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef); // it is to get the object that is being created by the auth process for the collection
  console.log(userSnapshot.exists()); // it is to check if reference to our data in the collection exists or not

  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error in processing", error.message);
    }
  }

  return userDocRef;
};
