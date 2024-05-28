// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqpJYVIepqNsHeqXwOZ_gmw3S1Cc8v6sw",
  authDomain: "netflix-ktr.firebaseapp.com",
  projectId: "netflix-ktr",
  storageBucket: "netflix-ktr.appspot.com",
  messagingSenderId: "44135959133",
  appId: "1:44135959133:web:7db566de4018e86f30dbb4",
  measurementId: "G-SJ2J8RK629"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
