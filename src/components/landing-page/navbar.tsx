import { useEffect, useState, useCallback } from "react";

interface NavLink {
  name: string;
  path: string;
}

const NavBar = () => {
  //state varaibles
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMenuOpen]);

  // Style variables
  const linkStyles =
    "inline-block px-4 py-1 text-white hover:text-blue-600 transition-all duration-300 relative group";
  const underlineStyles =
    "absolute left-0 bottom-0 h-0.5 bg-blue-500 w-0 group-hover:w-full transition-all duration-300";
  const menuContainerStyles =
    "hidden md:block backdrop-blur-md bg-white/10 p-4 border-gray-200 border rounded-lg";
  const buttonBaseStyles = "px-6 py-2 text-sm font-medium";
  const signupButtonStyles = `${buttonBaseStyles} text-white bg-blue-600 rounded hover:bg-blue-700`;
  const loginButtonStyles = `${buttonBaseStyles} text-blue-600 border border-blue-600 rounded hover:bg-blue-100 hover:border-blue-700`;
  const mobileMenuButtonStyles =
    "md:hidden p-2 text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500";
  const navContainerStyles =
    "fixed top-0 left-0 w-full text-white z-30 transition-all duration-300 bg-black/80 backdrop-blur-sm shadow-lg";
  const logoStyles = "text-3xl font-bold italic";
  const navBarButtonStyles = 'hover:bg-black hover:text-white rounded-md  p-2 cursor-pointer border-b-2 border-gray-200'

  // Navigation links with proper typing
  const links: NavLink[] = [
    { name: "Home", path: "#" },
    { name: "Social Proof", path: "#" },
    { name: "Find a Tutor", path: "#" },
    { name: "Blog", path: "#" },
    { name: "Contact", path: "#" },
  ];

  // Mobile menu toggle
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <div>
      <nav
        className={navContainerStyles}
        aria-label="Main navigation"
        aria-expanded={isMenuOpen}
      >
        {/* main nav bar */}
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className={logoStyles}>
            Tutor <span className="text-blue-600">Finder</span>
          </div>
          {/* Desktop Navigation */}
          <div className={menuContainerStyles}>
            <ul className="flex space-x-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className={linkStyles}
                    aria-label={`Navigate to ${link.name}`}
                  >
                    {link.name}
                    <span className={underlineStyles} aria-hidden="true"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            <button
              className={signupButtonStyles}
              aria-label="Create a new account"
            >
              sign Up
            </button>
            <button
              className={loginButtonStyles}
              aria-label="Login to your account"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu icon*/}
          <button
            className={mobileMenuButtonStyles}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white  shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 h-full w-64 bg-white  shadow-lg transform z-40`}
      >
        <button
          className="p-2 absolute top-4 right-4 text-gray-700"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="mt-16 space-y-4 text-black px-6 border-b border-gray-700 pb-4">
          {links.map((links) => (
            <li className={navBarButtonStyles} key={links.name}>{links.name}</li>
          ) )}
        </ul>
        <div className="mt-20 text-center flex items-center justify-center">
          <button className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
            Sign Up
          </button> 
          <button className="px-6 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-100 hover:border-blue-700 ml-4">
            Login
          </button>
       </div>
      </div>
      {/* Overlay with blur effect */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default NavBar;
