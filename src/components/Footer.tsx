import { Instagram, Facebook, Twitter, Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary py-16">
    <div className="container mx-auto px-6 text-center">
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
        <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground hover:scale-110 transition-all duration-200" aria-label="Instagram">
          <Instagram size={22} />
        </a>
        <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground hover:scale-110 transition-all duration-200" aria-label="Facebook">
          <Facebook size={22} />
        </a>
        <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground hover:scale-110 transition-all duration-200" aria-label="Twitter">
          <Twitter size={22} />
        </a>
      </div>
      <p className="font-body text-xs text-primary-foreground/40 inline-flex items-center gap-1">
        Made with <Heart size={12} className="gold-accent" /> © {new Date().getFullYear()} ElevateKBL
      </p>
    </div>
  </footer>
);

export default Footer;
