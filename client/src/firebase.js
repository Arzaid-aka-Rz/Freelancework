// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "abhay-mern-estate.firebaseapp.com",
  projectId: "abhay-mern-estate",
  storageBucket: "abhay-mern-estate.appspot.com",
  messagingSenderId: "1056092218334",
  appId: "1:1056092218334:web:9b25ea975c4bdb4f9bb34f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);