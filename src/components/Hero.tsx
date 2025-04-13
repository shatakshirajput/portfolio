
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const phrases = ["Web Developer", "UI/UX Designer", "React Developer", "Full Stack Developer"];

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, isDeleting, currentPhrase]);

  const tick = () => {
    let i = currentPhrase % phrases.length;
    let fullPhrase = phrases[i];
    let updatedText = isDeleting ? fullPhrase.substring(0, text.length - 1) : fullPhrase.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullPhrase) {
      setIsDeleting(true);
      setDelta(100);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setCurrentPhrase(currentPhrase + 1);
      setDelta(200);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 animated-bg">
      <div className="container mx-auto px-4 py-16 relative text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-3/5 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              Hello, I'm <span className="text-accent">Shatakshi Rajput</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 flex items-center justify-center md:justify-start opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              I'm a <span className="ml-2 type-animation">{text}</span>
            </h2>
            <p className="text-lg mb-8 max-w-xl opacity-0 animate-fadeIn" style={{ animationDelay: '0.9s' }}>
              Passionate about creating beautiful, functional, and user-centered digital experiences.
              Let's bring your vision to life together.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start opacity-0 animate-fadeIn" style={{ animationDelay: '1.2s' }}>
              <a href="https://github.com/shatakshirajput/" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center md:justify-end opacity-0 animate-fadeIn" style={{ animationDelay: '1.5s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/30">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-70"></div>
              {/* Replace with your image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
                Profile Image
              </div>
            </div>
          </div>
        </div>
        
        <a href="#about" className="scroll-indicator">
          <ChevronDown size={32} className="text-white animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
