// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAHoble3zSlQasyDd6KUkGs5tydGArrfc",
    authDomain: "binnary-photography.firebaseapp.com",
    projectId: "binnary-photography",
    storageBucket: "binnary-photography.appspot.com",
    messagingSenderId: "310236899833",
    appId: "1:310236899833:web:2e9228362e7d6c55e0f528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;