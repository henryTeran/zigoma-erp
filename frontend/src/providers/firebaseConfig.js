import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFg0Grj5XMQKyQUHci0LwehfHhS4iaQS8",
  authDomain: "zigoma-erp.firebaseapp.com",
  projectId: "zigoma-erp",
  storageBucket: "zigoma-erp.firebasestorage.app",
  messagingSenderId: "542224522628",
  appId: "1:542224522628:web:0a8a2869b8cfba6f8811d1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
