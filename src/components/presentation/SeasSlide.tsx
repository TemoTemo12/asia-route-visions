import { useEffect, useState } from "react";
import { Waves } from "lucide-react";
import bosphorusImg from "@/assets/bosphorus.jpg";
import suezImg from "@/assets/suez-canal.jpg";
import mediterraneanImg from "@/assets/mediterranean.jpg";
import redSeaImg from "@/assets/red-sea.jpg";
import japanSeaImg from "@/assets/japan-sea.jpg";

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
      description: "ევროპისა და აზიის ბუნებრივი საზღვარი",
      image: bosphorusImg,
    },
    {
      name: "სუეცის არხი",
      description: "ადამიანის ხელით შექმნილი საზღვაო გზა",
      image: suezImg,
    },
    {
      name: "ხმელთაშუა ზღვა",
      description: "ცივილიზაციების გზაჯვარედინი",
      image: mediterraneanImg,
    },
    {
      name: "წითელი ზღვა",
      description: "თბილი წყლების სამეფო",
      image: redSeaImg,
    },
    {
      name: "იაპონიის ზღვა",
      description: "მოგზაურობის საბოლოო დანიშნულება",
      image: japanSeaImg,
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
            გავლილი <span className="text-gradient">ზღვები და სრუტეები</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            სტამბოლიდან ვლადივოსტოკამდე გზაზე გავივლით მსოფლიოს უმნიშვნელოვანეს საზღვაო მარშრუტებს
          </p>
        </div>

        {/* Seas grid with real images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {seas.map((sea, index) => (
            <div
              key={sea.name}
              className={`${isVisible ? 'animate-fade-up' : 'opacity-0'} ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="glass-card overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={sea.image} 
                    alt={sea.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                    {sea.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {sea.description}
                  </p>
                </div>
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
                {i < 4 && <div className="w-12 md:w-20 h-0.5 bg-gradient-to-r from-accent/60 to-accent/30" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasSlide;
