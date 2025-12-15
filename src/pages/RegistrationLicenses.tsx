import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileCheck, Users, ChevronRight } from "lucide-react";
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
  const servicesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: false, margin: "-100px" });
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
              We provide best in
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Our advisors make the registration process <span className="text-primary">hassle free</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Get Registered Section */}
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

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Start-up & business registrations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
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
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Payroll Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border/50 shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                01) Payroll Compliance
              </h3>
              <div className="space-y-3">
                {payrollComplianceItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RegistrationLicenses;
