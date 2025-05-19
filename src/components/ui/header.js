import Link from "next/link";
import { useScroll } from "@/components/hooks/scroll";

const Header = () => {
  const scrolled = useScroll();

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
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#about"
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
          <button className="md:hidden focus:outline-none">
            <svg
              className={`w-6 h-6 transition-colors duration-300 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
