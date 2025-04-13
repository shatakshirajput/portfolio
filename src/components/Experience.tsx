import React, { useEffect, useRef } from 'react';
import { GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: 'education';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Class 10th",
    organization: "CBSE Board",
    date: "2019-20",
    description: "Secured 92.2% overall with distinction in Mathematics and Science.",
    icon: "education"
  },
  {
    id: 2,
    title: "Class 12th",
    organization: "CBSE Board",
    date: "2021-22",
    description: "Achieved 93% with a focus on Physics, Chemistry, and Mathematics.",
    icon: "education"
  },
  {
    id: 3,
    title: "B.Tech in Computer Science",
    organization: "NIET, Greater Noida",
    date: "2022 - 2026",
    description: "Pursuing Bachelor’s in Computer Science with current CGPA of 8.38. Engaged in multiple tech projects and leadership activities.",
    icon: "education"
  }
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.timeline-item');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fadeIn');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Education</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and ongoing learning journey
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-px h-full bg-primary/30"></div>
            </div>

            {/* Timeline items */}
            <div className="relative">
              {timelineData.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`timeline-item mb-10 flex opacity-0 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  } relative`}
                >
                  {/* Timeline marker */}
                  <div className="absolute left-1/2 -translate-x-1/2 -mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                      <GraduationCap size={18} />
                    </div>
                  </div>

                  {/* Timeline content */}
                  <div 
                    className={`w-5/12 ${
                      index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover-card">
                      <span className="text-sm font-medium text-primary block mb-1">
                        {item.date}
                      </span>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                        {item.organization}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
