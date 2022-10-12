import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLYl3g7LRZy032lDAJm0XdzOauw136Cl0",
  authDomain: "vue3-noteballs.firebaseapp.com",
  projectId: "vue3-noteballs",
  storageBucket: "vue3-noteballs.appspot.com",
  messagingSenderId: "331843676982",
  appId: "1:331843676982:web:6c3b60c3b3729bcf31a197",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
