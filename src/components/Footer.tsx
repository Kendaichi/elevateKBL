import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary py-16">
    <div className="container mx-auto px-6 text-center">
      <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
        ElevateKBL
      </h3>
      <p className="font-body text-sm text-primary-foreground/70 mb-8">
        Built for Women Who Mean Business
      </p>
      <div className="flex justify-center gap-6 mb-8">
        <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Instagram">
          <Instagram size={22} />
        </a>
        <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Facebook">
          <Facebook size={22} />
        </a>
        <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Twitter">
          <Twitter size={22} />
        </a>
      </div>
      <p className="font-body text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} ElevateKBL. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
