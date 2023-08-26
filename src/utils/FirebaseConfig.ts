import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIEYVtxWbgg5vCrYZerU7lop8KC7PR-js",
  authDomain: "video-chat-54f98.firebaseapp.com",
  projectId: "video-chat-54f98",
  storageBucket: "video-chat-54f98.appspot.com",
  messagingSenderId: "328985221348",
  appId: "1:328985221348:web:0cb98d04ab6b949a16b4f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const userRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB,"meetings");