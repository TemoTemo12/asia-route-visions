import { useEffect, useState } from "react";
import { BookOpen, Star } from "lucide-react";

const DiarySlide = () => {
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

    const element = document.getElementById("diary-slide");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const diaryEntries = [
    {
      title: "ბოსფორის სრუტე",
      subtitle: "მოგზაურობის დასაწყისი",
      content: "ევროპასა და აზიას შორის ბუნებრივი გზა. სტრატეგიული მნიშვნელობის სრუტე, რომელიც საუკუნეების განმავლობაში განსაზღვრავდა იმპერიების ბედს.",
      highlight: "სტრატეგიული მნიშვნელობა",
      icon: "🌉",
    },
    {
      title: "სუეცის არხი",
      subtitle: "ადამიანის ინჟინერია",
      content: "1869 წელს გახსნილი არხი, რომელმაც სრულიად შეცვალა საერთაშორისო ვაჭრობის მარშრუტები. აფრიკის შემოვლის ნაცვლად - პირდაპირი გზა.",
      highlight: "დაზოგილი 7000 კმ",
      icon: "🚢",
    },
    {
      title: "იაპონიის ზღვა",
      subtitle: "მოგზაურობის დასასრული",
      content: "წყნარი ოკეანის კარი და აზიის აღმოსავლეთის საზღვარი. ვლადივოსტოკი - რუსეთის წყნარი ოკეანის ფლოტის მთავარი ბაზა.",
      highlight: "დასასრულის სილამაზე",
      icon: "🏔️",
    },
  ];

  return (
    <section id="diary-slide" className="min-h-screen relative flex items-center py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark via-background to-ocean-mid" />
      
      {/* Decorative lines */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-accent" />
            <span className="text-accent uppercase tracking-widest text-sm font-medium">დღიური</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            მოგზაურობის <span className="text-gradient">დღიური</span>
          </h2>
        </div>

        {/* Diary entries */}
        <div className="max-w-4xl mx-auto space-y-8">
          {diaryEntries.map((entry, index) => (
            <div
              key={entry.title}
              className={`${isVisible ? (index % 2 === 0 ? 'animate-slide-right' : 'animate-slide-left') : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="glass-card p-8 relative overflow-hidden group">
                {/* Icon */}
                <div className="absolute top-6 right-6 text-5xl opacity-20 group-hover:opacity-40 transition-opacity">
                  {entry.icon}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-4 h-4 text-accent" />
                    <span className="text-sm text-accent font-medium">{entry.subtitle}</span>
                  </div>
                  
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {entry.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {entry.content}
                  </p>
                  
                  {/* Highlight badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    {entry.highlight}
                  </div>
                </div>

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiarySlide;
