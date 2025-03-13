import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/programs', label: 'Programs' },
    { path: '/get-involved', label: 'Get Involved' },
    { path: '/events', label: 'Events' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur z-50 shadow-md">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-dark whitespace-nowrap">
                Devs Foundation
              </h1>
              <p className="text-[0.65rem] sm:text-xs md:text-sm text-primary-dark/80 font-medium leading-tight tracking-wide whitespace-nowrap">
                Empowering lives through skills
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  isActive(link.path) 
                    ? 'text-primary font-semibold bg-primary/5' 
                    : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/get-involved"
              state={{ scrollTo: 'donate' }}
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm lg:text-base transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Support Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur shadow-lg border-t border-gray-100">
            <div className="container-padding py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    isActive(link.path) 
                      ? 'text-primary font-semibold bg-primary/5' 
                      : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  to="/get-involved"
                  state={{ scrollTo: 'donate' }}
                  className="block w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full text-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => setIsOpen(false)}
                >
                  Support Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}