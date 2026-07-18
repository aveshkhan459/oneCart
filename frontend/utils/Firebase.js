import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "onecart-733d0.firebaseapp.com",
  projectId: "onecart-733d0",
  storageBucket: "onecart-733d0.firebasestorage.app",
  messagingSenderId: "543692081772",
  appId: "1:543692081772:web:555e574a01fe9bb27b2649",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

