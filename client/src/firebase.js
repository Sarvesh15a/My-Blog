// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-blogs-36655.firebaseapp.com",
  projectId: "my-blogs-36655",
  storageBucket: "my-blogs-36655.appspot.com",
  messagingSenderId: "660903937512",
  appId: "1:660903937512:web:a61a3dcf328205161d905d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

