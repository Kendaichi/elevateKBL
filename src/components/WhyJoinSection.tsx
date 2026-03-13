import { Target, Users, TrendingUp, Compass } from "lucide-react";
import useFadeIn from "@/hooks/useFadeIn";

const cards = [
  { icon: Target, title: "Close High-Paying Clients", desc: "Learn proven strategies to attract and close premium clients with confidence." },
  { icon: Users, title: "Community of Women", desc: "Get support from a powerful community of like-minded women entrepreneurs." },
  { icon: TrendingUp, title: "Long-Term Income Skills", desc: "Build skills that create sustainable, long-term income for your business." },
  { icon: Compass, title: "Guidance, Not Guesswork", desc: "Take action with clear direction and expert coaching every step of the way." },
];

const WhyJoinSection = () => {
  const ref = useFadeIn();

  return (
    <section id="why-join" className="py-24 bg-background">
      <div ref={ref} className="container mx-auto px-6 section-fade-in">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Why Join This Journey?
        </h2>
        <div className="w-16 h-1 mx-auto mb-16 rounded-full" style={{ background: "linear-gradient(90deg, hsl(38,70%,55%), hsl(30,60%,45%))" }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-elevated text-center">
              <div className="w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(38,70%,55%,0.15), hsl(30,60%,45%,0.15))" }}>
                <Icon size={28} className="gold-accent" />
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
