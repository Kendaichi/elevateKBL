import heroBg from "@/assets/hero-bg.jpg";
import { Sparkles } from "lucide-react";

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-primary/70" />

    <div className="relative z-10 container mx-auto px-6 py-32 text-center">
      <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-card/10 backdrop-blur-sm border border-card/20">
        <Sparkles size={16} className="gold-accent" />
        <span className="font-body text-sm text-primary-foreground/90">Your next chapter starts here ✨</span>
      </div>
      <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto mb-6">
        Helping Women Master High-Ticket Sales & Build 6-Figure Businesses
      </h1>
      <p className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 leading-relaxed">
        You don't need to figure it all out alone. Learn the skills, get the support, and take bold action to grow the business you deserve. 💛
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#signup" className="btn-gold text-lg inline-flex items-center gap-2">
          Get Started Today
          <span className="text-xl">→</span>
        </a>
        <a href="#about" className="btn-gold-outline text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" style={{ borderColor: "hsl(43,29%,95%,0.3)" }}>
          Meet Kiona
        </a>
      </div>
    </div>

    {/* Soft wave divider */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,70 1440,60 L1440,100 L0,100 Z" fill="hsl(40,20%,90%)" />
      </svg>
    </div>
  </section>
);

export default HeroSection;
