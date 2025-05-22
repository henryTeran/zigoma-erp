import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail,   
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence, } from "firebase/auth";
import { auth } from "./firebaseConfig";

export const loginWithEmail = async (email, password, remember) => {
  const persistence = remember ? browserLocalPersistence : browserSessionPersistence;
  await setPersistence(auth, persistence);
  return signInWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = async (remember) => {
  const persistence = remember ? browserLocalPersistence : browserSessionPersistence;
  await setPersistence(auth, persistence);
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const signupUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signupWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider); 
};

export const resetPassword = (email) =>
  sendPasswordResetEmail(auth, email);