import { Target, Users, TrendingUp, Compass } from "lucide-react";
import useFadeIn from "@/hooks/useFadeIn";

const cards = [
  { icon: Target, title: "Close High-Paying Clients", desc: "Learn how to confidently pitch, negotiate, and close premium deals — you've got this! 🎯", emoji: "💰" },
  { icon: Users, title: "A Community That Gets It", desc: "Connect with amazing women who lift each other up and celebrate every win together. 🥂", emoji: "👯‍♀️" },
  { icon: TrendingUp, title: "Skills That Last a Lifetime", desc: "Build real, transferable sales skills that keep paying you back — year after year. 📈", emoji: "🌟" },
  { icon: Compass, title: "Guidance, Not Guesswork", desc: "No more Googling at 2am. Get step-by-step coaching that actually moves the needle. 🧭", emoji: "🗺️" },
];

const WhyJoinSection = () => {
  const ref = useFadeIn();

  return (
    <section id="why-join" className="py-24 bg-muted">
      <div ref={ref} className="container mx-auto px-6 section-fade-in">
        <p className="font-body text-sm font-semibold text-center gold-accent uppercase tracking-widest mb-3">Why women love it here</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Why Join This Journey? 🚀
        </h2>
        <p className="font-body text-center text-muted-foreground max-w-xl mx-auto mb-16">
          Because you deserve more than just another course — you deserve a transformation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map(({ icon: Icon, title, desc, emoji }, i) => (
            <div
              key={title}
              className="card-elevated text-center group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl mb-4">{emoji}</div>
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ background: "linear-gradient(135deg, hsl(38,70%,55%,0.2), hsl(30,60%,45%,0.2))" }}>
                <Icon size={26} className="gold-accent" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">{title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
