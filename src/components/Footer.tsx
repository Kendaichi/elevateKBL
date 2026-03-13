import { Instagram, Facebook, Twitter, Heart } from "lucide-react";
import { motion } from "framer-motion";

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
        {[Instagram, Facebook, Twitter].map((Icon, i) => (
          <motion.a
            key={i}
            href="#"
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
        Made with <Heart size={12} className="gold-accent" /> © {new Date().getFullYear()} ElevateKBL
      </p>
    </motion.div>
  </footer>
);

export default Footer;
