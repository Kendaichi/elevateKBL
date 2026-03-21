import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import FloatingOrbs from "@/components/FloatingOrbs";
import { toast } from "sonner";
import {
  Send,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const INCOME_OPTIONS = ["$1k–3k", "$3k–5k", "$5k–10k", "$10k+"];
const COMMITMENT_OPTIONS = [
  "Just curious",
  "50/50, still figuring it out and a little nervous",
  "100% ready",
];

interface FormData {
  email: string;
  name: string;
  currentLife: string;
  motivation: string;
  incomeGoal: string;
  triedBefore: string;
  impactVision: string;
  commitment: string;
  contactMethod: string;
}

const INITIAL: FormData = {
  email: "",
  name: "",
  currentLife: "",
  motivation: "",
  incomeGoal: "",
  triedBefore: "",
  impactVision: "",
  commitment: "",
  contactMethod: "",
};

const SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;

const ElevateApplication = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (field: keyof FormData) => (val: string) =>
    setForm((f) => ({ ...f, [field]: val }));

  const steps = [
    // Step 0: Intro + basics
    <>
      <div className="space-y-5">
        <div>
          <label className="font-body text-sm font-medium text-foreground mb-2 block">
            Email *
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="font-body text-sm font-medium text-foreground mb-2 block">
            What's your name? *
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
            placeholder="Your first name"
          />
        </div>
      </div>
    </>,
    // Step 1: Current life + motivation
    <>
      <div className="space-y-5">
        <div>
          <label className="font-body text-sm font-medium text-foreground mb-2 block">
            What does life look like for you right now? *
          </label>
          <p className="text-xs text-muted-foreground mb-2">
            Work, family, goals, or anything you'd like to share.
          </p>
          <textarea
            required
            value={form.currentLife}
            onChange={(e) => set("currentLife")(e.target.value)}
            rows={3}
            className="w-full px-4 py-3.5 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
            placeholder="Tell us a bit about where you're at..."
          />
        </div>
        <div>
          <label className="font-body text-sm font-medium text-foreground mb-2 block">
            What's driving you to look for an online income stream right now? *
          </label>
          <textarea
            required
            value={form.motivation}
            onChange={(e) => set("motivation")(e.target.value)}
            rows={3}
            className="w-full px-4 py-3.5 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
            placeholder="What sparked your interest?"
          />
        </div>
      </div>
    </>,
    // Step 2: Income + experience
    <>
      <div className="space-y-5">
        <div>
          <label className="font-body text-sm font-medium text-foreground mb-2 block">
            How much would you ideally like to be making online per month? *
          </label>
          <div className="grid grid-cols-2 gap-3">
            {INCOME_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => set("incomeGoal")(opt)}
                className={`px-4 py-3 rounded-xl border-2 font-body text-sm font-medium transition-all duration-200 ${
                  form.incomeGoal === opt
                    ? "border-accent bg-accent/10 text-foreground scale-[1.02]"
                    : "border-border bg-background text-muted-foreground hover:border-accent/50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="font-body text-sm font-medium text-foreground mb-2 block">
            Have you tried anything before to make money online? *
          </label>
          <p className="text-xs text-muted-foreground mb-2">
            If yes, what have you tried?
          </p>
          <textarea
            required
            value={form.triedBefore}
            onChange={(e) => set("triedBefore")(e.target.value)}
            rows={3}
            className="w-full px-4 py-3.5 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
            placeholder="Courses, side hustles, freelancing... or brand new to this!"
          />
        </div>
      </div>
    </>,
    // Step 3: Vision + commitment + contact
    <>
      <div className="space-y-5">
        <div>
          <label className="font-body text-sm font-medium text-foreground mb-2 block">
            If you were making this income now, how would it impact your life? *
          </label>
          <textarea
            required
            value={form.impactVision}
            onChange={(e) => set("impactVision")(e.target.value)}
            rows={3}
            className="w-full px-4 py-3.5 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
            placeholder="Paint the picture — what changes for you?"
          />
        </div>
        <div>
          <label className="font-body text-sm font-medium text-foreground mb-2 block">
            How committed are you to creating this change in your life? *
          </label>
          <div className="space-y-2">
            {COMMITMENT_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => set("commitment")(opt)}
                className={`w-full text-left px-4 py-3 rounded-xl border-2 font-body text-sm transition-all duration-200 ${
                  form.commitment === opt
                    ? "border-accent bg-accent/10 text-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-accent/50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="font-body text-sm font-medium text-foreground mb-2 block">
            What's the best way to connect with you? *
          </label>
          <input
            type="text"
            required
            value={form.contactMethod}
            onChange={(e) => set("contactMethod")(e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
            placeholder="Instagram handle, email, or phone number"
          />
        </div>
      </div>
    </>,
  ];

  const canNext = () => {
    if (step === 0) return form.email.trim() && form.name.trim();
    if (step === 1) return form.currentLife.trim() && form.motivation.trim();
    if (step === 2) return form.incomeGoal && form.triedBefore.trim();
    if (step === 3)
      return (
        form.impactVision.trim() && form.commitment && form.contactMethod.trim()
      );
    return false;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (step < steps.length - 1) {
      if (canNext()) setStep(step + 1);
      return;
    }
    if (!canNext()) return;
    setLoading(true);
    try {
      await fetch(SHEET_URL, {
        method: "POST",
        body: JSON.stringify({
          form_type: "application",
          sheet_name: "elevateKBL",
          ...form,
        }),
      });
      setSubmitted(true);
      toast.success("Application submitted! 🎉 We'll be in touch soon.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="signup" className="py-24 bg-muted relative overflow-hidden">
        <FloatingOrbs count={5} seed={5} />
        <div className="container mx-auto px-6 max-w-2xl text-center relative z-10">
          <div className="bg-card rounded-2xl p-12 shadow-lg border border-border">
            <CheckCircle size={56} className="gold-accent mx-auto mb-6" />
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              You're In! 🎉
            </h2>
            <p className="font-body text-muted-foreground text-lg">
              Thanks for applying, {form.name}! We'll review your application
              and reach out soon. Get ready for amazing things! ✨
            </p>
          </div>
        </div>
      </section>
    );
  }

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <section id="signup" className="py-24 bg-muted relative overflow-hidden">
      <FloatingOrbs count={5} seed={5} />

      <motion.div
        className="container mx-auto px-6 max-w-2xl relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
            <Sparkles size={14} className="gold-accent" />
            <span className="font-body text-xs font-medium text-accent-foreground">
              Takes 2–3 minutes
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            ELEVATE Application ✨
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            This helps us understand your goals and see if ELEVATE is the right
            fit.
            <br />
            <span className="italic">No pressure. Just clarity.</span>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl p-8 shadow-lg border border-border"
        >
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="font-body text-xs text-muted-foreground">
                Step {step + 1} of {steps.length}
              </span>
              <span className="font-body text-xs text-muted-foreground">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(135deg, hsl(38,70%,55%), hsl(30,60%,45%))",
                }}
              />
            </div>
          </div>

          {/* Current step */}
          <div className="min-h-[280px]">{steps[step]}</div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={16} />
                Back
              </button>
            ) : (
              <div />
            )}

            <button
              type="submit"
              disabled={!canNext() || loading}
              className="btn-gold text-sm inline-flex items-center gap-2 py-3 disabled:opacity-40 disabled:hover:scale-100 disabled:hover:shadow-none"
            >
              {step < steps.length - 1 ? (
                <>
                  Next
                  <ArrowRight size={16} />
                </>
              ) : loading ? (
                "Submitting..."
              ) : (
                <>
                  <Send size={16} />
                  Submit Application
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ElevateApplication;
