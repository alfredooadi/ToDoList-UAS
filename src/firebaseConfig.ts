// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhim_yK2J357Q-5YrMVjnJ9g7khm_3gco",
  authDomain: "todolist-3c441.firebaseapp.com",
  projectId: "todolist-3c441",
  storageBucket: "todolist-3c441.appspot.com",
  messagingSenderId: "267354949970",
  appId: "1:267354949970:web:8df4312c52e52b410d128b",
  measurementId: "G-49EV9HH5Z9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);