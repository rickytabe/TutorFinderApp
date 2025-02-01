import { useEffect, useState, useCallback } from "react";

interface NavLink {
  name: string;
  path: string;
}

interface NavBarProps {
  scrollToSection: (sectionId: string) => void;
  activeSection: string | null;
}

const NavBar: React.FC<NavBarProps> = ({ scrollToSection, activeSection }) => {
  // State variables
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  // Handle body overflow when menu is open
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
  const linkStyles = (isActive: boolean) =>
    `inline-block px-4 py-1 transition-all duration-300 relative group ${
      isActive ? "text-blue-500" : "text-white hover:text-blue-600"
    }`;
  const underlineStyles = (isActive: boolean) =>
    `absolute left-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 ${
      isActive ? "w-full" : "w-0 group-hover:w-full"
    }`;
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
  const navBarButtonStyles = (isActive: boolean) =>
    `hover:bg-white rounded-md p-2 cursor-pointer border-b-2 border-gray-200 ${
      isActive ? "text-blue-500" : "text-white hover:text-black"
    }`;

  // Navigation links
  const allLinks: NavLink[] = [
    { name: "Home", path: "home" },
    { name: "Social Proof", path: "social-proof" },
    { name: "Find a Tutor", path: "tutors" },
    { name: "Trending Skills", path: "trending-skills" }, // Added
    { name: "How It Works", path: "how-it-works" },
    { name: "Pricing", path: "pricing" },
    { name: "Success Stories", path: "success-stories" },
    { name: "Trust & Security", path: "trust-security" },
    { name: "Mobile App", path: "mobile-app" },
    { name: "FAQ", path: "faq" },
    { name: "Contact", path: "contact" },
    { name: "Quick Links", path: "footer" }, // Added
  ];

  const visibleLinks = allLinks.slice(0, 5);
  const moreLinks = allLinks.slice(5);

  // Mobile menu toggle
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Handle link click
  const handleLinkClick = (path: string) => {
    scrollToSection(path);
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav
        className={navContainerStyles}
        aria-label="Main navigation"
        aria-expanded={isMenuOpen}
      >
        {/* Main nav bar */}
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className={logoStyles}>
            Tutor <span className="text-blue-600">Finder</span>
          </div>

          {/* Desktop Navigation */}
          <div className={menuContainerStyles}>
            <ul className="flex space-x-4 items-center">
              {visibleLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className={linkStyles(activeSection === link.path)}
                    aria-label={`Navigate to ${link.name}`}
                  >
                    {link.name}
                    <span
                      className={underlineStyles(activeSection === link.path)}
                      aria-hidden="true"
                    ></span>
                  </button>
                </li>
              ))}

              {/* More dropdown */}
              {moreLinks.length > 0 && (
                <li className="relative">
                  <button
                    onClick={() => setIsMoreOpen(!isMoreOpen)}
                    className={linkStyles(
                      moreLinks.some((link) => activeSection === link.path)
                    )}
                    aria-label="Show more links"
                  >
                    <div className="flex justify-between">
                      More
                      <svg
                        className={`w-6 h-6  transform transition-transform ${
                          isMoreOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    <span
                      className={underlineStyles(
                        moreLinks.some((link) => activeSection === link.path)
                      )}
                      aria-hidden="true"
                    ></span>
                  </button>

                  {isMoreOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-black/90 backdrop-blur-md border border-gray-200">
                      <ul className="py-2">
                        {moreLinks.map((link) => (
                          <li key={link.name}>
                            <button
                              onClick={() => {
                                handleLinkClick(link.path);
                                setIsMoreOpen(false);
                              }}
                              className={`block w-full px-4 py-2 hover:bg-white/20 text-left ${
                                activeSection === link.path
                                  ? "text-blue-500"
                                  : "text-white"
                              }`}
                            >
                              {link.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              )}
            </ul>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            <button
              className={signupButtonStyles}
              aria-label="Create a new account"
            >
              Sign Up
            </button>
            <button
              className={loginButtonStyles}
              aria-label="Login to your account"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu icon */}
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

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[99vw] bg-black/20  overflow-y-scroll pb-10 shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {/* Logo */}
          <div className='text-3xl font-bold italic text-white'>
            Tutor <span className="text-blue-600">Finder</span>
          </div>

          <button
            className="p-2 absolute top-4 right-4 text-white"
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
        </div>
        <ul className="mt-16 space-y-4 text-green-100 px-6 border-b border-gray-700 pb-4">
          {allLinks.map((link) => (
            <li
              key={link.name}
              className={navBarButtonStyles(activeSection === link.path)}
              onClick={() => handleLinkClick(link.path)}
            >
              {link.name}
            </li>
          ))}
        </ul>
        <div className="mt-20 text-center flex items-center justify-center">
          <button className={signupButtonStyles}>Sign Up</button>
          <button className={loginButtonStyles + " ml-4"}>Login</button>
        </div>
      </div>

      {/* Overlay with blur effect */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default NavBar;
