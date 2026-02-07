import { Cake, Palette, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Services() {
  const services = [
    {
      icon: Cake,
      title: 'Birthday Cake Design',
      description: 'Custom-designed birthday cakes and celebration cakes that are as delicious as they are beautiful. From elegant wedding cakes to whimsical birthday party cakes, each cake is crafted with premium ingredients and artistic precision by our expert cake designers.',
      features: [
        'Custom birthday cake flavors',
        'Themed birthday and party cakes',
        'Anniversary and celebration cakes',
        'Wedding cake design services',
      ],
    },
    {
      icon: Palette,
      title: 'Party Planning & Decoration',
      description: 'Transform your birthday party, anniversary celebration, or special event with our comprehensive party planning and decoration services. Our party planners create cohesive, stunning environments with beautiful décor that perfectly captures your vision and party theme.',
      features: [
        'Birthday party decoration',
        'Anniversary party planning',
        'Complete venue decoration',
        'Custom party themes and styling',
      ],
    },
    {
      icon: Sparkles,
      title: 'Full Celebration Services',
      description: 'Let our party planners handle every detail of your birthday, anniversary, or celebration. Our full-service package includes custom cake design, party decoration, and complete event coordination ensuring a seamless, stress-free celebration from concept to execution.',
      features: [
        'Complete party planning services',
        'Coordinated cake and decoration',
        'Birthday and anniversary packages',
        'Professional party coordination',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Birthday cakes, party planning, and decoration services for every celebration
            </p>
            <p className="sr-only">
              Kaptan Celebrations (Kaptan Groceries) offers birthday cake design, party planning services, anniversary decoration, and complete celebration coordination for birthdays, weddings, anniversaries, and special occasions
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-border hover:border-gold transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-gold" />
                  </div>
                  <CardTitle className="text-2xl font-serif">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-gold mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
