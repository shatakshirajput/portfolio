import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-10 border-t border-gray-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary">Shatakshi Rajput</h3>
            <p className="text-gray-400 text-sm mt-1">Web Developer & Designer</p>
          </div>

          {/* Right: Year + Button */}
          <div className="flex flex-col items-center md:items-end gap-3">
          <button
              onClick={scrollToTop}
              className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition duration-300 shadow-md"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
