import React from "react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Wandrovia (Airbnb Clone)",
    description:
      "A full-stack booking platform inspired by Airbnb with search, filters, bookings, and payments. Built using React, Tailwind, Node.js, and MongoDB.",
    image: "/wanderlust.png",
    techStack: ["React", "Tailwind", "Node.js", "MongoDB"],
    link: "https://wandrovia.vercel.app",
    github: "https://github.com/yourusername/wandrovia",
  },
  {
    title: "AI-Powered Interior Designer",
    description:
      "Smart room design tool with image upload, furniture placement using AI (YOLO), and a 3D room view using Three.js. Supports suggestions and style matching.",
    image: "/roomify.png",
    techStack: ["React", "Flask", "YOLO", "Three.js", "MongoDB"],
    github: "https://github.com/yourusername/interior-designer",
  },
  {
    title: "Online Coding Platform",
    description:
      "Leetcode-like online coding platform with real-time code editor, question sets, code evaluation via Docker backend and leaderboard.",
    image: "/codeEditor.png",
    techStack: ["React", "Express", "MongoDB", "Docker", "Monaco Editor"],
    github: "https://github.com/yourusername/online-coding-platform",
  },
  {
    title: "Expense Tracker",
    description:
      "A responsive expense tracking web app with charts, budgets, categories and authentication. Built with MERN stack.",
    image: "/expenseTracker.png",
    techStack: ["React", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/yourusername/expense-tracker",
  },
  {
    title: "Blogging Platform",
    description:
      "Minimal blogging platform where users can post, edit and delete blogs. Includes Markdown support and authentication.",
    image: "/blog.png",
    techStack: ["Next.js", "TypeScript", "MongoDB", "TailwindCSS"],
    github: "https://github.com/yourusername/blogging-platform",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projec<span className="text-orange-500">ts</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-2 text-sm sm:text-base">
            Here are some of the major projects I’ve worked on recently.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title || "Project image"}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 flex-wrap mt-auto">
                  {project.link && (
                    <Button asChild variant="default" className="text-sm px-4 py-2">
                      <a href={project.link} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button asChild variant="outline" className="text-sm px-4 py-2">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
