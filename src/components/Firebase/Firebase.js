// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXwCqHAtyAYFwl6GzptIyiQOmZLtyFUpY",
  authDomain: "react-bus-ticketing.firebaseapp.com",
  projectId: "react-bus-ticketing",
  storageBucket: "react-bus-ticketing.appspot.com",
  messagingSenderId: "889406241944",
  appId: "1:889406241944:web:875919aa7379b1435ae4ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
