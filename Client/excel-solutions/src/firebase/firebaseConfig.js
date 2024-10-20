// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDY75RjvDPnA4Xmi7e7ekORBlrkLrZHcoE",
    authDomain: "excel-solutions-cc2be.firebaseapp.com",
    projectId: "excel-solutions-cc2be",
    storageBucket: "excel-solutions-cc2be.appspot.com",
    messagingSenderId: "791627478399",
    appId: "1:791627478399:web:f7519da4286effef64564a",
    measurementId: "G-XLP65S2BFR"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
