import { useEffect, useState } from "react";
import { BookOpen, Star } from "lucide-react";
import bosphorusImg from "@/assets/bosphorus.jpg";
import suezImg from "@/assets/suez-canal.jpg";
import japanSeaImg from "@/assets/japan-sea.jpg";

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
      content: "ევროპასა და აზიას შორის ბუნებრივი გზა. სტრატეგიული მნიშვნელობის სრუტე, რომელიც საუკუნეების განმავლობაში განსაზღვრავდა იმპერიების ბედს. სიგრძე მხოლოდ 31 კილომეტრია, მაგრამ მნიშვნელობა უზარმაზარი.",
      highlight: "სტრატეგიული მნიშვნელობა",
      image: bosphorusImg,
    },
    {
      title: "სუეცის არხი",
      subtitle: "ადამიანის ინჟინერია",
      content: "1869 წელს გახსნილი არხი, რომელმაც სრულიად შეცვალა საერთაშორისო ვაჭრობის მარშრუტები. აფრიკის შემოვლის ნაცვლად — პირდაპირი გზა ევროპიდან აზიაში. დაზოგილი 7,000 კილომეტრი!",
      highlight: "დაზოგილი 7,000 კმ",
      image: suezImg,
    },
    {
      title: "იაპონიის ზღვა",
      subtitle: "მოგზაურობის დასასრული",
      content: "წყნარი ოკეანის კარი და აზიის აღმოსავლეთ საზღვარი. ვლადივოსტოკი — რუსეთის წყნარი ოკეანის ფლოტის მთავარი ბაზა და ჩვენი ეპიკური მოგზაურობის საბოლოო დანიშნულება.",
      highlight: "მოგზაურობის დასრულება",
      image: japanSeaImg,
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

        {/* Diary entries with images */}
        <div className="max-w-5xl mx-auto space-y-8">
          {diaryEntries.map((entry, index) => (
            <div
              key={entry.title}
              className={`${isVisible ? (index % 2 === 0 ? 'animate-slide-right' : 'animate-slide-left') : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="glass-card overflow-hidden group">
                <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  {/* Image */}
                  <div className="md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                    <img 
                      src={entry.image} 
                      alt={entry.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-3/5 p-6 md:p-8 relative">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiarySlide;
