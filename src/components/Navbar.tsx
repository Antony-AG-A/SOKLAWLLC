import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const TYPING_TEXT = 'SIMIYU, OPONDO, KIRANGA & COMPANY ADVOCATES';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < TYPING_TEXT.length) {
        setTypedText((prev) => prev + TYPING_TEXT[index]);
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 60);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f9f7f1]/50 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Typing Text */}
          <div className="flex flex-col items-start space-y-0.5 py-2 max-w-[200px]">
            <Link to="/">
              <img
                src="https://soklaw.co.ke/images/logo.png"
                alt="SOK Law Logo"
                className="h-9 w-auto object-contain transition-all duration-300"
              />
            </Link>
            <p className="text-[10px] sm:text-xs text-[#4B3621] font-medium whitespace-nowrap overflow-hidden">
              {typedText}
              {showCursor && <span className="animate-pulse">|</span>}
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Home
              </Link>
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Legal Services
              </Link>

              <div className="relative group">
                <button
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-400 flex items-center ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  Consultancy
                  <ChevronDown className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <Link
                    to="/consultancy/health"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Health & Human Rights
                  </Link>
                  <Link
                    to="/consultancy/ai-policy"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    AI Policy & Digital Rights
                  </Link>
                  <Link
                    to="/consultancy/data-policy"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Data Policy & Governance
                  </Link>
                </div>
              </div>

              <Link
                to="/csr"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                CSR
              </Link>

              <div className="relative group">
                <button
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-400 flex items-center ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  News
                  <ChevronDown className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <Link
                    to="/news/resources"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Resources
                  </Link>
                  <Link
                    to="/news/blogs"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/news/podcasts"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Podcasts
                  </Link>
                  <Link
                    to="/news/reports"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Reports
                  </Link>
                </div>
              </div>

              <Link
                to="/team"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Team
              </Link>

              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#f9f7f1]/50 backdrop-blur-md border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full"
            >
              Home
            </Link>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full"
            >
              Legal Services
            </Link>

            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'consultancy' ? null : 'consultancy')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center justify-between"
              >
                Consultancy
                <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'consultancy' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'consultancy' && (
                <div className="pl-4">
                  <Link
                    to="/consultancy/health"
                    onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  >
                    Health & Human Rights
                  </Link>
                  <Link
                    to="/consultancy/ai-policy"
                    onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  >
                    AI Policy & Digital Rights
                  </Link>
                  <Link
                    to="/consultancy/data-policy"
                    onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  >
                    Data Policy & Governance
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/csr"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full"
            >
              CSR
            </Link>

            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'news' ? null : 'news')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center justify-between"
              >
                News
                <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'news' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'news' && (
                <div className="pl-4">
                  <Link
                    to="/news/resources"
                    onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  >
                    Resources
                  </Link>
                  <Link
                    to="/news/blogs"
                    onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/news/podcasts"
                    onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  >
                    Podcasts
                  </Link>
                  <Link
                    to="/news/reports"
                    onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  >
                    Reports
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/team"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full"
            >
              Team
            </Link>

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
