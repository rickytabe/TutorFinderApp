const NavBar = () => {
  // Style variables
  const linkStyles = "inline-block px-4 py-1 text-white hover:text-blue-600 transition-all duration-300 relative group";
  const underlineStyles = "absolute left-0 bottom-0 h-0.5 bg-blue-500 w-0 group-hover:w-full transition-all duration-300";
  const menuContainerStyles = "hidden md:block backdrop-blur-md bg-white/1 p-4 border-grey-200 border rounded-lg";
  const buttonBaseStyles = "px-6 py-2 text-sm font-medium";
  const loginButtonStyles = `${buttonBaseStyles} text-white bg-blue-600 rounded hover:bg-blue-700`;
  const signupButtonStyles = `${buttonBaseStyles} text-blue-600 border border-blue-600 rounded hover:bg-blue-100`;
  const mobileMenuButtonStyles = "p-2 text-white hover:text-gray-900";
  const navContainerStyles = "fixed top-0 left-0 w-full text-white z-50";
  const logoStyles = "text-3xl font-bold italic";

  const links = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <nav>
      <div className={navContainerStyles}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className={logoStyles}>
            Tutor <span className="text-blue-600">Finder</span>
          </div>

          <div className={menuContainerStyles}>
            <ul className="flex space-x-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a href="#" className={linkStyles}>
                    {link}
                    <span className={underlineStyles}></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex space-x-4">
          <button className={loginButtonStyles}>
              Login
            </button>
            <button className={signupButtonStyles}>
              Sign Up
            </button>
          </div>

          <div className="md:hidden">
            <button className={mobileMenuButtonStyles}>
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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;