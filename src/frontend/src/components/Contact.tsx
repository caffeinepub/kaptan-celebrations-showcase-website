import { useState } from 'react';
import { useSubmitContactForm } from '../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const submitContactForm = useSubmitContactForm();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await submitContactForm.mutateAsync(formData);
      toast.success('Thank you! We\'ll be in touch soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Contact our party planners for birthday cakes, party planning, and anniversary decoration
            </p>
            <p className="sr-only">
              Contact Kaptan Celebrations (Kaptan Groceries) for birthday cake orders, party planning services, anniversary decoration, and celebration inquiries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form for birthday cake orders, party planning, or decoration inquiries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 7973915670"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your birthday party, anniversary celebration, or cake requirements..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold/90 text-white"
                    disabled={submitContactForm.isPending}
                  >
                    {submitContactForm.isPending ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>

                {/* Request Quote Button */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3 text-center">
                    Need a detailed quote with design references?
                  </p>
                  <Button
                    onClick={() => scrollToSection('booking')}
                    variant="outline"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-white"
                  >
                    Request a Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <a 
                        href="mailto:kaptancelebrations@gmail.com"
                        className="text-muted-foreground hover:text-gold transition-colors"
                      >
                        kaptancelebrations@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <a 
                        href="tel:+917973915670"
                        className="text-muted-foreground hover:text-gold transition-colors"
                      >
                        +91 7973915670
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Studio</h3>
                      <p className="text-muted-foreground">
                        By appointment only
                        <br />
                        We come to you
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gold/5 rounded-lg p-6 border border-gold/20">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Consultation Hours:</strong>
                  <br />
                  Monday - Friday: 10:00 AM - 6:00 PM
                  <br />
                  Saturday: 11:00 AM - 4:00 PM
                  <br />
                  Sunday: By appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
