// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7byof7RGd2FqCEumupT2UJbRbxQavn2A",
  authDomain: "onyx-moto.firebaseapp.com",
  projectId: "onyx-moto",
  storageBucket: "onyx-moto.appspot.com",
  messagingSenderId: "456413645709",
  appId: "1:456413645709:web:2d5e6ba208ee98d86c0bc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;