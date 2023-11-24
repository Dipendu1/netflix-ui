import { initializeApp } from "firebase/app";
import {getAuth, initializeAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBA7qRCWvABNsHozG3LyVA1vO92vnmxLWc",
  authDomain: "netflix-clone-4b6b6.firebaseapp.com",
  projectId: "netflix-clone-4b6b6",
  storageBucket: "netflix-clone-4b6b6.appspot.com",
  messagingSenderId: "927409231194",
  appId: "1:927409231194:web:05bbf80f34463a54e68f63",
  measurementId: "G-3MM92QYJZ9"
};
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);