// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe1kBtvTtd9E_P2Jl3Yy7VsV8zqislmq0",
  authDomain: "ed-tech-company-2e84c.firebaseapp.com",
  projectId: "ed-tech-company-2e84c",
  storageBucket: "ed-tech-company-2e84c.appspot.com",
  messagingSenderId: "193899854258",
  appId: "1:193899854258:web:f136d30eba2b713074ccab",
  measurementId: "G-EK4Y4XJ4C7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
