import { motion } from "framer-motion";
import FloatingOrbs from "@/components/FloatingOrbs";

const cards = [
  {
    title: "Close High-Paying Clients",
    desc: "Learn how to confidently pitch, negotiate, and close premium deals — you've got this! 🎯",
    emoji: "💰",
  },
  {
    title: "A Community That Gets It",
    desc: "Connect with amazing women who lift each other up and celebrate every win together. 🥂",
    emoji: "👯‍♀️",
  },
  {
    title: "Skills That Last a Lifetime",
    desc: "Build real, transferable sales skills that keep paying you back — year after year. 📈",
    emoji: "🌟",
  },
  {
    title: "Guidance, Not Guesswork",
    desc: "No more Googling at 2am. Get step-by-step coaching that actually moves the needle. 🧭",
    emoji: "🗺️",
  },
];

const WhyJoinSection = () => {
  return (
    <section id="why-join" className="py-24 bg-muted relative overflow-hidden">
      <FloatingOrbs count={6} seed={3} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm font-semibold gold-accent uppercase tracking-widest mb-3">
            Why women love it here
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Join This Journey? 🚀
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Because you deserve more than just another course — you deserve a transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map(({ title, desc, emoji }, i) => (
            <motion.div
              key={title}
              className="card-elevated text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-4xl mb-4">{emoji}</div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">{title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
