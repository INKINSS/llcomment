// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY || "AIzaSyBnmeeyguY9-cTVc1zZEkIqy0gHR6uJXW8",
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN || "llcomment.firebaseapp.com",
  databaseURL: "https://llcomment-default-rtdb.firebaseio.com",
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID || "llcomment",
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET || "llcomment.firebasestorage.app",
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "422532805191",
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID || "1:422532805191:web:ba664f0a4024b17e7b3762",
  measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID || "G-MR9RC71LCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

// Initialize Analytics (only in browser environment)
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { database, analytics };