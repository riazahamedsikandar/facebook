import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5fzCL3CiBNZzU9qHH42nkG812jVq4Oqc",
  authDomain: "social-media-ffa90.firebaseapp.com",
  projectId: "social-media-ffa90",
  storageBucket: "social-media-ffa90.appspot.com",
  messagingSenderId: "1000042058843",
  appId: "1:1000042058843:web:8ea1b3d89b4372d0f71b7e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage();
export const db = getFirestore(app);
