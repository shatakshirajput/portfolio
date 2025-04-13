
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
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-gray-400">Web Developer & Designer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400 mb-2">© {new Date().getFullYear()} All Rights Reserved</p>
            <button 
              onClick={scrollToTop}
              className="p-3 bg-primary/20 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
