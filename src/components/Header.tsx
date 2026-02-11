import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import kenyaRedCrossLogo from "@/assets/kenya-red-cross-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Innovation Lab", href: "https://iome.ke" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img 
              src={kenyaRedCrossLogo} 
              alt="Kenya Red Cross" 
              className="h-10 md:h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-foreground text-sm md:text-base leading-tight">
                Lamu Medical Centre
              </h1>
              <p className="text-xs text-muted-foreground">Rehabilitation & Mental Health</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Emergency Contact & CTA */}
          <div className="flex items-center gap-3">
            <a 
              href="tel:0703037067" 
              className="hidden md:flex items-center gap-2 text-primary font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>0703 037 067</span>
            </a>
            <Button variant="default" size="sm" className="hidden sm:inline-flex" asChild>
              <a href="#contact">Get Help</a>
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 px-4 pt-4 border-t border-border">
                <a 
                  href="tel:0703037067" 
                  className="flex items-center gap-2 text-primary font-semibold mb-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>0703 037 067</span>
                </a>
                <Button variant="default" className="w-full" asChild>
                  <a href="#contact">Get Help Now</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;