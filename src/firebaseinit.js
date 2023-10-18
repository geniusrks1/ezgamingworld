
import { getFirestore } from "firebase/firestore";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZr_gjKXguFX-1QjDrnXKOdQlK-H_023Y",
  authDomain: "blogs-c2b1f.firebaseapp.com",
  projectId: "blogs-c2b1f",
  storageBucket: "blogs-c2b1f.appspot.com",
  messagingSenderId: "332696474625",
  appId: "1:332696474625:web:cc4694df3228f792afdc00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);