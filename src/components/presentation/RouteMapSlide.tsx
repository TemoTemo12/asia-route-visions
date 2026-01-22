import { useEffect, useState } from "react";
import { MapPin, Navigation } from "lucide-react";

const RouteMapSlide = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("route-slide");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const locations = [
    { name: "სტამბოლი", x: 15, y: 35, delay: "delay-200" },
    { name: "სუეცის არხი", x: 20, y: 55, delay: "delay-400" },
    { name: "ვლადივოსტოკი", x: 85, y: 30, delay: "delay-600" },
  ];

  return (
    <section id="route-slide" className="min-h-screen relative flex items-center py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-mid via-ocean-dark to-background" />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-700`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Navigation className="w-6 h-6 text-accent" />
            <span className="text-accent uppercase tracking-widest text-sm font-medium">მარშრუტი</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            მოგზაურობის <span className="text-gradient">გზა</span>
          </h2>
        </div>

        {/* Map visualization */}
        <div className="relative max-w-5xl mx-auto">
          <div className={`glass-card p-8 md:p-12 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            {/* Map container */}
            <div className="relative aspect-[16/9] bg-ocean-deep/50 rounded-xl overflow-hidden">
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              />

              {/* SVG Route line */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {isVisible && (
                  <>
                    {/* Route path */}
                    <path
                      d="M15,35 Q10,45 20,55 Q40,70 50,50 Q60,35 85,30"
                      fill="none"
                      className="route-line"
                      style={{ animationDelay: "0.5s" }}
                    />
                    {/* Glow effect */}
                    <path
                      d="M15,35 Q10,45 20,55 Q40,70 50,50 Q60,35 85,30"
                      fill="none"
                      stroke="hsl(var(--accent))"
                      strokeWidth="8"
                      strokeOpacity="0.2"
                      strokeLinecap="round"
                      className="route-line"
                      style={{ animationDelay: "0.5s" }}
                    />
                  </>
                )}
              </svg>

              {/* Location markers */}
              {locations.map((loc, index) => (
                <div
                  key={loc.name}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${isVisible ? `animate-scale-in ${loc.delay}` : 'opacity-0'}`}
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                >
                  <div className="relative group">
                    {/* Pulse ring */}
                    <div className="absolute inset-0 w-8 h-8 -m-1 bg-accent/30 rounded-full pulse-glow" />
                    
                    {/* Marker */}
                    <div className="relative z-10 w-6 h-6 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="w-3 h-3 text-background" />
                    </div>
                    
                    {/* Label */}
                    <div className={`absolute whitespace-nowrap text-sm font-medium text-foreground bg-card/80 backdrop-blur px-3 py-1 rounded-lg shadow-lg ${
                      index === 2 ? '-left-full mr-4' : 'left-full ml-4'
                    } top-1/2 -translate-y-1/2`}>
                      {loc.name}
                    </div>
                  </div>
                </div>
              ))}

              {/* Sea labels */}
              <div className={`absolute top-[45%] left-[35%] text-xs text-accent/60 italic ${isVisible ? 'animate-fade-in delay-700' : 'opacity-0'}`}>
                ხმელთაშუა ზღვა
              </div>
              <div className={`absolute top-[60%] left-[60%] text-xs text-accent/60 italic ${isVisible ? 'animate-fade-in delay-800' : 'opacity-0'}`}>
                ინდოეთის ოკეანე
              </div>
            </div>

            {/* Route summary */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {["ბოსფორი", "სუეცი", "წითელი ზღვა", "ინდოეთის ოკეანე", "იაპონიის ზღვა"].map((item, i) => (
                <span
                  key={item}
                  className={`px-4 py-2 rounded-full text-sm bg-secondary/50 text-foreground/80 ${isVisible ? `animate-fade-up delay-${(i + 3) * 100}` : 'opacity-0'}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteMapSlide;
