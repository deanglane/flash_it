import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCpq319wTbBhxU4FRQVdZolE3EpCJD1GeA",
  authDomain: "flash-it-v2.firebaseapp.com",
  projectId: "flash-it-v2",
  storageBucket: "flash-it-v2.appspot.com",
  messagingSenderId: "110188938913",
  appId: "1:110188938913:web:2509c112706035256e52e0",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
