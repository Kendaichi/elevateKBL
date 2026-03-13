import coachPhoto from "@/assets/coach-photo.jpg";
import useFadeIn from "@/hooks/useFadeIn";
import { Heart } from "lucide-react";

const AboutSection = () => {
  const ref = useFadeIn();

  return (
    <section id="about" className="py-24 bg-background">
      <div ref={ref} className="container mx-auto px-6 section-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-muted">
              <Heart size={14} className="gold-accent" />
              <span className="font-body text-xs font-semibold gold-accent uppercase tracking-wider">Hey there! 👋</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Kiona
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
              Hi, I'm Kiona! 😊 British expat, high-ticket sales coach, and your biggest cheerleader. I help women grow their income and build real confidence in selling premium offers — without feeling pushy or "salesy."
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
              After years in high-ticket sales, I've learned what works — and more importantly, what doesn't. Now I'm on a mission to help other women skip the guesswork and build businesses they're genuinely proud of. 💛
            </p>
            <p className="font-body text-sm text-foreground font-medium italic mb-8 pl-4 border-l-2 gold-border">
              "I believe every woman has the power to sell — she just needs the right support to unlock it."
            </p>
            <a href="#signup" className="btn-gold inline-flex items-center gap-2">
              Let's Work Together
              <span>✨</span>
            </a>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <img
                src={coachPhoto}
                alt="Kiona - High-Ticket Sales Coach"
                className="rounded-3xl shadow-2xl max-w-sm w-full object-cover gold-border border-2"
              />
              {/* Decorative blob */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20 -z-10" style={{ background: "linear-gradient(135deg, hsl(38,70%,55%), hsl(30,60%,45%))" }} />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-15 -z-10" style={{ background: "linear-gradient(135deg, hsl(38,70%,55%), hsl(30,60%,45%))" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
