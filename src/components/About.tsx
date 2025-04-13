
import React, { useEffect, useRef } from 'react';
import { User, Calendar, MapPin, Mail, Phone } from 'lucide-react';

interface AboutData {
  name: string;
  birthday: string;
  location: string;
  email: string;
  phone: string;
  bio: string[];
}

const aboutData: AboutData = {
  name: "Shatakshi Rajput",
  birthday: "3 February 2005",
  location: "Uttar Pradesh, India",
  email: "shatakshirajput02@gmail.com",
  phone: "91+ 7307261086",
  bio: [
    "Hey there! I’m Shatakshi Rajput, a passionate full-stack web developer and tech enthusiast with a strong foundation in the MERN stack, modern frontend frameworks, and AI/ML integration.",
    "I love turning creative ideas into real-world, user-centric applications — from building immersive 3D design tools to coding platforms that empower developers.",
    "I’m always exploring the latest tech trends, refining my skills, and helping others learn through collaboration and mentorship.Let’s build something awesome together! I'm a passionate web developer with a keen eye for design and a commitment to creating seamless user experiences.",
    "I enjoy solving complex problems and turning ideas into digital reality through clean code and thoughtful architecture."
  ]
};

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      childElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
            About <span className="text-orange-500">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Here you'll find more information about me, what I do, and my current skills
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="opacity-0 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4 text-primary">Get to know me!</h3>
            {aboutData.bio.map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 dark:text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 opacity-0 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-primary">Personal Details</h3>

            <div className="space-y-4">
              <div className="flex items-center">
                <User className="text-accent mr-4" size={20} />
                <div>
                  <span className="block text-sm text-gray-500 dark:text-gray-400">Name</span>
                  <span className="font-medium">{aboutData.name}</span>
                </div>
              </div>

              <div className="flex items-center">
                <Calendar className="text-accent mr-4" size={20} />
                <div>
                  <span className="block text-sm text-gray-500 dark:text-gray-400">Birthday</span>
                  <span className="font-medium">{aboutData.birthday}</span>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="text-accent mr-4" size={20} />
                <div>
                  <span className="block text-sm text-gray-500 dark:text-gray-400">Location</span>
                  <span className="font-medium">{aboutData.location}</span>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="text-accent mr-4" size={20} />
                <div>
                  <span className="block text-sm text-gray-500 dark:text-gray-400">Email</span>
                  <span className="font-medium">{aboutData.email}</span>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="text-accent mr-4" size={20} />
                <div>
                  <span className="block text-sm text-gray-500 dark:text-gray-400">Phone</span>
                  <span className="font-medium">{aboutData.phone}</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
