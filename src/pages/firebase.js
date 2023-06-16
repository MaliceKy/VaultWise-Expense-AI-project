import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU4zu7s7rFw2OEWaTIBM4G2VzqGr2fvjQ",
  authDomain: "vaultwise-1841d.firebaseapp.com",
  projectId: "vaultwise-1841d",
  storageBucket: "vaultwise-1841d.appspot.com",
  messagingSenderId: "942847757628",
  appId: "1:942847757628:web:9b81e05e26d993a2afe239",
  measurementId: "G-GGT1CPMNS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the auth service
const auth = getAuth(app);

export { auth };
