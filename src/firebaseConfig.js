// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCbqE2csoOcKLJzH6p2Qj9aWQFCXVdd_QU",
  authDomain: "resume-5e05e.firebaseapp.com",
  projectId: "resume-5e05e",
  storageBucket: "resume-5e05e.appspot.com",
  messagingSenderId: "162883140460",
  appId: "1:162883140460:web:d4d9bc4bc352709270d149",
  measurementId: "G-3R1VHGGMZQ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage();
