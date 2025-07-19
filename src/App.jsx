import Header from "./containers/header";
import { PORTFOLIO_SECTION } from "./data/portfolio";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(PORTFOLIO_SECTION[0]?.title || "");

  const activeSection = PORTFOLIO_SECTION.find(
    (section) => section.title === active
  );

  return (
    <main className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-zinc-100 min-h-svh">
      <div className="text-zinc-100 max-w-xl mx-auto px-4 py-4 min-h-svh flex flex-col selection:bg-zinc-300 selection:text-zinc-900">
        <Header />
        
        <section className="flex space-x-4 items-center my-7">
          {PORTFOLIO_SECTION.map((section) => (
            <h3
              key={section.id}
              className={`text-base leading-relaxed cursor-pointer transition-colors duration-200 ${
                active === section.title
                  ? "text-zinc-100 font-semibold"
                  : "text-zinc-400"
              }`}
              onClick={() => setActive(section.title)}
            >
              {section.title}
            </h3>
          ))}
        </section>

        {activeSection?.component && <activeSection.component />}
      </div>
    </main>
  );
}

export default App;
