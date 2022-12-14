// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2DlkBEGGidz8w1ThWZkcX4aDwqbgCEa4",
  authDomain: "liondevs---lion-s-hunt.firebaseapp.com",
  projectId: "liondevs---lion-s-hunt",
  storageBucket: "liondevs---lion-s-hunt.appspot.com",
  messagingSenderId: "786671251455",
  appId: "1:786671251455:web:3bbcc6911e7cb5e71f41ca",
  measurementId: "G-NHGE6FR3NE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);