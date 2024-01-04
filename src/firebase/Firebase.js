
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBnLm5_fZvMtsHXKoPhUgm4WMCeFU0Ce0o",
    authDomain: "ecommerce-new-8b90c.firebaseapp.com",
    projectId: "ecommerce-new-8b90c",
    storageBucket: "ecommerce-new-8b90c.appspot.com",
    messagingSenderId: "677684553985",
    appId: "1:677684553985:web:5cd29802069217f537d300"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export {auth,db}
