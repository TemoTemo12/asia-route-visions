import { MapPin, Compass, Anchor } from "lucide-react";

const HeroSlide = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-ocean-dark to-ocean-mid" />
      <div className="absolute inset-0 water-effect" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl floating delay-300" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Top decorative icons */}
        <div className="flex justify-center gap-8 mb-8 opacity-0 animate-fade-up">
          <Compass className="w-8 h-8 text-accent/60" />
          <MapPin className="w-8 h-8 text-primary/60" />
          <Anchor className="w-8 h-8 text-accent/60" />
        </div>

        {/* Main title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-up delay-100">
          <span className="text-gradient">წარმოსახვითი</span>
          <br />
          <span className="text-foreground">მოგზაურობა</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-up delay-200">
          აზიის ფიზიკურ რუკაზე
        </p>

        {/* Route preview */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12 opacity-0 animate-fade-up delay-300">
          <span className="text-lg font-medium text-primary">სტამბოლი</span>
          <div className="hidden md:block w-24 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
          <span className="text-lg font-medium text-accent">სუეცის არხი</span>
          <div className="hidden md:block w-24 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full" />
          <span className="text-lg font-medium text-primary">ვლადივოსტოკი</span>
        </div>

        {/* Scroll indicator */}
        <div className="opacity-0 animate-fade-up delay-500">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">გადაახვიე ქვემოთ</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          <path 
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" 
            fill="hsl(var(--ocean-mid))"
            opacity="0.3"
          />
          <path 
            d="M0,80 C360,20 720,100 1080,40 C1260,20 1380,80 1440,60 L1440,120 L0,120 Z" 
            fill="hsl(var(--ocean-mid))"
            opacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSlide;
