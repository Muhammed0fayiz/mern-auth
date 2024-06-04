import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c37ec.firebaseapp.com",
  projectId: "mern-auth-c37ec",
  storageBucket: "mern-auth-c37ec.appspot.com",
  messagingSenderId: "591026479287",
  appId: "1:591026479287:web:a7f3e5678ac202d9eced32"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
