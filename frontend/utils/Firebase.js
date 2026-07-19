import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "ecommerce-b83fe.firebaseapp.com",
  projectId: "ecommerce-b83fe",
  storageBucket: "ecommerce-b83fe.firebasestorage.app",
  messagingSenderId: "163820147875",
  appId: "1:163820147875:web:87fe8c9e822478159adb16"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

