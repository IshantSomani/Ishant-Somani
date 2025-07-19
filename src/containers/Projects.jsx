import { BiCode, BiLink, BiVideo } from "react-icons/bi";
import { PROJECT_SECTION } from "../data/portfolio";
import { memo } from "react";

const ProjectLink = ({ href, text }) => {
  const icons = {
    Live: <BiLink size={18} />,
    Video: <BiVideo size={18} />,
    "Source Code": <BiCode size={18} />,
  };

  return (
    href && (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-xs text-zinc-500/90 hover:text-zinc-300 mr-4 transition-colors"
        title={text}
      >
        {icons[text]}
      </a>
    )
  );
};

const TechStack = ({ technologies }) => (
  <ul className="flex flex-wrap items-baseline">
    {technologies?.map((tech, index) => (
      <li key={tech} className="text-xs text-zinc-500">
        {tech}
        {index !== technologies.length - 1 && <span className="mx-1">/</span>}
      </li>
    ))}
  </ul>
);

const Projects = memo(() => {
  return (
    <ul className="space-y-8">
      {[...PROJECT_SECTION].reverse().map((project, idx) => (
        <li
          key={project.id}
          className="group animate-fadeInDiag hover:translate-x-1 transition-all duration-300 ease-out space-y-1.5"
          style={{ animationDelay: `${idx * 80}ms` }}
        >
          <div className="flex items-baseline justify-between">
            <h3 className="text-md font-medium text-zinc-100 mb-1">
              {project.title}
            </h3>
            <div className="flex flex-wrap">
              <ProjectLink href={project.code} text="Source Code" />
              <ProjectLink href={project.link} text="Live" />
              <ProjectLink href={project.video} text="Video" />
            </div>
          </div>

          <p className="text-sm text-zinc-400 mb-1 leading-relative md:text-justify">
            {project.description}
          </p>

          <TechStack technologies={project.tech} />
        </li>
      ))}
    </ul>
  );
});

export default Projects;
