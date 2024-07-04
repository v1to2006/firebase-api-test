import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYi8-1lO_t7WLQiTmCdiYAhPg8ubwfWc4",
  authDomain: "hdh-sivut1.firebaseapp.com",
  projectId: "hdh-sivut1",
  storageBucket: "hdh-sivut1.appspot.com",
  messagingSenderId: "357499733021",
  appId: "1:357499733021:web:c3b977f8ab13e0d1a5b2f4",
  measurementId: "G-EBDTVK2C85",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
