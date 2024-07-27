import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-engineering-daybook-blog.firebaseapp.com",
  projectId: "react-engineering-daybook-blog",
  storageBucket: "react-engineering-daybook-blog.appspot.com",
  messagingSenderId: "943317211669",
  appId: "1:943317211669:web:6d2baee61cf2169d4e8c1c",
  measurementId: "G-KF0NWF0ZL8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);