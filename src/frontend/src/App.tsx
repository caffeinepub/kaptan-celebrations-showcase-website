import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { BookingForm } from './components/BookingForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        {/* Enhanced Hidden SEO content with target keywords for search engines */}
        <div className="sr-only" aria-hidden="true">
          <h1>Kaptan Celebrations - Birthday Cakes, Party Planners, Anniversary Decoration Services</h1>
          <h2>Kaptan Celebrations and Kaptan Groceries - Expert Birthday Cake Design and Party Planning</h2>
          <p>
            Kaptan Celebrations, also known as Kaptan Groceries, is your premier destination for birthday cakes, 
            party planning, and anniversary decoration services. We specialize in custom birthday cakes, 
            celebration cakes, wedding cakes, and complete party planning for all occasions. Our expert party 
            planners create unforgettable birthdays, anniversaries, weddings, and special celebrations with 
            bespoke cake design and premium event decoration.
          </p>
          
          <h2>Birthday Cake Specialists - Custom Cakes for Every Celebration</h2>
          <p>
            Kaptan Celebrations (Kaptan Groceries) creates stunning birthday cakes for all ages. Our custom 
            birthday cake designs include themed cakes, character cakes, elegant celebration cakes, and 
            artistic cake creations. Every birthday cake is crafted with premium ingredients and decorated 
            with precision. From children's birthday cakes to milestone birthday celebrations, our cake 
            designers bring your vision to life. We offer birthday cakes in various flavors, sizes, and 
            designs to match your party theme perfectly.
          </p>
          
          <h2>Professional Party Planners - Complete Party Planning Services</h2>
          <p>
            Our party planners at Kaptan Celebrations (Kaptan Groceries) handle every detail of your 
            celebration. We provide comprehensive party planning services including birthday party planning, 
            anniversary party organization, wedding planning, and event coordination. Our party planning 
            services cover venue decoration, party décor setup, theme development, and complete event 
            styling. Trust our experienced party planners to create memorable celebrations with attention 
            to every detail from cake to decoration.
          </p>
          
          <h2>Anniversary Decoration and Anniversary Cakes</h2>
          <p>
            Celebrate your special milestone with Kaptan Celebrations' anniversary decoration services. 
            We design beautiful anniversary cakes and provide elegant anniversary party decoration. Our 
            anniversary services include custom anniversary cakes, romantic décor setups, anniversary 
            party planning, and complete venue decoration. Whether it's a first anniversary or golden 
            anniversary, our party planners create the perfect ambiance with stunning decoration and 
            delicious anniversary cakes.
          </p>
          
          <h2>Wedding Cakes and Wedding Party Planning</h2>
          <p>
            Kaptan Celebrations (Kaptan Groceries) specializes in wedding cakes and wedding party planning. 
            Our wedding cake designs range from classic elegant cakes to modern artistic creations. We offer 
            multi-tier wedding cakes, custom wedding cake flavors, and wedding cake decoration that matches 
            your wedding theme. Our party planners also provide complete wedding decoration services, 
            including venue styling, floral arrangements, and reception décor.
          </p>
          
          <h2>Party Decoration Services - Transform Your Celebration</h2>
          <p>
            Our party decoration services at Kaptan Celebrations include birthday party decoration, 
            anniversary decoration, wedding décor, baby shower decoration, and corporate event styling. 
            We create cohesive party themes with balloon decoration, floral arrangements, table settings, 
            backdrop designs, and complete venue transformation. Our decoration services complement our 
            custom cakes to create stunning celebrations that your guests will remember.
          </p>
          
          <h2>Custom Cake Design for All Occasions</h2>
          <p>
            Beyond birthday cakes and anniversary cakes, Kaptan Celebrations (Kaptan Groceries) creates 
            custom cakes for every occasion: graduation cakes, baby shower cakes, engagement cakes, 
            retirement cakes, corporate event cakes, and celebration cakes for any milestone. Our cake 
            designers work with you to create the perfect cake design with custom flavors, decorations, 
            and themes that match your party perfectly.
          </p>
          
          <h2>Why Choose Kaptan Celebrations for Your Birthday, Party, or Anniversary</h2>
          <p>
            Kaptan Celebrations and Kaptan Groceries combine expert cake design with professional party 
            planning. Our services include: custom birthday cakes, bespoke anniversary cakes, wedding 
            cakes, party planning, event decoration, venue styling, theme development, and complete 
            celebration coordination. We serve as your one-stop solution for cakes, party planning, and 
            decoration services. Our party planners ensure stress-free celebrations with beautiful cakes 
            and stunning decoration.
          </p>
          
          <h2>Contact Kaptan Celebrations - Birthday Cake Orders and Party Planning Inquiries</h2>
          <p>
            Contact Kaptan Celebrations (Kaptan Groceries) for birthday cake orders, party planning 
            consultations, anniversary decoration quotes, and celebration services. Phone: +91 7973915670 
            | Email: kaptancelebrations@gmail.com. Reach out to our party planners for custom cake design, 
            party decoration, and complete celebration planning. We serve all types of parties: birthdays, 
            anniversaries, weddings, baby showers, corporate events, and special celebrations.
          </p>
          
          <h2>Service Keywords: Cake, Birthday, Party, Anniversary, Decoration, Party Planners</h2>
          <p>
            Kaptan Celebrations (Kaptan Groceries) specializes in: birthday cake, birthday cakes, custom 
            birthday cake design, party planners, party planning services, birthday party planners, 
            anniversary cake, anniversary cakes, anniversary decoration, anniversary party planning, 
            party decoration, event decoration, celebration decoration, wedding cake, wedding cakes, 
            cake design, custom cakes, bespoke cakes, themed cakes, celebration cakes, party services, 
            event planning, party organizers, decoration services, venue decoration, party décor, 
            event styling, birthday celebration, anniversary celebration, party coordination, and 
            complete celebration design.
          </p>
        </div>
        
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <BookingForm />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
