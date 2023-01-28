// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFey7cjTuOnn34k7lsUody3UK_N3FbnC4",
  authDomain: "fortune-diary.firebaseapp.com",
  projectId: "fortune-diary",
  storageBucket: "fortune-diary.appspot.com",
  messagingSenderId: "1051390688224",
  appId: "1:1051390688224:web:804541192c614743f24985",
  measurementId: "G-5FBQSGPLQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider =new GoogleAuthProvider()

export const auth=getAuth(app);

export function logIn(){
    return signInWithPopup(auth,provider)
}

export function logOut(){
    return signOut(auth);
}

