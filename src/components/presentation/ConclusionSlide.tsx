import { useEffect, useState } from "react";
import { Sparkles, CheckCircle, Globe2 } from "lucide-react";

const ConclusionSlide = () => {
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

    const element = document.getElementById("conclusion-slide");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const lessons = [
    "აზიის გეოგრაფიული მრავალფეროვნება უზარმაზარია",
    "ზღვები და სრუტეები განსაზღვრავენ ისტორიას",
    "ადამიანის ინჟინერიამ შეცვალა მსოფლიო",
    "კონტინენტი მოიცავს ყველა კლიმატურ ზონას",
  ];

  return (
    <section id="conclusion-slide" className="min-h-screen relative flex items-center py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-mid via-background to-ocean-deep" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl floating delay-300" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-accent uppercase tracking-widest text-sm font-medium">დასკვნა</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            რას გვასწავლის ეს <span className="text-gradient">მოგზაურობა</span>?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Lessons grid */}
          <div className={`glass-card p-8 md:p-12 mb-12 ${isVisible ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lessons.map((lesson, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${(index + 3) * 150}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/90">{lesson}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final message */}
          <div className={`text-center ${isVisible ? 'animate-fade-up delay-700' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
              <Globe2 className="w-10 h-10 text-accent" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              აზია - მსოფლიოს ყველაზე დიდი და მრავალფეროვანი კონტინენტი
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              სტამბოლიდან ვლადივოსტოკამდე - 10,000+ კილომეტრი გეოგრაფიული აღმოჩენებით, 
              კულტურული მემკვიდრეობით და ბუნებრივი სილამაზით სავსე გზა.
            </p>
          </div>

          {/* Stats */}
          <div className={`flex flex-wrap justify-center gap-8 mt-12 ${isVisible ? 'animate-fade-up delay-800' : 'opacity-0'}`}>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">10,000+</div>
              <div className="text-sm text-muted-foreground">კილომეტრი</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">5</div>
              <div className="text-sm text-muted-foreground">ზღვა</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">3</div>
              <div className="text-sm text-muted-foreground">ნახევარკუნძული</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">2</div>
              <div className="text-sm text-muted-foreground">არხი/სრუტე</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-20 ${isVisible ? 'animate-fade-in delay-1000' : 'opacity-0'}`}>
          <p className="text-muted-foreground text-sm">
            გმადლობთ ყურადღებისთვის 🙏
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSlide;
