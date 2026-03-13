import { useState, FormEvent } from "react";
import useFadeIn from "@/hooks/useFadeIn";
import { toast } from "sonner";

const LeadCaptureForm = () => {
  const ref = useFadeIn();
  const [form, setForm] = useState({ name: "", email: "", phone: "", goals: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch soon.");
    setForm({ name: "", email: "", phone: "", goals: "" });
  };

  return (
    <section id="signup" className="py-24 bg-muted">
      <div ref={ref} className="container mx-auto px-6 section-fade-in max-w-2xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Ready to Take Action?
        </h2>
        <div className="w-16 h-1 mx-auto mb-12 rounded-full" style={{ background: "linear-gradient(90deg, hsl(38,70%,55%), hsl(30,60%,45%))" }} />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="font-body text-sm font-medium text-foreground mb-2 block">Full Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="font-body text-sm font-medium text-foreground mb-2 block">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="font-body text-sm font-medium text-foreground mb-2 block">Phone (optional)</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div>
            <label className="font-body text-sm font-medium text-foreground mb-2 block">Goals / What do you need help with?</label>
            <textarea
              value={form.goals}
              onChange={(e) => setForm({ ...form, goals: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
              placeholder="Tell us about your goals..."
            />
          </div>
          <button type="submit" className="btn-gold w-full text-base">
            Let's Get Started
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
