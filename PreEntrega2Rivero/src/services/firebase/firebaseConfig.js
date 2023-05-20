import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDN5_a6N0neQH69VQjEIQHU1FxN2muDo3E",
  authDomain: "ecommerce39660.firebaseapp.com",
  projectId: "ecommerce39660",
  storageBucket: "ecommerce39660.appspot.com",
  messagingSenderId: "418855320055",
  appId: "1:418855320055:web:12128d94793bacac79d6f2",
  measurementId: "G-WQ8D9XJ35Q"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)