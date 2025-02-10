// src/auth/shared/AuthWrapper.tsx
import { ReactNode, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Squares from './square.jsx';

type AuthWrapperProps = {
  children: ReactNode;
  title: string;
  subtitle?: string;
  isTutor?: boolean;
};

const AuthWrapper = ({
  children,
  title,
  subtitle,
  isTutor = false
}: AuthWrapperProps) => {
  const tutorTexts = [
    "Empower Learners",
    "Share Your Expertise",
    "Shape the Future",
    "Unlock Potential",
  ];

  const learnerTexts = [
    "Discover New Skills",
    "Unlock Your Potential",
    "Learn From Experts",
    "Expand Your Knowledge",
  ];

  const [_currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [textColor, setTextColor] = useState("text-teal-200");
  const [_isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const texts = isTutor ? tutorTexts : learnerTexts;
    let currentIndex = 0;
    let charIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      if (charIndex <= texts[currentIndex].length) {
        setDisplayedText(texts[currentIndex].substring(0, charIndex));
        charIndex++;
        timeoutId = setTimeout(type, 50);
      } else {
        setIsTyping(false);
        timeoutId = setTimeout(erase, 1500);
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        setDisplayedText(texts[currentIndex].substring(0, charIndex - 1));
        charIndex--;
        timeoutId = setTimeout(erase, 30);
      } else {
        setIsTyping(true);
        currentIndex = (currentIndex + 1) % texts.length;
        setCurrentTextIndex(currentIndex);
        setTextColor(getRandomColor());
        timeoutId = setTimeout(type, 200);
      }
    };

    type();
    return () => clearTimeout(timeoutId);
  }, [isTutor]);

  const getRandomColor = () => {
    const colors = ["text-teal-200", "text-purple-200", "text-yellow-200", "text-orange-200"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const SquaresComponent = Squares as React.FC<{
    speed?: number;
    squareSize?: number;
    direction?: string;
    borderColor?: string;
    hoverFillColor?: string;
  }>;

  return (
    <div className="min-h-screen lg:h-screen scrollbar-hide">
      <div className="min-h-screen lg:h-screen grid md:grid-cols-1 lg:grid-cols-2">
        {/* Right Panel - Visual Design */}
        <div className="bg-black order-first lg:order-none relative">
          <div className="absolute inset-0 z-0">
            <SquaresComponent
              speed={0.45}
              squareSize={100}
              direction="up"
              borderColor="rgba(255,255,255,0.15)"
              hoverFillColor="#222"
            />
          </div>
          <div className="relative z-10 w-full flex flex-col items-center justify-center h-full py-20">
            <h3 className="text-5xl font-semibold text-white mb-4">
              {isTutor ? "Tutor Portal" : "Learner Portal"}
            </h3>
            <h2 className={`text-4xl font-bold text-white ${textColor} shadow-lg glow-text`}>
              {displayedText}
            </h2>
          </div>
        </div>

        {/* Left Panel - Scrollable Content */}
        <div className="flex flex-col items-center p-4 lg:p-8 bg-white order-last lg:order-none overflow-y-scroll">
          {/* Sticky Header */}
          <div className="w-full max-w-md sticky top-0 bg-white pt-2 pb-2 z-10 shadow-sm">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
              {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
            </div>
          </div>

          {/* Scrollable Content Area */}
          <div className="w-full max-w-md space-y-8 flex-1 overflow-y-auto pb-8 scrollbar-hide">
            {children}
            <div className="mt-8 text-center text-sm text-gray-600">
              {isTutor ? (
                <p>
                  Applying as a learner?{" "}
                  <Link
                    to="/auth/learner-registration"
                    className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                  >
                    Switch to learner
                  </Link>
                </p>
              ) : (
                <p>
                  Are you a tutor?{" "}
                  <Link
                    to="/auth/tutor-registration"
                    className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                  >
                    Apply here
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;