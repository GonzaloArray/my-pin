import { db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getFirebaseData = async (id: string, document: string): Promise<any | null> => {
  const docRef = doc(db, document, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return docSnap.data() as any;
  } else {
    throw new Error("Documento no encontrado");
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sendFirebaseData = async (id: string, document: string, data: any): Promise<void> => {
  await setDoc(doc(db, document, id), data);
};

