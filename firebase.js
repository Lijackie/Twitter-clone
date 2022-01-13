// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqKjGy8vvxAa449Zqtz1OTK_8V3DPg_do",
  authDomain: "nextjs-48a6a.firebaseapp.com",
  projectId: "nextjs-48a6a",
  storageBucket: "nextjs-48a6a.appspot.com",
  messagingSenderId: "366789052441",
  appId: "1:366789052441:web:b012e6e258c22d8318c288",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
