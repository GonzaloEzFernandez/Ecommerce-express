// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";    
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM1BuKY9GedXpTcFR3-o1PyqhfEOUlXVY",
  authDomain: "eccomers-d91b2.firebaseapp.com",
  projectId: "eccomers-d91b2",
  storageBucket: "eccomers-d91b2.appspot.com",
  messagingSenderId: "230413746712",
  appId: "1:230413746712:web:5788c2cf09b99c4513796d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
