import { useState, useEffect } from 'react';

const NavBar = () => {
  const [hasBackground, setHasBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      setHasBackground(show);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      hasBackground 
        ? 'bg-white shadow-lg' // Scrolled state
        : 'bg-transparent' // Top of page state
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold italic">
          Tutor <span className="text-blue-600">Finder</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            Tutors
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            Courses
          </a>
        </div>

        {/* Login/Signup Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-6 py-2 text-sm font-medium text-gray-600 hover:text-blue-600">
            Login
          </button>
          <button className="px-6 py-2 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;