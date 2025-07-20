import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 p-4 border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center relative">
       
        <h1 className="text-white text-2xl inline">Welcome</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-yellow-500">
              About Us
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-yellow-500">
              Contact
            </Link>
          </li>

          <li>
            <Link to="/project" className="hover:text-yellow-500">
              Project
            </Link>
          </li>
        </ul>

        <div className="md:hidden mt-1">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <X
                className="w-7 h-7 text-white cursor-pointer transition-colors duration-300"
              />
            ) : (
              <Menu
                className="w-7 h-7 text-white cursor-pointer transition-colors duration-300"
              />
            )}
          </button>

        </div>

        {isOpen && (
          <div className="md:hidden px-4 min-h-screen w-1/2 bg-gray-800 absolute top-12 -right-4 shadow-lg z-50">
            <ul className="flex flex-col space-y-4 text-xl text-white items-end text-end">
              <li className="mb-4">
                <Link
                  to="/"
                  className="hover:text-yellow-400"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/about"
                  className="hover:text-yellow-400"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/contact"
                  className="hover:text-yellow-400"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/project"
                  className="hover:text-yellow-400"
                  onClick={toggleMenu}
                >
                  Project
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
