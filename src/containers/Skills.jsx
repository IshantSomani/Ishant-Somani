import { SKILLS_SECTION } from "../data/portfolio";

const Skills = () => {
  return (
    <section className="space-y-7">
      {SKILLS_SECTION.map(({ id, title, skills }) => (
        <div key={id} className="animate-fadeInUp">
          <h2 className="text-md font-semibold text-zinc-100 mb-4">{title}</h2>
          <ul className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="group flex flex-col items-center justify-center gap-4 text-sm text-zinc-300 px-3 py-2 rounded-md transition select-none"
              >
                <skill.icon
                  className="size-7 transition-transform group-hover:scale-120"
                  style={{ color: skill.color }}
                />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills