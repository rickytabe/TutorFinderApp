import { OAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../firebase/firebaseConfig';

export const signInWithApple = async () => {
  const provider = new OAuthProvider('apple.com');
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error('Error signing in with Apple:', error);
    throw error;
  }
};