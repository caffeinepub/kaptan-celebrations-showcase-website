import { Sparkles, Heart, Award } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Sparkles,
      title: 'Artistry',
      description: 'Every birthday cake and party decoration is a unique work of art, meticulously crafted to reflect your vision and celebration style.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We pour our hearts into every cake design and party detail, ensuring your birthday, anniversary, or celebration is as special as the moment itself.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Premium quality cakes, professional party planning, and exceptional decoration services are at the core of everything we do.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              About Kaptan Celebrations
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted birthday cake specialists and party planners
            </p>
            <p className="sr-only">
              Learn about Kaptan Celebrations (Kaptan Groceries) - birthday cake experts, party planners, and anniversary decoration specialists committed to creating unforgettable celebrations
            </p>
          </div>

          {/* Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-semibold text-foreground">
                Our Story
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kaptan Celebrations was born from a passion for transforming ordinary birthdays, anniversaries, and parties into extraordinary memories. With years of experience in birthday cake design, party planning, and event decoration, we've dedicated ourselves to the art of celebration.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our approach combines traditional cake craftsmanship with contemporary party planning and decoration services, ensuring each birthday cake, anniversary celebration, or party is not only visually stunning but also a true reflection of your unique story and style.
              </p>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/cake-detail-work.dim_600x600.jpg"
                alt="Kaptan Celebrations detailed birthday cake work - custom cake design by Kaptan Groceries party planners"
                title="Kaptan Celebrations (Kaptan Groceries) - Birthday Cake Artistry and Party Decoration"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/20 rounded-lg -z-10" />
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-gold" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
