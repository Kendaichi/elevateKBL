import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import FloatingOrbs from "@/components/FloatingOrbs";

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
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <FloatingOrbs count={5} seed={4} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-semibold gold-accent uppercase tracking-widest mb-3">Real stories, real results</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Women Who Mean Business 💪
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Don't just take our word for it — hear from the women who are already crushing it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="card-elevated relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
