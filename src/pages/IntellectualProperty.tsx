import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Shield, FileText, Copyright, Lock } from "lucide-react";
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
              Protect your innovations and creative works
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About IP Section with Lightbulb Visual */}
      <section ref={aboutRef} className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                  How to protect creations of <span className="text-primary">your mind?</span>
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <p className="leading-relaxed text-base sm:text-lg">
                    Intellectual property (IP) is a product of human intellect i.e. a creation of a mind, such as inventions; literary and artistic works; designs; and symbols, names and images used in commerce.
                  </p>
                  <p className="leading-relaxed text-base sm:text-lg">
                    Intellectual creations is protected in law by, for example, patents, copyright and trademarks, which enable people to earn recognition or financial benefit from what they invent or create.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-8 bg-primary/10 rounded-2xl p-5 border border-primary/20"
                >
                  <div className="flex items-center gap-4">
                    <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-base sm:text-lg font-semibold text-foreground">
                      Professional and Experienced IPR Attorneys
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Lightbulb with Radiating Circles Visual */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    {/* Radiating circles */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={aboutInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="absolute w-48 h-48 rounded-full border-2 border-primary/20"
                    />
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={aboutInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="absolute w-36 h-36 rounded-full border-2 border-primary/30"
                    />
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={aboutInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="absolute w-24 h-24 rounded-full bg-primary/20"
                    />
                    {/* Lightbulb center */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={aboutInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                      className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center z-10"
                    >
                      <Lightbulb className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                    {/* Sparkle dots */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => {
                      const radian = (angle * Math.PI) / 180;
                      const x = 50 + 42 * Math.cos(radian);
                      const y = 50 + 42 * Math.sin(radian);
                      return (
                        <motion.div
                          key={angle}
                          initial={{ scale: 0 }}
                          animate={aboutInView ? { scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                          className="absolute w-2 h-2 bg-primary/60 rounded-full"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: "translate(-50%, -50%)",
                          }}
                        />
                      );
                    })}
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">Innovation Protection</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section with Shield Lock Visual */}
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

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-6 items-start">
              {/* Shield with Lock Visual */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-lg">
                  <div className="relative w-36 h-44 flex items-center justify-center">
                    {/* Shield outer */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={servicesInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="absolute w-32 h-40 bg-primary/20"
                      style={{ clipPath: "polygon(50% 0%, 100% 20%, 100% 70%, 50% 100%, 0% 70%, 0% 20%)" }}
                    />
                    {/* Shield middle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={servicesInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="absolute w-24 h-32 bg-primary/40"
                      style={{ clipPath: "polygon(50% 0%, 100% 20%, 100% 70%, 50% 100%, 0% 70%, 0% 20%)" }}
                    />
                    {/* Shield inner with lock */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={servicesInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="absolute w-16 h-24 bg-primary flex items-center justify-center"
                      style={{ clipPath: "polygon(50% 0%, 100% 20%, 100% 70%, 50% 100%, 0% 70%, 0% 20%)" }}
                    >
                      <Lock className="w-6 h-6 text-primary-foreground" />
                    </motion.div>
                  </div>
                  <p className="text-center text-xs text-muted-foreground mt-3">IP Protection</p>
                </div>
              </motion.div>

              {/* Service Cards */}
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-card rounded-2xl p-5 border border-border/50 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <service.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-xs">
                    {service.description.slice(0, 150)}...
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default IntellectualProperty;
