// src/components/SocialAuthButtons.tsx
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { signInWithGoogle, signInWithApple } from '../../../firebase/firebaseServices';

const SocialAuthButtons = () => {
  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      console.log('Google Sign-In successful:', user);
    } catch (error) {
      console.error('Google Sign-In error:', error);
    }
  };

  const handleAppleSignIn = async () => {
    try {
      const user = await signInWithApple();
      console.log('Apple Sign-In successful:', user);
    } catch (error) {
      console.error('Apple Sign-In error:', error);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Google Button */}
      <button
        onClick={handleGoogleSignIn}
        className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <FcGoogle className="w-6 h-6 mr-2" />
        <span className="text-gray-700 font-medium">Continue with Google</span>
      </button>

      {/* Apple Button */}
      <button
        onClick={handleAppleSignIn}
        className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <FaApple className="w-6 h-6 mr-2 text-gray-800" />
        <span className="text-gray-700 font-medium">Continue with Apple</span>
      </button>
    </div>
  );
};

export default SocialAuthButtons;