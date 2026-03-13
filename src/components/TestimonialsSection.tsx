import { Quote } from "lucide-react";
import useFadeIn from "@/hooks/useFadeIn";

const testimonials = [
  {
    quote: "Thanks to Kiona's coaching, I closed my first $3K client in 2 weeks!",
    name: "Amara T.",
    role: "Business Coach",
  },
  {
    quote: "I finally feel confident pricing my services. ElevateKBL changed everything for me.",
    name: "Jessica M.",
    role: "Brand Strategist",
  },
  {
    quote: "The community alone is worth it. Having women who get it makes all the difference.",
    name: "Priya S.",
    role: "Consultant",
  },
];

const TestimonialsSection = () => {
  const ref = useFadeIn();

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div ref={ref} className="container mx-auto px-6 section-fade-in">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Trusted by Women Who Mean Business
        </h2>
        <div className="w-16 h-1 mx-auto mb-16 rounded-full" style={{ background: "linear-gradient(90deg, hsl(38,70%,55%), hsl(30,60%,45%))" }} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="card-elevated">
              <Quote size={32} className="quote-icon mb-4" />
              <p className="font-body text-base text-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-body font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
