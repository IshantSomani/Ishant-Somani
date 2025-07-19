import { memo } from "react";
import { SOCIAL_LINKS } from "../data/portfolio";

const Header = () => {
  return (
    <section className="space-y-5">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-400 text-transparent bg-clip-text">
          Hey, I'm Ishant
        </h1>
        <p className="text-sm text-zinc-400 leading-relaxed md:text-justify">
          Full Stack Developer passionate about building user-friendly web apps,
          combining creativity with AI tools to streamline development and
          enhance UX.
          <br />
          Skilled in team collaboration, event leadership, and constantly
          exploring trends in tech, AI, and innovation.
        </p>
      </div>

      <div className="flex items-center space-x-4">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.link}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-zinc-100 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label={link.title}
            aria-current="page"
            {...(link.download && { download: true })}
          >
            <link.icon className="size-5" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default memo(Header);