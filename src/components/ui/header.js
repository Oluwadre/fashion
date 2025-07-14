import Link from "next/link";
import { useState } from "react";
import { useScroll } from "../hooks/scroll";

const Header = () => {
  const scrolled = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between w-full">
          <div
            className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? "text-gray-800" : "text-red-400"
            }`}
          >
            <Link href="/">B&S</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="about"
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-gray-800 hover:text-pink-600"
                  : "text-red-400 hover:text-pink-300"
              }`}
            >
              About
            </Link>
            <Link
              href="#gallery"
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-gray-800 hover:text-pink-600"
                  : "text-red-400 hover:text-pink-300"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="#testimonials"
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-gray-800 hover:text-pink-600"
                  : "text-red-400 hover:text-pink-300"
              }`}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className={`transition-colors duration-300 ${
                scrolled
                  ? "text-gray-800 hover:text-pink-600"
                  : "text-red-400 hover:text-pink-300"
              }`}
            >
              Contact
            </Link>
            
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-colors duration-300 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden ${isMenuOpen ? "block bg-pink-600" : "hidden"}`}>
          <div className="pt-4 pb-2 space-y-3">
            <Link
              href="about"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#gallery"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <Link
              href="#testimonials"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
