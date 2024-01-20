// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjWcWw-6qitUpx4l5_g0ZMH_08bpAC-2M",
    authDomain: "ecomerce-56a6f.firebaseapp.com",
    projectId: "ecomerce-56a6f",
    storageBucket: "ecomerce-56a6f.appspot.com",
    messagingSenderId: "529507645817",
    appId: "1:529507645817:web:a1f74566b360ae817917a8",
    measurementId: "G-BM0DMDNLDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;