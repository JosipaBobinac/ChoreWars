// from firebase online.com

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUweZP5HExhFoi_PQLxCE7DSln8bP6XFw",
  authDomain: "chorewars-901ea.firebaseapp.com",
  projectId: "chorewars-901ea",
  storageBucket: "chorewars-901ea.firebasestorage.app",
  messagingSenderId: "700918316962",
  appId: "1:700918316962:web:c6e7400869ea318d063cfb",
  measurementId: "G-ZQ3N92XTRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };