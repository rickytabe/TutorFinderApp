import { initializeApp } from "firebase/app";
import { browserPopupRedirectResolver, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};



const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  popupRedirectResolver: browserPopupRedirectResolver
});
export const db = getFirestore(app);