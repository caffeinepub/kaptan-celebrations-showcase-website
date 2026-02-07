import { Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/kaptan-logo-new-transparent.dim_200x200.png"
                alt="Kaptan Celebrations Logo - Kaptan Groceries"
                title="Kaptan Celebrations (Kaptan Groceries)"
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-serif font-bold text-gold">
                Kaptan Celebrations
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Crafting unforgettable celebrations with bespoke cakes and elegant décor
            </p>
            <p className="text-xs text-muted-foreground/70">
              Also known as: Kaptan Groceries
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Bespoke Cake Design</li>
              <li>Event Décor & Styling</li>
              <li>Full Celebration Design</li>
              <li>Consultation Services</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX className="h-5 w-5" />
              </a>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>
                <a href="tel:+917973915670" className="hover:text-gold transition-colors">
                  +91 7973915670
                </a>
              </p>
              <p>
                <a href="mailto:kaptancelebrations@gmail.com" className="hover:text-gold transition-colors">
                  kaptancelebrations@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            © {currentYear}. Built with{' '}
            <Heart className="h-4 w-4 text-gold fill-gold" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
