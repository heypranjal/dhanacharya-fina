import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Partners from "@/components/Partners";
import { TestimonialsColumnsSection } from "@/components/ui/testimonials-columns-demo";
import Footer from "@/components/Footer";
import CommunityBanner from "@/components/CommunityBanner";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <CommunityBanner />
      <WhyChooseUs />
      <Partners />
      <TestimonialsColumnsSection />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;