// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCylSqbhvGEMSAg4d3wPOmJG8Qu-lyzOeQ",
  authDomain: "videoappnext.firebaseapp.com",
  projectId: "videoappnext",
  storageBucket: "videoappnext.firebasestorage.app",
  messagingSenderId: "137686565175",
  appId: "1:137686565175:web:ddf017fa15af3228ef1ab2",
  measurementId: "G-WHE5TS406T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
