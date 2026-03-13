import { useState, FormEvent } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import FloatingOrbs from "@/components/FloatingOrbs";

const LeadCaptureForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", goals: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("You're amazing! 🎉 We'll be in touch soon.");
    setForm({ name: "", email: "", phone: "", goals: "" });
  };

  return (
    <section id="signup" className="py-24 bg-muted relative overflow-hidden">
      <FloatingOrbs count={5} seed={5} />

      <motion.div
        className="container mx-auto px-6 max-w-2xl relative z-10 pointer-events-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <p className="text-4xl mb-4">🙋‍♀️</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Take Action?
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Drop your details below and let's start this journey together. No pressure, just good vibes. ✨
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 bg-card rounded-2xl p-8 shadow-lg border border-border">
          <div>
            <label className="font-body text-sm font-medium text-foreground mb-2 block">Your Name 😊</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
              placeholder="What should we call you?"
            />
          </div>
          <div>
            <label className="font-body text-sm font-medium text-foreground mb-2 block">Email ✉️</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="font-body text-sm font-medium text-foreground mb-2 block">Phone (optional) 📱</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div>
            <label className="font-body text-sm font-medium text-foreground mb-2 block">What are you working towards? 🎯</label>
            <textarea
              value={form.goals}
              onChange={(e) => setForm({ ...form, goals: e.target.value })}
              rows={4}
              className="w-full px-4 py-3.5 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
              placeholder="Tell us your big dreams..."
            />
          </div>
          <button type="submit" className="btn-gold w-full text-base inline-flex items-center justify-center gap-2 py-4">
            <Send size={18} />
            Let's Get Started!
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default LeadCaptureForm;
