import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-primary">SR</a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative group text-gray-700 dark:text-gray-300 transition-colors"
              >
                <span className="group-hover:text-primary transition-colors duration-300">
                  {item.label}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <Button variant="outline" size="sm" onClick={toggleDarkMode} className="ml-2">
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </Button>

            <Button asChild size="sm" className="ml-2">
              <a href="/public/ShatakshiRajputResume (1).pdf" download>
                <Download size={16} className="mr-2" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Toggle Buttons */}
          <div className="flex md:hidden items-center space-x-2">
            <Button variant="outline" size="sm" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </Button>

            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative group py-2 text-gray-700 dark:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="group-hover:text-primary transition-colors duration-300">
                  {item.label}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <Button asChild size="sm" className="mt-4">
              <a href="/public/ShatakshiRajputResume (1).pdf" download>
                <Download size={16} className="mr-2" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
