import { useState } from "react";


const Navbar = () => {
  const buttonStyle = 'hover:bg-white/10 hover:text-white rounded-md  p-2 cursor-pointer';
  const button2Style = 'hover:bg-black hover:text-white rounded-md  p-2 cursor-pointer'

  const [isSidebarOpen, setIsSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSidebarOpen);
  }
  return (
    <div>
      {/* Nav Bar */}
      <nav className="fixed top-0 left-0 w-full text-white backdrop-blur-md bg-white/5 border-b border-gray-200 z-35">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* LoGo */}
          <div className="text-2xl font-bold italic">
            Tutor <span className="text-blue-600">Finder </span>
          </div>
          {/* Links for large screens*/}
          <ul className="hidden md:flex space-x-6 mr-20">
            <li className= {buttonStyle}>Home</li>
            <li className={buttonStyle}>Categories</li>
            <li className={buttonStyle}>Tutors</li>
            <li className={buttonStyle}>Account</li>
          </ul>
          
          {/* Mobile Menu Icon */}
          
            <button className=" md:hidden p-2 rounded-md hover:bg-gray-100" onClick={toggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-white"
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
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 h-full w-64 bg-white  shadow-lg transform`}
      >
        <button
          className="p-2 absolute top-4 right-4 text-gray-700"
          onClick={toggleSidebar}
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
        <ul className="mt-16 space-y-4 text-gray-700 px-6">
          <li className={button2Style}>Home</li>
          <li className={button2Style}>Categories</li>
          <li className={button2Style}>Tutors</li>
          <li className={button2Style}>Account</li>
        </ul>
      </div>
      {/* Overlay with blur effect */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
