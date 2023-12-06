
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCGNAC2evHSkCGNZ8x-Bx0wYWGL-D4uSYY",
  authDomain: "tutorial-be529.firebaseapp.com",
  projectId: "tutorial-be529",
  storageBucket: "tutorial-be529.appspot.com",
  messagingSenderId: "572647956656",
  appId: "1:572647956656:web:9c62a9c0c7612132de5b75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()