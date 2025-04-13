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
    image: "/public/wanderlust.jpg",
    techStack: ["React", "Tailwind", "Node.js", "MongoDB"],
    link: "https://wandrovia.vercel.app",
    github: "https://github.com/yourusername/wandrovia",
  },
  {
    title: "AI-Powered Interior Designer",
    description:
      "Smart room design tool with image upload, furniture placement using AI (YOLO), and a 3D room view using Three.js. Supports suggestions and style matching.",
    image: "/public/roomify.png",
    techStack: ["React", "Flask", "YOLO", "Three.js", "MongoDB"],
    github: "https://github.com/yourusername/interior-designer",
  },
  {
    title: "Online Coding Platform",
    description:
      "Leetcode-like online coding platform with real-time code editor, question sets, code evaluation via Docker backend and leaderboard.",
    image: "/public/codeEditor.png",
    techStack: ["React", "Express", "MongoDB", "Docker", "Monaco Editor"],
    github: "https://github.com/yourusername/online-coding-platform",
  },
  {
    title: "Expense Tracker",
    description:
      "A responsive expense tracking web app with charts, budgets, categories and authentication. Built with MERN stack.",
    image: "/public/expenseTracker.png",
    techStack: ["React", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/yourusername/expense-tracker",
  },
  {
    title: "Blogging Platform",
    description:
      "Minimal blogging platform where users can post, edit and delete blogs. Includes Markdown support and authentication.",
    image: "/public/blog.png",
    techStack: ["Next.js", "TypeScript", "MongoDB", "TailwindCSS"],
    github: "https://github.com/yourusername/blogging-platform",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
            Projec<span className="text-orange-500">ts</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-2">
            Here are some of the major projects I’ve worked on recently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="h-60 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
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
                <div className="flex gap-4">
                  {project.link && (
                    <Button asChild variant="default">
                      <a href={project.link} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button asChild variant="outline">
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
