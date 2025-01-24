// utils/firebaseConfig.js
import { initializeApp } from "firebase/app";

console.log(
  "NEXT_PUBLIC_FIREBASE_API_KEY",
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY
);
const firebaseConfig = {
  apiKey: "AIzaSyCylSqbhvGEMSAg4d3wPOmJG8Qu-lyzOeQ",
  authDomain: "localhost:3000",
  projectId: "videoappnext",
  storageBucket: "videoappnext.firebasestorage.app",
  messagingSenderId: "137686565175",
  appId: "1:137686565175:web:ddf017fa15af3228ef1ab2",
  measurementId: "G-WHE5TS406T",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
