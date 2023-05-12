// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8RLiVOZ9h3ABcAIxk3v5GTSzHtOD1Xxw",
  authDomain: "marolio-5f612.firebaseapp.com",
  projectId: "marolio-5f612",
  storageBucket: "marolio-5f612.appspot.com",
  messagingSenderId: "376934098516",
  appId: "1:376934098516:web:58484aa9b0968d40b36fc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);