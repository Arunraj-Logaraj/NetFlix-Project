import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGC2Jvosi-N-s_x-B1TSbFbeQ0lq_mj6M",
  authDomain: "netflix-765cb.firebaseapp.com",
  projectId: "netflix-765cb",
  storageBucket: "netflix-765cb.appspot.com",
  messagingSenderId: "1075057790661",
  appId: "1:1075057790661:web:bdeed63777231628e36aac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
