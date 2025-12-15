import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileCheck, Users, ChevronRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const startupRegistrationItems = [
  "MSME registration",
  "Startup India Certification",
  "IEC code",
  "Udyog AADHAR",
  "Digital Signature certificate",
  "GST registration",
];

const payrollComplianceItems = [
  "PF registration",
  "ESIC registration",
  "TDS registration",
  "Professional tax",
];

const RegistrationLicenses = () => {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const servicesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: false, margin: "-100px" });
  const introInView = useInView(introRef, { once: false, margin: "-100px" });
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
              Registration & <span className="text-primary">Licences</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-secondary-foreground/70"
            >
              We provide best in class registration services
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section with Certificate Visual */}
      <section ref={introRef} className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={introInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                  Our advisors make the registration process <span className="text-primary">hassle free</span>
                </h2>
                <div className="space-y-4">
                  {["Quick processing", "Expert assistance", "Complete compliance", "Timely updates"].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={introInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-6 h-6 rounded bg-primary flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </span>
                      <span className="text-sm sm:text-base font-medium text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Certificate Badge Visual */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={introInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                  <div className="relative w-48 h-56">
                    {/* Certificate paper */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={introInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="absolute inset-0 bg-primary/10 rounded-lg border-2 border-primary/30"
                    />
                    {/* Certificate header line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={introInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="absolute top-6 left-8 right-8 h-3 bg-primary/40 rounded"
                    />
                    {/* Certificate text lines */}
                    <div className="absolute top-14 left-6 right-6 space-y-2">
                      {[0.6, 0.8, 0.5, 0.7].map((width, index) => (
                        <motion.div
                          key={index}
                          initial={{ scaleX: 0 }}
                          animate={introInView ? { scaleX: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                          className="h-2 bg-primary/20 rounded origin-left"
                          style={{ width: `${width * 100}%` }}
                        />
                      ))}
                    </div>
                    {/* Badge/Seal */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={introInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                      className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-primary flex items-center justify-center"
                    >
                      <Check className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                    {/* Ribbon */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={introInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      className="absolute bottom-0 right-8 w-4 h-8 bg-primary/60"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={introInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.75 }}
                      className="absolute bottom-0 right-14 w-4 h-6 bg-primary/40"
                    />
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">Certified Registration</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Registered Section with Step Blocks */}
      <section ref={servicesRef} className="py-16 sm:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary-foreground">
              Get <span className="text-primary">Registered</span>
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Ascending Step Blocks Visual */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                  <div className="flex items-end justify-center gap-2 h-48">
                    {[1, 2, 3, 4, 5].map((step, index) => (
                      <motion.div
                        key={step}
                        initial={{ height: 0 }}
                        animate={servicesInView ? { height: `${20 + index * 20}%` } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="w-10 bg-primary rounded-t-sm flex items-end justify-center pb-2"
                      >
                        <span className="text-xs font-bold text-primary-foreground">{step}</span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">Registration Steps</p>
                </div>
              </motion.div>

              {/* Start-up & business registrations */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border/50 shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <FileCheck className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  01) Start-up & business registrations
                </h3>
                <div className="space-y-3">
                  {startupRegistrationItems.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Payroll Compliance */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl p-6 border border-border/50 shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  02) Payroll Compliance
                </h3>
                <div className="space-y-3">
                  {payrollComplianceItems.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RegistrationLicenses;
