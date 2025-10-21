// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6Gyyf2tm1CR6FZ65Q35YyBfbV-RFgqZo",
  authDomain: "dragon-news-codes.firebaseapp.com",
  projectId: "dragon-news-codes",
  storageBucket: "dragon-news-codes.firebasestorage.app",
  messagingSenderId: "803628530225",
  appId: "1:803628530225:web:de6bfda8d1fa54cc857310"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;