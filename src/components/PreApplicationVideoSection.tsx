/**
 * PLACEMENT 2 — Pre-Application Video Section
 * Appears between TestimonialsSection and ElevateApplication in Index.tsx
 * Usage: <PreApplicationVideoSection /> between <TestimonialsSection /> and <ElevateApplication />
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingOrbs from "@/components/FloatingOrbs";

const GOLD = "#BA7517";
const GOLD_LIGHT = "#EF9F27";
const CREAM = "#F5F0E8";
const TEXT_DARK = "#2C1A00";
const TEXT_MUTED = "#7A6040";

const VIDEO_ID = "uhUpYR7Ebp4";
// YouTube's highest-res thumbnail — used as the poster before play
const THUMBNAIL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
// Once play is clicked the iframe loads with autoplay
const EMBED_SRC = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&playsinline=1`;

export default function PreApplicationVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: CREAM,
        paddingTop: "5rem",
        paddingBottom: "0",
      }}
    >
      <FloatingOrbs count={6} seed={9} />

      {/* Ambient circles matching Meet Kiona / Why Join style */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-60px",
          right: "-100px",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 50% 50%, hsla(38,65%,72%,0.22), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "80px",
          left: "-60px",
          width: "340px",
          height: "340px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 50% 50%, hsla(30,60%,65%,0.18), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="relative z-10 container mx-auto px-6"
        style={{ maxWidth: "760px", paddingBottom: "4rem" }}
      >
        {/* ── Label pill ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-5"
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 18px",
              borderRadius: "50px",
              background: "hsla(38,70%,55%,0.12)",
              border: "1px solid hsla(38,70%,55%,0.3)",
              color: GOLD,
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
            }}
          >
            ✦ A message from Kiona
          </span>
        </motion.div>

        {/* ── Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-bold text-center"
          style={{
            color: TEXT_DARK,
            fontSize: "clamp(1.65rem, 3.5vw, 2.6rem)",
            lineHeight: 1.2,
            marginBottom: "1rem",
          }}
        >
          Ready to take the next step?
        </motion.h2>

        {/* ── Subtext ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="font-body text-center"
          style={{
            color: TEXT_MUTED,
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            lineHeight: 1.7,
            maxWidth: "520px",
            margin: "0 auto 2.5rem",
          }}
        >
          Watch this before you apply — Kiona will walk you through exactly what to expect.
        </motion.p>

        {/* ── Video container ── */}
        <motion.div
          initial={{ opacity: 0, y: 44, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          style={{ position: "relative" }}
        >
          {/* Golden glow halo */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: "-1px",
              borderRadius: "22px",
              background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD}, ${GOLD_LIGHT})`,
              filter: "blur(18px)",
              opacity: 0.28,
              zIndex: 0,
            }}
          />

          {/* Golden frame border */}
          <div
            style={{
              position: "relative",
              padding: "3px",
              borderRadius: "20px",
              background: `linear-gradient(140deg, ${GOLD_LIGHT} 0%, ${GOLD} 50%, ${GOLD_LIGHT} 100%)`,
              boxShadow: `0 8px 40px rgba(186,117,23,0.22), 0 2px 8px rgba(44,26,0,0.12)`,
              zIndex: 1,
            }}
          >
            {/* 16:9 inner area */}
            <div
              style={{
                position: "relative",
                borderRadius: "17px",
                overflow: "hidden",
                aspectRatio: "16 / 9",
                background: "#1a1008",
              }}
            >
              <AnimatePresence>
                {isPlaying ? (
                  /* ── Active: YouTube iframe ── */
                  <motion.iframe
                    key="iframe"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    src={EMBED_SRC}
                    title="A message from Kiona"
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
                ) : (
                  /* ── Idle: thumbnail + custom play button ── */
                  <motion.div
                    key="poster"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      cursor: "pointer",
                    }}
                    onClick={() => setIsPlaying(true)}
                  >
                    {/* Thumbnail */}
                    <img
                      src={THUMBNAIL}
                      alt="Video thumbnail"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />

                    {/* Dark scrim */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(26,16,8,0.38)",
                      }}
                    />

                    {/* Pulsing rings + play button */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* Ring 1 */}
                      <motion.div
                        aria-hidden
                        animate={{ scale: [1, 1.85], opacity: [0.55, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        style={{
                          position: "absolute",
                          width: "88px",
                          height: "88px",
                          borderRadius: "50%",
                          background: GOLD,
                        }}
                      />
                      {/* Ring 2 */}
                      <motion.div
                        aria-hidden
                        animate={{ scale: [1, 1.55], opacity: [0.4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                        style={{
                          position: "absolute",
                          width: "88px",
                          height: "88px",
                          borderRadius: "50%",
                          background: GOLD_LIGHT,
                        }}
                      />

                      {/* Play button */}
                      <motion.button
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.93 }}
                        aria-label="Play video"
                        style={{
                          position: "relative",
                          zIndex: 10,
                          width: "76px",
                          height: "76px",
                          borderRadius: "50%",
                          background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD})`,
                          border: "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: `0 8px 32px rgba(186,117,23,0.55), 0 2px 8px rgba(0,0,0,0.3)`,
                        }}
                      >
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="white"
                          style={{ marginLeft: "4px" }}
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom fade + wave into ElevateApplication (muted bg) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8 }}
        aria-hidden
        style={{
          position: "relative",
          height: "80px",
          background: `linear-gradient(180deg, ${CREAM} 0%, hsl(40,20%,90%) 100%)`,
        }}
      >
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}
        >
          <path
            d="M0,30 C360,75 720,5 1080,40 C1260,58 1360,48 1440,35 L1440,80 L0,80 Z"
            fill="hsl(40,20%,90%)"
          />
        </svg>
      </motion.div>
    </section>
  );
}
