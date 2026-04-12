import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border mt-20">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-xl font-bold text-primary mb-3">KaarigariKart</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Celebrating Indian Artistry. A platform where art meets technology, and talent finds a voice.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-3 text-foreground">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/gallery", label: "Gallery" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-3 text-foreground">Our Promise</h4>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>✔️ Supporting artisans with fair opportunities</li>
            <li>✔️ Authentic, handmade products</li>
            <li>✔️ Preserving India's heritage</li>
            <li>✔️ Eco-friendly & sustainable crafts</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground text-sm">
        <p className="flex items-center justify-center gap-1">
          Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Yashoda Bhandari
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
