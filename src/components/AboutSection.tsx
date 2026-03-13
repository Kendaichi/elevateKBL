import coachPhoto from "@/assets/coach-photo.jpg";
import useFadeIn from "@/hooks/useFadeIn";

const AboutSection = () => {
  const ref = useFadeIn();

  return (
    <section id="about" className="py-24 bg-muted">
      <div ref={ref} className="container mx-auto px-6 section-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
              Meet Kiona
            </h2>
            <div className="w-16 h-1 mb-8 rounded-full" style={{ background: "linear-gradient(90deg, hsl(38,70%,55%), hsl(30,60%,45%))" }} />
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              Hi, I'm Kiona — British expat and high-ticket sales coach. I help women grow their income and build confidence in selling premium offers.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              After years in high-ticket sales, I've learned what works — and more importantly, what doesn't. Now I'm on a mission to help other women skip the guesswork and build businesses they're proud of.
            </p>
            <a href="#signup" className="btn-gold-outline">
              Learn More About Me
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src={coachPhoto}
              alt="Kiona - High-Ticket Sales Coach"
              className="rounded-2xl shadow-xl max-w-sm w-full object-cover gold-border border-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
