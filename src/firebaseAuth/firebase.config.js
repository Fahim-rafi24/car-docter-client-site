// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// install .env linkUp


// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    apiKey: 'AIzaSyCwRp5UZl_eyJXxdqbJr2aP3XwakQdSNzA' ,
    authDomain: 'car-doctor-69a60.firebaseapp.com' ,
    projectId: 'car-doctor-69a60' ,
    storageBucket: 'car-doctor-69a60.appspot.com' ,
    messagingSender: '980993606707' ,
    appId: '1:980993606707:web:c91556c9a7a82b15a48f46' ,
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;