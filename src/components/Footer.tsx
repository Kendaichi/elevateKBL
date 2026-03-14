import { Instagram, Facebook, Heart } from "lucide-react";
import { motion } from "framer-motion";

const TikTokIcon = ({ size = 22 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
);

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/elevatekbl/" },
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61583768171287",
  },
  { icon: TikTokIcon, href: "https://tiktok.com/@elevatekbl" },
];

const Footer = () => (
  <footer className="bg-primary py-16">
    <motion.div
      className="container mx-auto px-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-2">
        ElevateKBL
      </h3>
      <p className="font-body text-sm text-primary-foreground/70 mb-2">
        Built for Women Who Mean Business 💛
      </p>
      <p className="font-body text-xs text-primary-foreground/50 mb-8">
        You're one decision away from a completely different life.
      </p>
      <div className="flex justify-center gap-6 mb-8">
        {socials.map(({ icon: Icon, href }, i) => (
          <motion.a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/50 hover:text-primary-foreground hover:scale-110 transition-all duration-200"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
          >
            <Icon size={22} />
          </motion.a>
        ))}
      </div>
      <p className="font-body text-xs text-primary-foreground/40 inline-flex items-center gap-1">
        Made with <Heart size={12} className="gold-accent" /> ©{" "}
        {new Date().getFullYear()} ElevateKBL
      </p>
    </motion.div>
  </footer>
);

export default Footer;
