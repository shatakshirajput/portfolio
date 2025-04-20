import React, { useEffect, useRef } from "react";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: "education";
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Class 10th",
    organization: "CBSE Board",
    date: "2019-20",
    description:
      "Secured 92.2% overall with distinction in Mathematics and Science.",
    icon: "education",
  },
  {
    id: 2,
    title: "Class 12th",
    organization: "CBSE Board",
    date: "2021-22",
    description:
      "Achieved 93% with a focus on Physics, Chemistry, and Mathematics.",
    icon: "education",
  },
  {
    id: 3,
    title: "B.Tech in Computer Science",
    organization: "NIET, Greater Noida",
    date: "2022 - 2026",
    description:
      "Pursuing Bachelor’s in Computer Science with current CGPA of 8.38. Engaged in multiple tech projects and leadership activities.",
    icon: "education",
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".timeline-item");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fadeInUp");
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
    <section
      id="education"
      ref={sectionRef}
      className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Educati<span className="text-orange-500">on</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            My academic background and ongoing learning journey
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dashed border-primary/30" />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`timeline-item flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center justify-between gap-6`}
                >
                  {/* Card */}
                  <div className="w-full md:w-5/12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                    <span className="text-sm font-semibold text-primary block mb-1">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                      {item.organization}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>

                  {/* Marker */}
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-900 border-2 border-primary rounded-full shadow-md shrink-0">
                    <GraduationCap className="text-primary" size={20} />
                  </div>

                  {/* Spacer on opposite side */}
                  <div className="hidden md:block w-5/12" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <a href="/public/ShatakshiRajputResume (1).pdf" download>
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
