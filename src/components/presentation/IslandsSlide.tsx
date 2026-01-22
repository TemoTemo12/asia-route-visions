import { useEffect, useState } from "react";
import { Mountain, Globe } from "lucide-react";
import sriLankaImg from "@/assets/sri-lanka.jpg";
import japanImg from "@/assets/japan.jpg";

const IslandsSlide = () => {
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

    const element = document.getElementById("islands-slide");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const peninsulas = [
    {
      name: "ანატოლიის ნახევარკუნძული",
      location: "თურქეთი",
      fact: "აზიისა და ევროპის ხიდი"
    },
    {
      name: "არაბეთის ნახევარკუნძული",
      location: "საუდის არაბეთი",
      fact: "მსოფლიოს უდიდესი ნახევარკუნძული"
    },
    {
      name: "ინდოეთის ნახევარკუნძული",
      location: "ინდოეთი",
      fact: "სამხრეთ აზიის გული"
    },
    {
      name: "კორეის ნახევარკუნძული",
      location: "კორეა",
      fact: "აღმოსავლეთის კარიბჭე"
    },
  ];

  const islands = [
    { 
      name: "შრი-ლანკა", 
      description: "ინდოეთის ოკეანის მარგალიტი",
      image: sriLankaImg,
    },
    { 
      name: "იაპონია", 
      description: "ამომავალი მზის ქვეყანა",
      image: japanImg,
    },
  ];

  return (
    <section id="islands-slide" className="min-h-screen relative flex items-center py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-mid via-background to-ocean-dark" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mountain className="w-6 h-6 text-accent" />
            <span className="text-accent uppercase tracking-widest text-sm font-medium">ტერიტორიები</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            კუნძულები და <span className="text-gradient">ნახევარკუნძულები</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Peninsulas */}
          <div className={`mb-12 ${isVisible ? 'animate-slide-right delay-200' : 'opacity-0'}`}>
            <h3 className="text-xl font-semibold text-accent mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              ნახევარკუნძულები
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {peninsulas.map((item, index) => (
                <div
                  key={item.name}
                  className={`glass-card p-5 border-l-4 border-l-accent hover:border-l-primary transition-colors ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${(index + 2) * 150}ms` }}
                >
                  <h4 className="font-display text-lg font-semibold mb-1">{item.name}</h4>
                  <p className="text-accent text-sm mb-2">{item.location}</p>
                  <p className="text-muted-foreground text-sm">{item.fact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Islands with real images */}
          <div className={`${isVisible ? 'animate-slide-left delay-400' : 'opacity-0'}`}>
            <h3 className="text-xl font-semibold text-accent mb-6 flex items-center gap-2">
              <span className="text-2xl">🏝️</span>
              კუნძულები
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {islands.map((island, index) => (
                <div
                  key={island.name}
                  className={`glass-card overflow-hidden group hover:scale-[1.02] transition-transform ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${(index + 5) * 150}ms` }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={island.image} 
                      alt={island.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-display text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {island.name}
                    </h4>
                    <p className="text-muted-foreground">{island.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IslandsSlide;
