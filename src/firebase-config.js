// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAab4pOB4cgXkLdZh4jsyF4TDwNnt7s4hE",
  authDomain: "fireblog-8b5fc.firebaseapp.com",
  projectId: "fireblog-8b5fc",
  storageBucket: "fireblog-8b5fc.appspot.com",
  messagingSenderId: "893850660889",
  appId: "1:893850660889:web:f53784aa0d9c3ead943a88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const prover = new GoogleAuthProvider();