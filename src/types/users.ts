// src/types/user.ts
import { Timestamp } from "firebase/firestore";

export interface User {
  uid: string;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  photoURL: string | null;
  userType: 'learner' | 'tutor'; // Specifies user type
  createdAt: Timestamp;
}

export interface Learner extends User {
  subjectsOfInterest: string[];
  preferredLearningStyle: string; 
  availability: string[]; // e.g., ['Weekdays', 'Weekends']
  location?: string;
}

export interface Tutor extends User {
  qualifications: string;
  experienceYears: number;
  subjectsTaught: string[];
  hourlyRate: number;
  availability: string[]; // e.g., ['Weekdays', 'Weekends']
  idVerificationFile: string; // URL or file path
  certificationFiles?: string[]; // Optional certification files
  teachingPhilosophy?: string;
  references?: string;
}

export type SerializableUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
};