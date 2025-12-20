import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
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
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;