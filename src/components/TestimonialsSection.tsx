import { useCallback, useEffect, useState } from "react";
import {
  Heart,
  MessageCircle,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Star,
  TrendingUp,
  DollarSign,
  Quote,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import FloatingOrbs from "@/components/FloatingOrbs";
import client1 from "@/assets/testimonials/client1.webp";
import client2 from "@/assets/testimonials/client2.webp";
import client3 from "@/assets/testimonials/client3.webp";
import client4 from "@/assets/testimonials/client4.webp";
import client5 from "@/assets/testimonials/client5.webp";
import client6 from "@/assets/testimonials/client6.webp";
import client7 from "@/assets/testimonials/client7.webp";

const slides = [
  {
    src: client1,
    alt: "Client testimonial",
    badge: "$150K+ earned",
    badgeIcon: DollarSign,
    highlight: "6 months",
    caption: "From zero to six figures — this could be you 💛",
    accent: "hsl(38,70%,55%)",
    quote: "This completely changed my life. I went from struggling to pay bills to earning more than I ever imagined.",
  },
  {
    src: client2,
    alt: "Client testimonial",
    badge: "Top Performer",
    badgeIcon: TrendingUp,
    highlight: "First $10K month",
    caption: "Consistency + coaching = results 📈",
    accent: "hsl(30,60%,50%)",
    quote: "I never believed I could hit these numbers. Now it's my new normal.",
  },
  {
    src: client3,
    alt: "Client testimonial",
    badge: "Life Changed",
    badgeIcon: Heart,
    highlight: "Quit her 9-5",
    caption: "She bet on herself — and won 🙌",
    accent: "hsl(25,65%,48%)",
    quote: "Best decision I ever made was joining this community.",
  },
  {
    src: client4,
    alt: "Client testimonial",
    badge: "Confidence Unlocked",
    badgeIcon: Sparkles,
    highlight: "Closed first deal",
    caption: "From scared to unstoppable ✨",
    accent: "hsl(40,65%,52%)",
    quote: "I used to freeze on sales calls. Now I close with confidence.",
  },
  {
    src: client5,
    alt: "Client testimonial",
    badge: "6-Figure Club",
    badgeIcon: DollarSign,
    highlight: "12 months",
    caption: "A year that changed everything 💛",
    accent: "hsl(35,68%,50%)",
    quote: "The skills I learned here will pay me for the rest of my life.",
  },
  {
    src: client6,
    alt: "Client testimonial",
    badge: "Dream Client",
    badgeIcon: Star,
    highlight: "Highest-ever deal",
    caption: "She asked for more — and got it 💎",
    accent: "hsl(28,62%,48%)",
    quote: "I finally charged what I was worth. The clients showed up.",
  },
  {
    src: client7,
    alt: "Client testimonial",
    badge: "Growing Fast",
    badgeIcon: TrendingUp,
    highlight: "3x revenue",
    caption: "Tripled her income in 90 days 🚀",
    accent: "hsl(42,72%,54%)",
    quote: "I had no idea what was possible until I had the right support.",
  },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <FloatingOrbs count={5} seed={4} />
      {/* Floating decorative elements — hidden on mobile to reduce clutter */}
      <div className="hidden md:block absolute top-12 right-[15%] animate-[float_6s_ease-in-out_infinite]">
        <div className="w-20 h-20 rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(38,70%,55%), transparent)" }} />
      </div>
      <div className="hidden md:block absolute bottom-16 left-[10%] animate-[float_8s_ease-in-out_infinite_1s]">
        <div className="w-32 h-32 rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(30,60%,50%), transparent)" }} />
      </div>
      <div className="hidden md:block absolute top-1/2 left-[5%] opacity-15">
        <Sparkles className="w-10 h-10 gold-accent animate-pulse" />
      </div>
      <div className="hidden md:block absolute top-1/3 right-[8%] opacity-15">
        <Star className="w-8 h-8 gold-accent fill-current animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      <div className="hidden md:block absolute bottom-1/3 right-[20%] opacity-10">
        <Heart className="w-6 h-6 gold-accent fill-current animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Confetti dots — hidden on mobile */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="hidden md:block absolute w-2 h-2 rounded-full opacity-20 animate-pulse"
          style={{
            background: `hsl(${30 + i * 5}, 60%, 55%)`,
            top: `${15 + Math.sin(i) * 30}%`,
            left: `${10 + i * 11}%`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      <motion.div
        className="container mx-auto px-4 sm:px-6 relative z-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <MessageCircle size={18} className="gold-accent" />
          <p className="font-body text-xs sm:text-sm font-semibold text-center gold-accent uppercase tracking-widest">
            Real messages from real clients
          </p>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Trusted by Women Who Mean Business 💪
        </h2>
        <p className="font-body text-center text-muted-foreground max-w-xl mx-auto mb-10 md:mb-14 text-sm sm:text-base">
          These are actual messages from women who took action. No filters, no fluff — just real results.
        </p>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Nav buttons — desktop only, sits outside the card */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card border border-border/50 shadow-lg items-center justify-center hover:scale-110 transition-transform duration-200"
          >
            <ChevronLeft size={22} className="text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute -right-14 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card border border-border/50 shadow-lg items-center justify-center hover:scale-110 transition-transform duration-200"
          >
            <ChevronRight size={22} className="text-foreground" />
          </button>

          <div className="overflow-hidden rounded-2xl sm:rounded-3xl" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <div className="relative group">
                    <div className="relative bg-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-border/30">
                      {/* Top accent bar */}
                      <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${slide.accent}, hsl(38,70%,55%))` }} />

                      <div className="p-4 sm:p-6 md:p-8">
                        {/* Badge row */}
                        <div className="flex items-center flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-5">
                          <div
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-body font-semibold"
                            style={{ background: `${slide.accent}22`, color: slide.accent }}
                          >
                            <slide.badgeIcon size={14} />
                            {slide.badge}
                          </div>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={13} className="fill-current" style={{ color: slide.accent }} />
                            ))}
                          </div>
                        </div>

                        {/* Image with quote overlay */}
                        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl group/image">
                          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                            <div
                              className="relative"
                              style={{
                                filter: `drop-shadow(0 4px 8px rgba(0,0,0,0.3)) drop-shadow(0 0 20px ${slide.accent}40)`,
                                transform: "perspective(500px) rotateY(-15deg) rotateX(5deg)",
                              }}
                            >
                              <div
                                className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center"
                                style={{
                                  background: `linear-gradient(135deg, ${slide.accent}, hsl(38,70%,55%))`,
                                  boxShadow: `0 8px 32px ${slide.accent}50, inset 0 2px 4px rgba(255,255,255,0.3)`,
                                }}
                              >
                                <Quote className="w-5 h-5 sm:w-7 sm:h-7 text-white" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }} />
                              </div>
                              <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-50" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)" }} />
                            </div>
                          </div>

                          <img
                            src={slide.src}
                            alt={slide.alt}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover/image:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center gap-2 flex-wrap">
                            <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-body font-bold text-foreground flex items-center gap-1.5 shadow-lg">
                              <TrendingUp size={12} style={{ color: slide.accent }} />
                              {slide.highlight}
                            </div>
                            <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-body font-semibold text-muted-foreground shadow-lg flex items-center gap-1">
                              <Star size={11} className="fill-current text-yellow-500" />
                              Verified Result
                            </div>
                          </div>
                        </div>

                        {/* Caption */}
                        <div className="mt-4 sm:mt-5 space-y-2 sm:space-y-3">
                          <p className="font-body text-center text-foreground text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                            {slide.caption}
                          </p>
                          <p className="font-body text-center text-muted-foreground text-xs sm:text-sm italic leading-relaxed px-2 sm:px-4">
                            "{slide.quote}"
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl" style={{ background: `${slide.accent}15` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile nav buttons — below carousel */}
          <div className="flex md:hidden items-center justify-center gap-4 mt-5">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full bg-card border border-border/50 shadow-lg flex items-center justify-center active:scale-95 transition-transform duration-200"
            >
              <ChevronLeft size={20} className="text-foreground" />
            </button>
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button key={index} onClick={() => emblaApi?.scrollTo(index)} className="p-1">
                  <div
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: selectedIndex === index ? 24 : 8,
                      height: 8,
                      background: selectedIndex === index
                        ? "linear-gradient(90deg, hsl(38,70%,55%), hsl(30,60%,50%))"
                        : "hsl(38,70%,55%,0.25)",
                    }}
                  />
                </button>
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full bg-card border border-border/50 shadow-lg flex items-center justify-center active:scale-95 transition-transform duration-200"
            >
              <ChevronRight size={20} className="text-foreground" />
            </button>
          </div>

          {/* Desktop dots */}
          <div className="hidden md:flex items-center justify-center gap-3 mt-8">
            {slides.map((_, index) => (
              <button key={index} onClick={() => emblaApi?.scrollTo(index)} className="transition-all duration-300 p-1">
                <div
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: selectedIndex === index ? 32 : 10,
                    height: 10,
                    background: selectedIndex === index
                      ? "linear-gradient(90deg, hsl(38,70%,55%), hsl(30,60%,50%))"
                      : "hsl(38,70%,55%,0.25)",
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        <p className="font-body text-center text-muted-foreground mt-8 md:mt-10 text-sm">
          Your success story could be next 💛
        </p>
      </motion.div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
