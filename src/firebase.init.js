// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSwP7btBKQw2WpOMsTOQX1Xyq7JUheCT4",
  authDomain: "boipoka-4272d.firebaseapp.com",
  projectId: "boipoka-4272d",
  storageBucket: "boipoka-4272d.firebasestorage.app",
  messagingSenderId: "275570338333",
  appId: "1:275570338333:web:0cdeba685f606b516134f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);