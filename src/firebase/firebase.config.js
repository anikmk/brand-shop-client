// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRD7Zn5S0CqsOqKpmDDRRr0gWmAcEKCaI",
  authDomain: "automotive-10.firebaseapp.com",
  projectId: "automotive-10",
  storageBucket: "automotive-10.appspot.com",
  messagingSenderId: "585028083036",
  appId: "1:585028083036:web:08d50f7d66496eaa697599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
