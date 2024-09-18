import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = {
    apiKey: dotenv.API_KEY,
    authDomain: dotenv.AUTH_DOMAIN,
    projectId: dotenv.PROJECT_ID,
    storageBucket: dotenv.STORAGE_BUCKET,
    messagingSenderId: dotenv.MESSAGE_SENDER_ID,
    appId: dotenv.APP_ID,
    measurementId: dotenv.MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);