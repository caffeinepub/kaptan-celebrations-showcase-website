import { useGetAllTestimonials } from '../hooks/useQueries';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const { data: testimonials, isLoading } = useGetAllTestimonials();

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Client Testimonials
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our delighted clients about their celebration experiences
            </p>
          </div>

          {/* Testimonials Grid */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-8">
                    <Skeleton className="h-24 w-full mb-4" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : testimonials && testimonials.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="border-border hover:border-gold transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-8">
                    <Quote className="h-10 w-10 text-gold/30 mb-4" />
                    <p className="text-muted-foreground leading-relaxed mb-6 italic">
                      "{testimonial.feedback}"
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-foreground">
                        {testimonial.clientName}
                      </p>
                      <p className="text-sm text-muted-foreground capitalize">
                        {testimonial.eventType}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No testimonials available yet. Be our first reviewer!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
