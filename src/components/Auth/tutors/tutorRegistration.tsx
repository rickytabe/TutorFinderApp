// src/auth/tutors/TutorRegister.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import AuthWrapper from "../shared/authWrapper";
import {
  handleFirebaseError,
  validateEmail,
  validatePassword,
} from "../shared/authUtils";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useAuth } from "../shared/firebaseAuthUtils";
import { toast } from "react-toastify";

type TutorFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  qualifications: string;
  experience: string;
  subjects: string;
  hourlyRate: string;
};

export const TutorRegister = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<TutorFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    qualifications: "",
    experience: "",
    subjects: "",
    hourlyRate: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateTutorForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const { password, confirmPassword, ...formDataWithoutPassword } =
          formData;
        await signUp(
          formData.email,
          formData.password,
          "tutor",
          formDataWithoutPassword
        ); // Pass all formData
        toast.success("Tutor application submitted successfully!");

        // Redirect or show a success message
        setTimeout(() => {
          navigate("/tutor-homePage"); 
        }, 3000);
      } catch (error: any) {
        // Correct error typing
        console.error("Tutor registration error:", error);
        const errorMessage =
          handleFirebaseError(error.code) ||
          "Tutor registration failed. Please try again later.";
        setFormError(errorMessage); // Set the error message
        // Handle errors (e.g., display error message, re-enable submit button)
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const validateTutorForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";

    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!validateEmail(formData.email))
      newErrors.email = "Invalid email address";

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

    if (!formData.qualifications.trim())
      newErrors.qualifications = "Qualifications are required";

    if (!formData.experience.trim())
      newErrors.experience = "Experience is required";

    if (!formData.subjects.trim()) newErrors.subjects = "Subjects are required";

    if (!formData.hourlyRate.trim())
      newErrors.hourlyRate = "Hourly rate is required";

    setErrors(newErrors);
    return newErrors;
  };

  return (
    <AuthWrapper
      title="Become a Verified Tutor"
      subtitle="Complete your tutor application"
      isTutor
    >
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <p className="text-red-500 my-2">{formError}</p>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-3 border rounded-lg ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              value={formData.lastName}
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-3 border rounded-lg ${
                errors.lastName ? "border-red-500" : "border-gray-300"
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
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-3 border rounded-lg ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-3 border rounded-lg ${
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
              Confirm Password
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-3 border rounded-lg ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
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
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Qualifications
          </label>
          <textarea
            value={formData.qualifications}
            onChange={handleChange}
            name="qualifications"
            placeholder="Qualification"
            rows={3}
            className={`mt-1 block w-full px-4 py-3 border rounded-lg ${
              errors.qualifications ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.qualifications && (
            <p className="mt-1 text-sm text-red-600">{errors.qualifications}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Experience (Years)
            </label>
            <input
              type="number"
              name="experience"
              placeholder="Experience"
              value={formData.experience}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-3 border rounded-lg ${
                errors.experience ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.experience && (
              <p className="mt-1 text-sm text-red-600">{errors.experience}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Hourly Rate ($)
            </label>
            <input
              type="number"
              placeholder="Hourly Rate"
              name="hourlyRate"
              value={formData.hourlyRate}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-3 border rounded-lg ${
                errors.hourlyRate ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.hourlyRate && (
              <p className="mt-1 text-sm text-red-600">{errors.hourlyRate}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Subjects Taught
          </label>
          <input
            type="text"
            name="subjects"
            value={formData.subjects}
            onChange={handleChange}
            className={`mt-1 block w-full px-4 py-3 border rounded-lg ${
              errors.subjects ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Separate subjects with commas"
          />
          {errors.subjects && (
            <p className="mt-1 text-sm text-red-600">{errors.subjects}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors"
        >
          {isSubmitting
            ? "Submiting Your Application..."
            : "Submit Your Application"}
        </button>
        <div className="mt-8 text-center text-sm text-gray-600">
          Already Registered?{" "}
          <Link
            className="text-teal-600 hover:text-teal-700 font-bold"
            to="/auth/tutor-login"
          >
            Sign In
          </Link>
        </div>
      </form>
    </AuthWrapper>
  );
};

export default TutorRegister;
