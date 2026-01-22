import { useState, useEffect } from "react";

interface ProgressIndicatorProps {
  sections: { id: string; label: string }[];
}

const ProgressIndicator = ({ sections }: ProgressIndicatorProps) => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Find active section
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-secondary/30 z-[60]">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Side dots indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center"
          >
            {/* Tooltip */}
            <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-card/90 backdrop-blur text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {section.label}
            </span>
            
            {/* Dot */}
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSection
                  ? "bg-accent scale-125 shadow-lg shadow-accent/50"
                  : index < activeSection
                  ? "bg-primary/60"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Current section indicator (mobile) */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 lg:hidden">
        <div className="px-4 py-2 rounded-full bg-card/80 backdrop-blur-xl border border-border/50 flex items-center gap-2">
          <span className="text-xs text-muted-foreground">
            {activeSection + 1} / {sections.length}
          </span>
          <div className="flex gap-1">
            {sections.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === activeSection ? "bg-accent" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressIndicator;
