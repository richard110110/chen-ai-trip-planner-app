// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9Za1BQ5qrnF1vahVFmred3wFqnlMwKlA",
  authDomain: "dolphinaitraveltrip.firebaseapp.com",
  projectId: "dolphinaitraveltrip",
  storageBucket: "dolphinaitraveltrip.appspot.com",
  messagingSenderId: "446327757523",
  appId: "1:446327757523:web:20138116045899f290d226",
  measurementId: "G-D0D57SLSVR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
//const analytics = getAnalytics(app);