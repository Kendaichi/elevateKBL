import { Quote, Star } from "lucide-react";
import useFadeIn from "@/hooks/useFadeIn";

const testimonials = [
  {
    quote: "Thanks to Kiona's coaching, I closed my first $3K client in just 2 weeks! I literally cried happy tears. 😭💛",
    name: "Amara T.",
    role: "Business Coach",
    stars: 5,
  },
  {
    quote: "I finally feel confident pricing my services. ElevateKBL changed everything for me — no more undercharging!",
    name: "Jessica M.",
    role: "Brand Strategist",
    stars: 5,
  },
  {
    quote: "The community alone is worth it. Having women who get it and hype you up? Priceless. 🙌",
    name: "Priya S.",
    role: "Consultant",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useFadeIn();

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div ref={ref} className="container mx-auto px-6 section-fade-in">
        <p className="font-body text-sm font-semibold text-center gold-accent uppercase tracking-widest mb-3">Real stories, real results</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Trusted by Women Who Mean Business 💪
        </h2>
        <p className="font-body text-center text-muted-foreground max-w-lg mx-auto mb-16">
          Don't just take our word for it — hear from the women who are already crushing it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="card-elevated relative">
              <Quote size={28} className="quote-icon mb-4 opacity-40" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={16} className="gold-accent fill-current" style={{ color: "hsl(38,70%,55%)" }} />
                ))}
              </div>
              <p className="font-body text-base text-foreground leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-body font-bold text-sm" style={{ background: "linear-gradient(135deg, hsl(38,70%,55%,0.2), hsl(30,60%,45%,0.2))" }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
