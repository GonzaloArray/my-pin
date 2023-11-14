import { db } from "./firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const getFirebaseData = async (
  id: string,
  document: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any | null> => {
  const docRef = doc(db, document, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return docSnap.data() as any;
  } else {
    throw new Error("Documento no encontrado");
  }
};

export const sendFirebaseData = async (
  id: string,
  document: string,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
): Promise<void> => {
  await setDoc(doc(db, document, id), data);
};

export const updateFirebaseData = async (
  id: string,
  document: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
): Promise<void> => {
  const userRef = doc(db, document, id);
  await updateDoc(userRef, data);
};
