import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "foodigo-ac9df.firebaseapp.com",
  projectId: "foodigo-ac9df",
  storageBucket: "foodigo-ac9df.firebasestorage.app",
  messagingSenderId: "895655093705",
  appId: "1:895655093705:web:be4610a1653b530c057418"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

