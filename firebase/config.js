// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCbOmeoIEq2j3NH7QWse_FzrbnItWl3ScU",
    authDomain: "iubh-94e4d.firebaseapp.com",
    projectId: "iubh-94e4d",
    storageBucket: "iubh-94e4d.appspot.com",
    messagingSenderId: "697847648197",
    appId: "1:697847648197:web:cb78f354842a95602c85ac",
    measurementId: "G-DG8FXEVHNZ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const db = getFirestore();
const auth = getAuth();
const storage = getStorage(app);
// const timestamp = getFirestore().FieldValue.serverTimestamp;

export { db, auth, storage };
