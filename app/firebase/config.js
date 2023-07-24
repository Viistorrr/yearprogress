// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhFURbIpr5b8BGtlHSerIbLXwTGI_uij0",
  authDomain: "todoapp-28256.firebaseapp.com",
  databaseURL: "https://todoapp-28256-default-rtdb.firebaseio.com",
  projectId: "todoapp-28256",
  storageBucket: "todoapp-28256.appspot.com",
  messagingSenderId: "156946304554",
  appId: "1:156946304554:web:0afc0c248454c105a5bd53"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);