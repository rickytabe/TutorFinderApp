import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDC8IRLAhmS2VrC71MYqKRoNhVkvn0hUDg",
    authDomain: "tutor-finder-backend.firebaseapp.com",
    projectId: "tutor-finder-backend",
    storageBucket: "tutor-finder-backend.firebasestorage.app",
    messagingSenderId: "986271918341",
    appId: "1:986271918341:web:5a71986172dab87ca6ef6c",
    measurementId: "G-EP3WJ5QEXR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
