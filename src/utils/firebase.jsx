import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDkxuW2elQIV0BnJlo8Rn9YdC4xpzW0QS8",
    authDomain: "thetravelkaro-db.firebaseapp.com",
    projectId: "thetravelkaro-db",
    storageBucket: "thetravelkaro-db.appspot.com",
    messagingSenderId: "168556512930",
    appId: "1:168556512930:web:8dcabe80330e1d03b679fb",
    measurementId: "G-LRY13F8PD0"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);