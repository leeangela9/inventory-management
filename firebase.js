// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "inventory-management-5eb73.firebaseapp.com",
  projectId: "inventory-management-5eb73",
  storageBucket: "inventory-management-5eb73.appspot.com",
  messagingSenderId: "755820061718",
  appId: "1:755820061718:web:8dfe9c16232859a5c3c137",
  measurementId: "G-H2Y0VD6KVD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
