import { User, Learner, Tutor } from "../../../types/users";

// src/auth/shared/authUtils.ts
export const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  export const validatePassword = (password: string) => {
    if (!password) {
      return "Password is required"; 
    } else if (password.length < 6) {
      return "Password must be at least 6 characters";
    } else if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number";
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
      return "Password must contain at least one special character";
    }
      return ""; // No errors
  };
  
  export const handleFirebaseError = (errorCode: string): string => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'Email is already registered';
      case 'auth/invalid-email':
        return 'Invalid email address';
      case 'auth/weak-password':
        return 'Password is too weak';
      case 'auth/user-not-found':
        return 'User not found';
      case 'auth/wrong-password':
        return 'Incorrect password';
      default:
        return 'An error occurred. Please try again.';
    }
  };
  
  export const formatCurrency = (value: string): string => {
    return parseFloat(value).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
};
  
export const getDisplayName = (user: User | Learner | Tutor | null): string => {
  if (!user) {  // Handle the case where user is null (e.g., not logged in)
    return ""; // Or any other default value you want to display
  }

  return user.firstName && user.lastName
    ? `${user.firstName} ${user.lastName}`
    : user.firstName
    ? user.firstName
    : user.lastName
    ? user.lastName
    : "";  // Return empty string if both first and last names are null
};

