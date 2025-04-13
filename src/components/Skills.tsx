import React from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiBootstrap, SiReact,
  SiTailwindcss, SiMui, SiNodedotjs, SiExpress, SiSupabase, SiFirebase,
  SiDjango, SiFlask, SiGit, SiGithub, SiVscodium, SiFigma, SiRender,
  SiNetlify, SiOpenjdk, SiPython, SiPhp, SiMysql,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const frontendSkills: Skill[] = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "React", icon: <SiReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Material UI", icon: <SiMui /> },
];

const backendSkills: Skill[] = [
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Flask", icon: <SiFlask /> },
];

const otherSkills: Skill[] = [
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "VS Code", icon: <SiVscodium /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Render", icon: <SiRender /> },
  { name: "Netlify", icon: <SiNetlify /> },
];

const languageSkills: Skill[] = [
  { name: "Java", icon: <SiOpenjdk /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "PHP", icon: <SiPhp /> },
];

const SkillBox = ({ skill }: { skill: Skill }) => (
  <div className="flex flex-col items-center gap-2 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1">
    <div className="text-4xl text-primary drop-shadow-md">{skill.icon}</div>
    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
            My <span className="text-orange-500">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tools and technologies I use to build modern and scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
          <SkillSection title="Frontend" skills={frontendSkills} />
          <SkillSection title="Backend" skills={backendSkills} />
          <SkillSection title="Others" skills={otherSkills} />
          <SkillSection title="Languages" skills={languageSkills} />
        </div>
      </div>
    </section>
  );
};

const SkillSection = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <div>
    <h3 className="text-xl font-semibold text-primary mb-4 border-b pb-2">{title}</h3>
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <SkillBox key={index} skill={skill} />
      ))}
    </div>
  </div>
);

export default Skills;
