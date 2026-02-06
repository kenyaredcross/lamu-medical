import { Phone, Mail, MapPin, Heart } from "lucide-react";
import kenyaRedCrossLogo from "@/assets/kenya-red-cross-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={kenyaRedCrossLogo} 
                alt="Kenya Red Cross" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="font-display font-bold text-lg">Lamu Medical Centre</h3>
                <p className="text-sm text-primary-foreground/70">Rehabilitation & Mental Health</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 max-w-md mb-6">
              A partnership between Kenya Red Cross and Lamu County Government, 
              providing compassionate care for addiction recovery and mental wellness since 2019.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <Heart className="w-4 h-4 text-primary" />
              <span>Recovery is possible. Hope is here.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "About Us", href: "#about" },
                { label: "Innovation Lab", href: "#innovation" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:0703037067"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  0703 037 067
                </a>
              </li>
              <li>
                <a 
                  href="mailto:lamumedical@redcross.or.ke"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  lamumedical@redcross.or.ke
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>108-80500 Lamu, Hindi<br />(off Lamu-Malindi Road)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Lamu Medical Centre. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
            <span>SHA Accredited</span>
            <span>•</span>
            <span>NACADA Licensed</span>
            <span>•</span>
            <span>Kenya Red Cross Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;