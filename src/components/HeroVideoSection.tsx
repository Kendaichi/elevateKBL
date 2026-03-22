/**
 * PLACEMENT 1 — Hero Video Section
 * Appears directly below the HeroSection component in Index.tsx
 * Usage: <HeroVideoSection /> after <HeroSection />
 */

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import FloatingOrbs from "@/components/FloatingOrbs";

const GOLD = "#BA7517";
const GOLD_LIGHT = "#EF9F27";

const VIDEO_ID = "sKmkwU9NTMg";
const EMBED_SRC = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&playsinline=1&rel=0&enablejsapi=1`;

export default function HeroVideoSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    if (!iframeRef.current?.contentWindow) return;
    const func = muted ? "unMute" : "mute";
    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "https://www.youtube.com"
    );
    setMuted((prev) => !prev);
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(22,38%,14%) 0%, hsl(28,50%,18%) 40%, hsl(35,55%,22%) 100%)",
        paddingTop: "4rem",
        paddingBottom: "5rem",
      }}
    >
      <FloatingOrbs count={5} seed={7} />

      {/* Ambient glow circles */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-120px",
          left: "-80px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 40% 40%, hsla(38,70%,55%,0.18), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-60px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 60% 60%, hsla(30,60%,45%,0.15), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="relative z-10 container mx-auto px-6"
        style={{ maxWidth: "960px" }}
      >
        {/* ── Headline ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2
            className="font-heading font-bold text-primary-foreground"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              lineHeight: 1.25,
              marginBottom: "1.25rem",
            }}
          >
            Your next chapter starts with one decision.
          </h2>

          {/* Animated flourish underline */}
          <div className="flex items-center justify-center gap-3" aria-hidden>
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
              style={{
                width: "80px",
                height: "1.5px",
                background: `linear-gradient(90deg, transparent, ${GOLD_LIGHT})`,
                transformOrigin: "right center",
              }}
            />
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
              style={{ color: GOLD_LIGHT, fontSize: "1.1rem" }}
            >
              ✦
            </motion.span>
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
              style={{
                width: "80px",
                height: "1.5px",
                background: `linear-gradient(90deg, ${GOLD_LIGHT}, transparent)`,
                transformOrigin: "left center",
              }}
            />
          </div>
        </motion.div>

        {/* ── Video container ── */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, delay: 0.1, ease: "easeOut" }}
          style={{ position: "relative" }}
        >
          {/* Golden glow halo */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: "-2px",
              borderRadius: "22px",
              background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD}, ${GOLD_LIGHT})`,
              filter: "blur(22px)",
              opacity: 0.45,
              zIndex: 0,
            }}
          />

          {/* Gradient border frame */}
          <div
            style={{
              position: "relative",
              padding: "3px",
              borderRadius: "20px",
              background: `linear-gradient(140deg, ${GOLD_LIGHT} 0%, ${GOLD} 50%, ${GOLD_LIGHT} 100%)`,
              boxShadow: `0 0 48px rgba(186,117,23,0.35), 0 20px 60px rgba(0,0,0,0.5)`,
              zIndex: 1,
            }}
          >
            {/* 16:9 iframe wrapper */}
            <div
              style={{
                position: "relative",
                borderRadius: "17px",
                overflow: "hidden",
                aspectRatio: "16 / 9",
                background: "#0a0605",
              }}
            >
              <iframe
                ref={iframeRef}
                src={EMBED_SRC}
                title="Kiona — Your next chapter"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                  display: "block",
                }}
              />

              {/* Subtle inner vignette */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%)",
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              />

              {/* Sound toggle button */}
              <motion.button
                onClick={toggleSound}
                whileHover={{
                  scale: 1.06,
                  boxShadow: `0 6px 28px rgba(186,117,23,0.7)`,
                }}
                whileTap={{ scale: 0.94 }}
                aria-label={muted ? "Unmute video" : "Mute video"}
                style={{
                  position: "absolute",
                  bottom: "14px",
                  right: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "9px 18px",
                  borderRadius: "50px",
                  background: GOLD,
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.02em",
                  boxShadow: `0 4px 20px rgba(186,117,23,0.55)`,
                  zIndex: 10,
                }}
              >
                {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                {muted ? "Tap to hear Kiona" : "Sound On"}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave back to cream */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ lineHeight: 0 }}
      >
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0,55 C280,95 580,10 880,55 C1080,82 1280,65 1440,50 L1440,90 L0,90 Z"
            fill="hsl(43,29%,95%)"
          />
        </svg>
      </div>
    </section>
  );
}
