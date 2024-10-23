
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
  import { getDatabase, ref , set,get,child } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBM0G9pt47YdhQKHCXzLuo460E9W2z9pFg",
    authDomain: "hospital-management-43f33.firebaseapp.com",
    projectId: "hospital-management-43f33",
    storageBucket: "hospital-management-43f33.appspot.com",
    messagingSenderId: "185613398592",
    appId: "1:185613398592:web:7237c3ad4febe22346e5a5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const db=getDatabase(app);