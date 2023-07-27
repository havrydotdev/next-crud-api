import firebase_app from "@/app/firebase/config";
import { collection, getFirestore } from "firebase/firestore";

export const firestore = getFirestore(firebase_app);

export const notes = collection(firestore, "notes");
