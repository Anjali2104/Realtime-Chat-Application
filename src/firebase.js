// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyARbequwD-i1Ip5j2WLu9NOgiEExWM4ElA",
  authDomain: "chat-f595c.firebaseapp.com",
  projectId: "chat-f595c",
  storageBucket: "chat-f595c.appspot.com",
  messagingSenderId: "640120555101",
  appId: "1:640120555101:web:7a3522d861170ac7fc2fb4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();