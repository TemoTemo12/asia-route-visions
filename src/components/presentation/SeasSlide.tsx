import { useEffect, useState } from "react";
import { Waves, Anchor } from "lucide-react";

const SeasSlide = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("seas-slide");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const seas = [
    {
      name: "ბოსფორის სრუტე",
      description: "ევროპა-აზიის ბუნებრივი საზღვარი",
      icon: "🌊",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "სუეცის არხი",
      description: "ადამიანის შექმნილი გზა",
      icon: "⚓",
      color: "from-cyan-500/20 to-teal-500/20"
    },
    {
      name: "ხმელთაშუა ზღვა",
      description: "ცივილიზაციების გზაჯვარედინი",
      icon: "🌅",
      color: "from-teal-500/20 to-blue-500/20"
    },
    {
      name: "წითელი ზღვა",
      description: "თბილი წყლების სამეფო",
      icon: "🐚",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      name: "იაპონიის ზღვა",
      description: "მოგზაურობის დასასრული",
      icon: "🏔️",
      color: "from-indigo-500/20 to-purple-500/20"
    },
  ];

  return (
    <section id="seas-slide" className="min-h-screen relative flex items-center py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-ocean-dark to-ocean-mid" />
      
      {/* Water effect overlay */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Waves className="w-6 h-6 text-accent" />
            <span className="text-accent uppercase tracking-widest text-sm font-medium">წყლები</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            გავლილი <span className="text-gradient">ზღვები</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            სტამბოლიდან ვლადივოსტოკამდე გზაზე გავივლით მსოფლიოს ყველაზე მნიშვნელოვან წყლის მარშრუტებს
          </p>
        </div>

        {/* Seas grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {seas.map((sea, index) => (
            <div
              key={sea.name}
              className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className={`glass-card p-6 h-full group hover:scale-105 transition-transform duration-300 bg-gradient-to-br ${sea.color}`}>
                <div className="text-4xl mb-4">{sea.icon}</div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                  {sea.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {sea.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Connecting line visualization */}
        <div className={`mt-16 flex items-center justify-center ${isVisible ? 'animate-fade-in delay-700' : 'opacity-0'}`}>
          <div className="flex items-center gap-4">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div key={i} className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                {i < 4 && <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-accent/60 to-accent/30" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasSlide;
