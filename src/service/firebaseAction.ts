import { Card } from "../type";
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

export const sendArrayFirebaseData = async (
  id: string,
  document: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
) => {
  const userDocRef = doc(db, document, id);

  const userDocSnapshot = await getDoc(userDocRef);
  if (userDocSnapshot.exists()) {
    await updateDoc(userDocRef, data);
  }else{
    await setDoc(userDocRef, data);
  }
}

export const updateArrayFirebaseData = async (
  id: string,
  document: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updatedData: Card
) => {
  console.log("entre");
  const userDocRef = doc(db, document, id);

  const userDocSnapshot = await getDoc(userDocRef);
  if (userDocSnapshot.exists()) {
    const existingData = userDocSnapshot.data();

    const indexToUpdate = existingData.cards.findIndex(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (card: any) => card.id === updatedData.id
    );

    if (indexToUpdate !== -1) {
      // Actualizar el elemento específico del array localmente
      existingData.cards[indexToUpdate] = updatedData;
      await updateDoc(userDocRef, {
        cards: existingData.cards
      });

      console.log('Elemento actualizado con éxito.');
    } else {
      console.log('No se encontró el elemento para actualizar.');
    }
  } else {
    console.log('El documento no existe.');
  }
};
