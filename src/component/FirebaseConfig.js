// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0COqyjZAKhqSTUYEjBXGFqFkpYXcSLbM",
  authDomain: "aisensehospital.firebaseapp.com",
  databaseURL: "https://aisensehospital-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aisensehospital",
  storageBucket: "aisensehospital.appspot.com",
  messagingSenderId: "930945176581",
  appId: "1:930945176581:web:f285076c70e28282b8b86c",
  measurementId: "G-97VPV39KGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);