import { db } from "../firebase_config";
import { doc, setDoc } from "firebase/firestore"; // or deleteDoc, updateDoc, etc.

export const addUser = async (userData) => { 
  return await setDoc(doc(db, userData.role, userData.uid), userData);
};
