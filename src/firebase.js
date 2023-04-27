import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAERUMKweWfuxRo_eYylvYPfAkFf70lEzs",
  authDomain: "portfolio-rajesh-a10a4.firebaseapp.com",
  projectId: "portfolio-rajesh-a10a4",
  storageBucket: "portfolio-rajesh-a10a4.appspot.com",
  messagingSenderId: "157537149016",
  appId: "1:157537149016:web:dfab83ae149ab46c662a2d",
  measurementId: "G-TS9EFBY3E4"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();