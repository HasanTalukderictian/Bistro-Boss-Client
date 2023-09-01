// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJKr-vzpRBcMU4Mm12HySpT0xWL7jushQ",
  authDomain: "bistro-boss-a2e88.firebaseapp.com",
  projectId: "bistro-boss-a2e88",
  storageBucket: "bistro-boss-a2e88.appspot.com",
  messagingSenderId: "918738548574",
  appId: "1:918738548574:web:7b28a35418b272f75401cf"

// apiKey: process.env.VITE_apiKey,
// authDomain: process.env.VITE_authDomain,
// projectId: process.env.VITE_projectId,
// storageBucket: process.env.VITE_storageBucket,
// messagingSenderId: process.env.VITE_messagingSenderId,
// appId: process.env.VITE_appId
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig); 