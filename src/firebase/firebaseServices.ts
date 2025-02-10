// firebase/firebaseServices.ts
import { browserPopupRedirectResolver, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth ,db} from './firebaseConfig';
import { User, Learner, Tutor } from "../types/users";
import { OAuthProvider, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


export const createUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    console.error("Error creating user:", error);
    throw error; 
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    console.error("Error signing in user:", error);
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error: any) {
    console.error("Error signing out:", error);
    throw error;
  }
};

export const setUserDoc = async (user: User | Learner | Tutor ) => {
  try {
    const userDocRef = doc(db, 'users', user.uid);
    await setDoc(userDocRef, user);
  } catch (error: any) {
    console.error("Error setting user document:", error);
    throw error;
  }
};

export const getUserDoc = async (uid: string): Promise<User | Learner | Tutor | undefined> => {
  try {
    const userDocRef = doc(db, 'users', uid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      return docSnap.data() as User | Learner | Tutor;
    } else {
      console.log("No such document!");
      return undefined;
    }
  } catch (error: any) {
    console.error("Error getting user document:", error);
    throw error;
  }
};

// firebase/firebaseServices.ts
export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider, browserPopupRedirectResolver);
    return result.user;
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error;
  }
};

export const signInWithApple = async () => {
  const provider = new OAuthProvider('apple.com');
  try {
    const result = await signInWithPopup(auth, provider, browserPopupRedirectResolver);
    return result.user;
  } catch (error) {
    console.error('Error signing in with Apple:', error);
    throw error;
  }
};