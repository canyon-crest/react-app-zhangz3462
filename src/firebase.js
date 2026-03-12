// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfL91g5vXV_nVzctQEQ1rLK6tOhnQ5Rnk",
  authDomain: "react-firebase-app-42daa.firebaseapp.com",
  projectId: "react-firebase-app-42daa",
  storageBucket: "react-firebase-app-42daa.firebasestorage.app",
  messagingSenderId: "373560027726",
  appId: "1:373560027726:web:207f4db07aadc62ce9311f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
