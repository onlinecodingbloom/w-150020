
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    courses: false,
    about: false,
    success: false,
    blog: false
  });

  const toggleDropdown = (dropdown: keyof typeof dropdownOpen) => {
    setDropdownOpen({
      ...dropdownOpen,
      [dropdown]: !dropdownOpen[dropdown]
    });
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-[#0052CC] animate-slide-in">
                Bitwise School of Technology
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {/* Courses Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('courses')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#0052CC] flex items-center"
              >
                Courses <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen.courses && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <Link to="/courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Courses</Link>
                    <Link to="/courses/cpp" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">C++</Link>
                    <Link to="/courses/java" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Java</Link>
                    <Link to="/courses/dsa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">DSA</Link>
                    <Link to="/courses/full-stack" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Full-Stack Dev</Link>
                  </div>
                </div>
              )}
            </div>


            {/* About Us Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('about')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#0052CC] flex items-center"
              >
                About Us <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen.about && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Story</Link>
                    <Link to="/about#team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Team & Mentors</Link>
                    <Link to="/about#careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Careers @ Bitwise</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Success Stories Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('success')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#0052CC] flex items-center"
              >
                Success Stories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen.success && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <Link to="/success-stories" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Video Testimonials</Link>
                    <Link to="/success-stories#placement" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Placement Wall</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Blog & Resources Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('blog')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#0052CC] flex items-center"
              >
                Blog & Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen.blog && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Articles</Link>
                    <Link to="/blog/ebooks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Free E-books</Link>
                    <Link to="/blog/webinars" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Webinars & Events</Link>
                  </div>
                </div>
              )}
            </div>

            {/* FAQs */}
            <Link to="/faqs" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#0052CC]">
              FAQs
            </Link>

            {/* Contact */}
            <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#0052CC]">
              Contact
            </Link>
          </div>

          {/* Login/Register Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/login"
              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0052CC] hover:bg-[#0747A6] transition-colors duration-300"
            >
              Login / Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#0052CC] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0052CC]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/courses"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#0052CC] hover:bg-gray-50"
            >
              Courses
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#0052CC] hover:bg-gray-50"
            >
              About Us
            </Link>
            <Link
              to="/success-stories"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#0052CC] hover:bg-gray-50"
            >
              Success Stories
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#0052CC] hover:bg-gray-50"
            >
              Blog & Resources
            </Link>
            <Link
              to="/faqs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#0052CC] hover:bg-gray-50"
            >
              FAQs
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#0052CC] hover:bg-gray-50"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#0052CC] hover:bg-[#0747A6] text-center"
            >
              Login / Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
