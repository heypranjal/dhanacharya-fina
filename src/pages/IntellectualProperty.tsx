import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Shield, FileText, Copyright } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Shield,
    title: "Trademark Filing",
    description: "A trademark is a unique symbol or word(s) used to represent a business or its products. Once registered, the same symbol or series of words cannot be used by any other organisation, forever, as long as it remains in use, proper paperwork is done and the required statutory dues are paid.",
  },
  {
    icon: FileText,
    title: "Trademark Objection",
    description: "Trademark objection is one of the initial stages in the trademark registration process where the trademark examiner objects to your application due to certain reasons.",
  },
  {
    icon: Copyright,
    title: "Copyright Filing",
    description: "A copyright is a formal declaration that the owner is the only one with the right to publish, reproduce, or sell a particular artistic work. The protection of a copyright is granted by the government, and covers original literary (writings), dramatic (stage and film) musical, artistic, and other creations.",
  },
];

const IntellectualProperty = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: false, margin: "-100px" });
  const aboutInView = useInView(aboutRef, { once: false, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: false, margin: "-100px" });

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16 sm:pb-20 bg-secondary relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6"
            >
              Intellectual <span className="text-primary">Property</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-secondary-foreground/70"
            >
              We provide best in class advice on business re
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About IP Section */}
      <section ref={aboutRef} className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              How to protect creations of <span className="text-primary">your mind?</span>
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed text-base sm:text-lg">
                Intellectual property (IP) is a product of human intellect i.e. a creation of a mind, such as inventions; literary and artistic works; designs; and symbols, names and images used in commerce.
              </p>
              <p className="leading-relaxed text-base sm:text-lg">
                Intellectual creations is protected in law by, for example, patents, copyright and trademarks, which enable people to earn recognition or financial benefit from what they invent or create. By striking the right balance between the interests of innovators and the wider public interest, the IP system aims to foster an environment in which creativity and innovation can flourish.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 bg-primary/10 rounded-2xl p-6 border border-primary/20"
            >
              <div className="flex items-center gap-4">
                <Lightbulb className="w-8 h-8 text-primary flex-shrink-0" />
                <p className="text-lg sm:text-xl font-semibold text-foreground">
                  Professional and Experienced Intellectual Property Right Attorneys
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section */}
      <section ref={servicesRef} className="py-16 sm:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
              Our experienced IPR attorneys provide specialist advice & assistance to clients & smoothens the complex process of registration of intellectual property in a professional manner.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-card rounded-2xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                >
                  <service.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default IntellectualProperty;
