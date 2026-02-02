import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-router-dom";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
       <header className="sticky top-0 bg-white/80 backdrop-blur border-b border-gray-200 z-50 shadow-sm">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between flex-nowrap">
        {/* Logo / Site Title */}
        <a href="/" className="text-xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors">
          Arindam's Portfolio          
        </a>
      
        {/* Full nav on medium+ screens */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <li><a href="#intro" className="hover:text-blue-600 transition">Intro</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
          <Link
            to="/testing-demos"
            className="hover:text-blue-600 transition"
          >
            Testing Projects
          </Link>
          <Link to="/certifications" className="hover:text-blue-600 transition">Certifications</Link>
          <Link
            to="/work"
            className="hover:text-blue-600 transition"
          >
            Work History
          </Link>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <DarkModeToggle />
        </div>

        {/* Hamburger on small screens */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-sm font-medium text-gray-700">
            <li><a href="#intro" className="block hover:text-blue-600">Intro</a></li>
            <li><a href="#work" className="block hover:text-blue-600">Work History</a></li>
            <li><a href="#projects" className="block hover:text-blue-600">Projects</a></li>
            <li><Link to="/certifications" className="block hover:text-blue-600">Certifications</Link></li>
            <li><a href="#experience" className="block hover:text-blue-600">Experience</a></li>
            <li><a href="#contact" className="block hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      )}

      
    </header>
    );
  }
  