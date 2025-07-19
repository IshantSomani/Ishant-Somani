import { memo } from "react";
import { EXPERIENCE_SECTION } from "../data/portfolio";

const Experience = () => {
  return (
    <ul className="space-y-6">
      {[...EXPERIENCE_SECTION].reverse().map((section, idx) => (
        <li
          key={section.id}
          className="group animate-fadeInDiag hover:translate-x-1 transition-all duration-300 ease-out space-y-1.5"
          style={{ animationDelay: `${idx * 80}ms` }}
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
            <h3 className="text-md font-medium text-zinc-100 leading-relaxed">
              {section.title} at {section.company}{" "}
              {section.location && `in ${section.location}`}
            </h3>
            <span className="text-xs text-zinc-500/90">{section.date}</span>
          </div>
          <p className="text-sm text-zinc-400 mb-1 leading-relaxed md:text-justify">
            {section.description}
          </p>
          <ul className="flex flex-wrap items-baseline">
            {" "}
            {section.tech &&
              section.tech.map((tech, index) => (
                <li key={index} className="text-xs text-zinc-500">
                  {tech}
                  {index !== section.tech.length - 1 && (
                    <span className="mx-2 select-none">/</span>
                  )}
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default memo(Experience);