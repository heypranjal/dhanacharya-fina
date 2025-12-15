import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Heart, Target, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Careers = () => {
  const heroRef = useRef(null);
  const teamRef = useRef(null);
  const openingsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: false, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: false, margin: "-100px" });
  const openingsInView = useInView(openingsRef, { once: false, margin: "-100px" });

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16 sm:pb-20 bg-secondary relative overflow-hidden">
        {/* Background decorations */}
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
              <span className="text-primary">Careers</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-secondary-foreground/70"
            >
              We provide challenging opportunities to our employees.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* We Bet on People Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8"
            >
              <Heart className="w-10 h-10 text-primary" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              We bet on <span className="text-primary">people.</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              At Dhanacharya we don't hire qualifications, we hire an attitude
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Dhanacharya Section */}
      <section ref={teamRef} className="py-16 sm:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-3xl p-6 sm:p-10 border border-border/50 shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                  Team <span className="text-primary">Dhanacharya</span>
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed text-base sm:text-lg">
                  Our people are our biggest asset. We believe that they are the core of our organization. The success of an organization is based on talent, passion & integrity of its people. We take care to ensure that we provide them a platform where they can perform to the best of their ability, grow quickly and realize their true potential.
                </p>
              </div>

              {/* Values */}
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {[
                  { icon: Target, label: "Talent" },
                  { icon: Heart, label: "Passion" },
                  { icon: Users, label: "Integrity" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={teamInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 bg-muted/50 rounded-xl p-4"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              At Dhanacharya, the avenues are boundless for the right people with the right spirit. Apply right away with a right attitude!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section ref={openingsRef} className="py-16 sm:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={openingsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-4">
                Current <span className="text-primary">Openings</span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={openingsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-3xl p-8 sm:p-12 border border-border/50 shadow-xl text-center"
            >
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-muted-foreground" />
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground">
                We currently have no job openings.
              </p>
              <p className="text-sm text-muted-foreground/70 mt-4">
                Please check back later for new opportunities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Careers;
