// src/auth/learners/LearnerRegister.tsx
import { useState } from "react";
import AuthWrapper from "../shared/authWrapper";
import SocialAuthButtons from "../shared/socialLoginButton";
import { handleFirebaseError, validateEmail, validatePassword } from "../shared/authUtils";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../shared/firebaseAuthUtils";
import { toast } from "react-toastify";



export const LearnerRegister = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await signUp(formData.email, formData.password, "learner", {
          firstName: formData.firstName,
          lastName: formData.lastName,
        });

        toast.success("Registration successful!");
        setTimeout(() => {
          // Delay navigation
          navigate("/learner-homePage");
        }, 3000);
      } catch (error: any) {
        console.error("Registration error:", error);
        const errorMessage = handleFirebaseError(error.code) || "Registration failed. Please try again later.";
        setFormError(errorMessage); // Set the error message
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "first Name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "last Name is required";
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    const passwordError = validatePassword(formData.password); // Get error message
    if (passwordError) {
      // Check if there's an error
      newErrors.password = passwordError; // Store the message
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    } else if (formData.confirmPassword.length < 1) {
      newErrors.confirmPassword = "Confirm password is required";
    }
    setErrors(newErrors);
    return newErrors;
  };

  return (
    <AuthWrapper
      title="Start Learning Today"
      subtitle="Create your free learner account"
    >
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="grid grid-cols-1 gap-4">
        <p className='text-red-600 text-sm my-2' >{formError}</p>
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className={`mt-1 block w-full px-4 py-3 border rounded-lg ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className={`mt-1 block w-full px-4 py-3 border rounded-lg ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
            )}
          </div>
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={`mt-1 block w-full px-4 py-3 border rounded-lg ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative mt-1">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className={`w-full px-4 py-3 border rounded-lg ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Comfirm Password
          </label>
          <div className="relative mt-1">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              className={`w-full px-4 py-3 border rounded-lg ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors"
        >
          {isSubmitting ? "Creating Account..." : "Create Learner Account"}
        </button>

        <SocialAuthButtons />
        <div className="mt-8 text-center text-sm text-gray-600">
          Already Registered?{" "}
          <Link
            className="text-teal-600 hover:text-teal-700 font-bold"
            to="/auth/learner-login"
          >
            Sign In
          </Link>
        </div>
      </form>
    </AuthWrapper>
  );
};


