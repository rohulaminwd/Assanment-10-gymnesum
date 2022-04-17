// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCoEl_EDWGAmeZvmmoUZ_TvXPbfDZnmAw",
  authDomain: "gymnasium-99909.firebaseapp.com",
  projectId: "gymnasium-99909",
  storageBucket: "gymnasium-99909.appspot.com",
  messagingSenderId: "828662194725",
  appId: "1:828662194725:web:608ea943ce845439d595cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;