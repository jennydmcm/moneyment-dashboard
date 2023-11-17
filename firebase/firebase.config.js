// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMKOSBSINt6nBUiaBWHRNVsdrGyPvt-gY",
    authDomain: "websupplementmoneyment.firebaseapp.com",
    projectId: "websupplementmoneyment",
    storageBucket: "websupplementmoneyment.appspot.com",
    messagingSenderId: "69359821128",
    appId: "1:69359821128:web:96cf1432558c87b4ff137d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);