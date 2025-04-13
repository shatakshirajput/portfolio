import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiFirebase,
  SiDjango,
  SiFlask,
  SiGit,
  SiGithub,
  SiVscodium,
  SiFigma,
  SiRender,
  SiNetlify,
  SiOpenjdk,
  SiPython,
  SiPhp,
  SiMysql,
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
  <div className="flex flex-col items-center justify-center border rounded-lg p-4 shadow-md hover:shadow-xl transition duration-300 bg-white dark:bg-gray-800 text-center">
    <div className="text-3xl text-primary mb-2">{skill.icon}</div>
    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I use in building full-stack web applications.
          </p>
        </div>

        {/* Skill Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Frontend</h3>
            <div className="grid grid-cols-2 gap-4">
              {frontendSkills.map((skill, index) => (
                <SkillBox key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Backend</h3>
            <div className="grid grid-cols-2 gap-4">
              {backendSkills.map((skill, index) => (
                <SkillBox key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Others</h3>
            <div className="grid grid-cols-2 gap-4">
              {otherSkills.map((skill, index) => (
                <SkillBox key={index} skill={skill} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Languages</h3>
            <div className="grid grid-cols-2 gap-4">
              {languageSkills.map((skill, index) => (
                <SkillBox key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
