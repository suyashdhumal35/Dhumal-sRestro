import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import pLogo from "../assets/foodlogo.svg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Added login state

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAuthToggle = () => {
    setIsLoggedIn(!isLoggedIn); // Toggle login/logout state
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={pLogo} alt="Logo" className="h-14" />
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-lg font-semibold">
          <a href="#home" className="text-gray-700 hover:text-orange-600">Home</a>
          <a href="#about" className="text-gray-700 hover:text-orange-600">About Us</a>
          <a href="#contact" className="text-gray-700 hover:text-orange-600">Contact Us</a>
          <a href="#cart" className="text-gray-700 hover:text-orange-600 flex items-center">
            <FaShoppingCart className="mr-1" /> Cart
          </a>
          <button 
            onClick={handleAuthToggle} 
            className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 focus:outline-none w-32 text-base" 
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle} className="text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-white shadow-md ${isMenuOpen ? "block" : "hidden"}`}>
        <nav className="flex flex-col space-y-4 px-4 py-4">
          <a href="#home" className="text-gray-700 hover:text-orange-600">Home</a>
          <a href="#about" className="text-gray-700 hover:text-orange-600">About Us</a>
          <a href="#contact" className="text-gray-700 hover:text-orange-600">Contact Us</a>
          <a href="#cart" className="text-gray-700 hover:text-orange-600 flex items-center">
            <FaShoppingCart className="mr-1" /> Cart
          </a>
          <button 
            onClick={handleAuthToggle} 
            className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 focus:outline-none"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default App;
