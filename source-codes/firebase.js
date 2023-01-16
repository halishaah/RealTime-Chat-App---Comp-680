import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcYNYRE2KByDONhgRHDTINrgPcU9QDwfA",
  authDomain: "group-chat-5e1be.firebaseapp.com",
  projectId: "group-chat-5e1be",
  storageBucket: "group-chat-5e1be.appspot.com",
  messagingSenderId: "984437922760",
  appId: "1:984437922760:web:71478886c2e17049193efd"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
