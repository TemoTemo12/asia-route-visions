import { useEffect, useState } from "react";
import { Navigation } from "lucide-react";
import asiaRouteMap from "@/assets/asia-route-map.jpg";

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

  return (
    <section id="route-slide" className="min-h-screen relative flex items-center py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-mid via-ocean-dark to-background" />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-12 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-700`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Navigation className="w-6 h-6 text-accent" />
            <span className="text-accent uppercase tracking-widest text-sm font-medium">მარშრუტი</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            მოგზაურობის <span className="text-gradient">გზა</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            სტამბოლიდან ვლადივოსტოკამდე — 10,000 კილომეტრზე მეტი საზღვაო მოგზაურობა აზიის გავლით
          </p>
        </div>

        {/* Real map */}
        <div className={`max-w-6xl mx-auto ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="glass-card p-4 md:p-8 ocean-glow">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <img 
                src={asiaRouteMap} 
                alt="აზიის მარშრუტის რუკა" 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              
              {/* Route legend */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-4">
                {["სტამბოლი", "სუეცის არხი", "ინდოეთის ოკეანე", "ვლადივოსტოკი"].map((item, i) => (
                  <span
                    key={item}
                    className={`px-4 py-2 rounded-full text-sm bg-card/80 backdrop-blur text-foreground border border-accent/30 ${isVisible ? `animate-fade-up` : 'opacity-0'}`}
                    style={{ animationDelay: `${(i + 3) * 150}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key stats */}
        <div className={`flex flex-wrap justify-center gap-8 mt-12 ${isVisible ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-1">10,000+</div>
            <div className="text-sm text-muted-foreground">კილომეტრი</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-1">5</div>
            <div className="text-sm text-muted-foreground">ზღვა და ოკეანე</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-1">2</div>
            <div className="text-sm text-muted-foreground">სრუტე და არხი</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteMapSlide;
