// src/components/Auth/shared/firebaseAuthUtils.ts

import React, { createContext, useState, useEffect, useContext } from "react";
import {
  createUser,
  signInUser,
  signOutUser,
  setUserDoc,
  getUserDoc,
} from "../../../firebase/firebaseServices";
import { User, Learner, Tutor } from "../../../types/users";
import { auth } from "../../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { handleFirebaseError } from "./authUtils";
import { Timestamp } from "firebase/firestore";

interface AuthContextProps {
  currentUser: User | Learner | Tutor | null;
  signUp: (
    email: string,
    password: string,
    userType: "learner" | "tutor",
    additionalData: Partial<Learner> | Partial<Tutor>
  ) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  authLoading: boolean;  // Renamed from loading to authLoading for clarity
  operationLoading: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  signUp: async () => {},
  signIn: async () => {},
  signOut: async () => {},
  authLoading: true,    // Tracks auth initialization state
  operationLoading: false, // Tracks async operations
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | Learner | Tutor | null>(null);
  const [authLoading, setAuthLoading] = useState(true);  // Auth initialization state
  const [operationLoading, setOperationLoading] = useState(false); // For signin/signout operations
  const navigate = useNavigate();

  // Auth state persistence check
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      try {
        if (user) {
          const userDoc = await getUserDoc(user.uid);
          if (userDoc) {
            setCurrentUser(userDoc as User | Learner | Tutor);
          } else {
            console.warn("User document not found in Firestore, signing out.");
            await signOutUser();
            setCurrentUser(null);
          }
        } else {
          setCurrentUser(null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setAuthLoading(false); // Auth state initialization complete
      }
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (
    email: string,
    password: string,
    userType: "learner" | "tutor",
    additionalData: Partial<Learner> | Partial<Tutor>
  ) => {
    setOperationLoading(true);
    try {
      const firebaseUser = await createUser(email, password);

      await updateProfile(firebaseUser, {
        displayName: `${additionalData.firstName} ${additionalData.lastName}` || null,
        photoURL: additionalData.photoURL || null,
      });

      let newUser: User | Learner | Tutor;
      if (userType === "learner") {
        newUser = {
          ...(additionalData as Omit<Learner, "uid" | "email" | "displayName" | "photoURL" | "userType">),
          uid: firebaseUser.uid,
          email: firebaseUser.email ?? null,
          displayName: firebaseUser.displayName ?? null,
          photoURL: firebaseUser.photoURL ?? null,
          userType: "learner",
          createdAt: Timestamp.now(),
        } as Learner;
      } else {
        newUser = {
          ...(additionalData as Omit<Tutor, "uid" | "email" | "displayName" | "photoURL" | "userType">),
          uid: firebaseUser.uid,
          email: firebaseUser.email ?? "",
          displayName: firebaseUser.displayName ?? "",
          photoURL: firebaseUser.photoURL ?? "",
          userType: "tutor",
          createdAt: Timestamp.now(),
        } as Tutor;
        navigate("/auth/tutor-registration");
      }

      await setUserDoc(newUser);
      setCurrentUser(newUser);
    } catch (error: any) {
      console.error("Signup error:", error);
      toast.error(handleFirebaseError(error.code) || "Signup failed. Please try again later.");
      throw error;
    } finally {
      setOperationLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setOperationLoading(true);
    try {
      const firebaseUser = await signInUser(email, password);
      const userDoc = await getUserDoc(firebaseUser.uid);
      
      if (userDoc) {
        setCurrentUser(userDoc as User | Learner | Tutor);
      } else {
        console.warn("User document not found in Firestore, signing out.");
        await signOutUser();
        setCurrentUser(null);
      }
    } catch (error: any) {
      console.error("Signin error:", error);
      throw error;
    } finally {
      setOperationLoading(false);
    }
  };

  const signOut = async () => {
    setOperationLoading(true);
    try {
      await signOutUser();
      setCurrentUser(null);
      navigate("/");
    } catch (error: any) {
      console.error("Signout error:", error);
      toast.error("Sign out failed. Please try again later.");
      throw error;
    } finally {
      setOperationLoading(false);
    }
  };

  const value: AuthContextProps = {
    currentUser,
    signUp,
    signIn,
    signOut,
    authLoading,      // Use separate auth loading state
    operationLoading, // Separate state for operations
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};