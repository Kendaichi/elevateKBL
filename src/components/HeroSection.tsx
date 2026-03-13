import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-primary/80" />

    <div className="relative z-10 container mx-auto px-6 py-32 text-center">
      <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto mb-6">
        Helping Women Master High-Ticket Sales & Build 6-Figure Businesses
      </h1>
      <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
        Learn the skills, get support, and take action to grow your business.
      </p>
      <a href="#signup" className="btn-gold text-lg">
        Get Started Today
      </a>
    </div>
  </section>
);

export default HeroSection;
