// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6-WG3xrvQUQ8ba1RZBMDKPHlsxuXOrek",
  authDomain: "cv-self-manageable.firebaseapp.com",
  projectId: "cv-self-manageable",
  storageBucket: "cv-self-manageable.appspot.com",
  messagingSenderId: "177237227372",
  appId: "1:177237227372:web:5d552e3610c8df6dba6549"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {
  auth,
  db
}