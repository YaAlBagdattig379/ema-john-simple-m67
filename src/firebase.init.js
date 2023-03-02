// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADkk67f7JOOK3a42F-sBrHiXs-OymSdc0",
  authDomain: "ema-john-simple-with-auth-m59.firebaseapp.com",
  projectId: "ema-john-simple-with-auth-m59",
  storageBucket: "ema-john-simple-with-auth-m59.appspot.com",
  messagingSenderId: "1006667877293",
  appId: "1:1006667877293:web:a0b7742536b47359deaf24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;