import { initializeApp } from "firebase/app";

const apiKey = process.env.VUE_FIREBASE_API_KEY;
const authDomain = process.env.VUE_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.VUE_FIREBASE_PROJECT_ID;
const storageBucket = process.env.VUE_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.VUE_FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.VUE_FIREBASE_APP_ID;
const measurementId = process.env.VUE_FIREBASE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

initializeApp(firebaseConfig);
