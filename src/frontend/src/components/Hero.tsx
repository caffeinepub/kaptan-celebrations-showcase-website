import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/kaptan-hero-banner.dim_1200x600.png"
          alt="Kaptan Celebrations - Birthday cakes, party planners, anniversary decoration by Kaptan Groceries"
          title="Kaptan Celebrations (Kaptan Groceries) - Birthday Cakes & Party Planning Services"
          className="w-full h-full object-cover object-center"
        />
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight drop-shadow-2xl">
            Crafting Unforgettable
            <span className="block text-gold mt-2 drop-shadow-2xl">Celebrations</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Birthday cakes, party planners, and anniversary decoration for your most precious moments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="bg-gold hover:bg-gold/90 text-white px-8 py-6 text-lg group shadow-xl"
              aria-label="View Kaptan Celebrations birthday cakes and party decoration portfolio"
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-gold border-2 text-gold hover:bg-gold/20 bg-black/30 backdrop-blur-sm px-8 py-6 text-lg shadow-xl"
              aria-label="Contact Kaptan Celebrations party planners"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
