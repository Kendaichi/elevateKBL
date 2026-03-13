import { motion } from "framer-motion";

interface Orb {
  size: number;
  x: string;
  y: string;
  duration: number;
  delay: number;
  opacity: number;
  moveX: number;
  moveY: number;
}

interface FloatingOrbsProps {
  count?: number;
  seed?: number; // different seed = different layout per section
}

// Deterministic "random" so orbs are consistent on every render
function seededRand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const FloatingOrbs = ({ count = 6, seed = 1 }: FloatingOrbsProps) => {
  const rand = seededRand(seed * 999);

  const orbs: Orb[] = Array.from({ length: count }, () => ({
    size: 80 + rand() * 160,
    x: `${rand() * 100}%`,
    y: `${rand() * 100}%`,
    duration: 8 + rand() * 10,
    delay: rand() * 4,
    opacity: 0.04 + rand() * 0.07,
    moveX: (rand() - 0.5) * 60,
    moveY: (rand() - 0.5) * 60,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle at 40% 40%, hsl(38,70%,60%), hsl(30,60%,40%))`,
            opacity: orb.opacity,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            x: [0, orb.moveX, 0],
            y: [0, orb.moveY, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;
