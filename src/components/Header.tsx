export default function Header() {
    return (
      <header className="sticky top-0 bg-white/80 backdrop-blur border-b border-gray-200 z-50 shadow-sm">
        <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight text-gray-900">
            Arindam
          </div>
          <ul className="flex space-x-6 text-sm font-medium text-gray-700 list-none">
            <li>
              <a href="#intro" className="hover:text-blue-600 transition-colors duration-200">Intro</a>
            </li>
            <li>
              <a href="#work" className="hover:text-blue-600 transition-colors duration-200">Work</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-600 transition-colors duration-200">Projects</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-600 transition-colors duration-200">Skills</a>
            </li>
            <li>
              <a href="#experience" className="hover:text-blue-600 transition-colors duration-200">Experience</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  