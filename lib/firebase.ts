import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAow6OK03hHbF-4K0LxPp0kkjZ1mSiPSrs",
  authDomain: "car-recovery-4ade0.firebaseapp.com",
  projectId: "car-recovery-4ade0",
  storageBucket: "car-recovery-4ade0.firebasestorage.app",
  messagingSenderId: "850616823555",
  appId: "1:850616823555:web:5b5e570700d84870a6c336",
  measurementId: "G-DW7RRQHVX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);

// Analytics (only in browser)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
