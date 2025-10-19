import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/kenzart-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logo} alt="KENZART" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 mb-4">
              L'art marocain à votre portée. Découvrez notre collection de tableaux personnalisables.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/nouveaute" className="text-primary-foreground/80 hover:text-accent transition-colors">Nouveautés</Link></li>
              <li><Link to="/format" className="text-primary-foreground/80 hover:text-accent transition-colors">Format</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">À Propos</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Thèmes Populaires</h3>
            <ul className="space-y-2">
              <li><Link to="/theme/maroc" className="text-primary-foreground/80 hover:text-accent transition-colors">Mon Maroc</Link></li>
              <li><Link to="/theme/islamic" className="text-primary-foreground/80 hover:text-accent transition-colors">Art Islamique</Link></li>
              <li><Link to="/theme/nature" className="text-primary-foreground/80 hover:text-accent transition-colors">Nature</Link></li>
              <li><Link to="/theme/bw" className="text-primary-foreground/80 hover:text-accent transition-colors">Black & White</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">Casablanca, Maroc</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span className="text-primary-foreground/80">+212 6XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span className="text-primary-foreground/80">contact@kenzart.ma</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 KENZART. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
