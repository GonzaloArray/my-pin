import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { UserDetails } from "../type";

export const onGoogleAuth = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      await setDoc(docRef, {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
      });
    }

    const userFirebase = {
      name: user.displayName ?? "",
      uid: user.uid ?? "",
      email: user.email ?? "",
      photo: user.photoURL ?? "",
    };

    return { success: true, userFirebase };
  } catch (error) {
    return { error: "Something went wrong with the registration with Google" };
  }
};

export const onAuthenticatedAutomatic = async () => {
  try {
    const user = await new Promise<UserDetails | null>((resolve, reject) => {
      onAuthStateChanged(
        auth,
        (user) => {
          resolve(user as UserDetails | null);
        },
        reject
      );
    });

    if (user) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userFirebase = { ...docSnap.data() } as UserDetails;
        return { success: true, userFirebase };
      } else {
        throw new Error("Datos de usuario no encontrados");
      }
    } else {
      throw new Error("Error de autenticación de usuario");
    }
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "Error de autenticación de usuario"
    ) {
      return { error: error.message };
    } else {
      return { success: false };
    }
  }
};

export const onLogout = async () => {
  auth.signOut()
}
