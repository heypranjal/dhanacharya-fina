import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Building, Calendar, Receipt, ChevronRight, Check } from "lucide-react";
import Header from "@/components/Header";
import WhatsAppCommunity from "@/components/WhatsAppCommunity";
import Footer from "@/components/Footer";

const bookKeepingItems = [
  "Accounting & book keeping",
  "Income tax return filing",
  "TDS return filing",
];

const corporateComplianceItems = [
  "Admission or removal of director",
  "Increase authorised capital",
  "MOA amendment",
  "Share transfer",
  "Share Winding up of company",
  "Winding up of LLP",
];

const annualFilingsItems = [
  "Annual filings of company",
  "Annual filings of LLP",
  "Annual filings of all other registered entities",
];

const gstItems = [
  "GST registrations",
  "GST monthy & annually return filing",
  "GST advisory",
];

const processSteps = [
  { label: "Assessment", position: "top" },
  { label: "Planning", position: "right" },
  { label: "Execution", position: "bottom" },
  { label: "Review", position: "left" },
];

const RegulatoryCompliance = () => {
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
              Regulatory <span className="text-primary">Compliance</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-secondary-foreground/70"
            >
              We provide best in class advice on business related matters.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section with Calendar Visual */}
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
                  Our legal advisors provide businesses an efficient way of handling their <span className="text-primary">compliances</span>
                </h2>
                <div className="space-y-4">
                  {["Timely filings", "Expert guidance", "Complete documentation", "Regulatory updates"].map((item, index) => (
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

              {/* Calendar Visual with Quarterly Markers */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={introInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                  <div className="relative w-48 h-48">
                    {/* Calendar base */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={introInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="absolute inset-0 bg-primary/10 rounded-xl"
                    />
                    {/* Calendar header */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={introInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="absolute top-0 left-0 right-0 h-10 bg-primary rounded-t-xl"
                    />
                    {/* Calendar grid - quarters */}
                    <div className="absolute top-14 left-4 right-4 bottom-4 grid grid-cols-2 grid-rows-2 gap-2">
                      {["Q1", "Q2", "Q3", "Q4"].map((quarter, index) => (
                        <motion.div
                          key={quarter}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={introInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                          className="bg-primary/20 rounded-lg flex items-center justify-center"
                        >
                          <span className="text-sm font-bold text-primary">{quarter}</span>
                        </motion.div>
                      ))}
                    </div>
                    {/* Calendar rings */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={introInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="absolute -top-1 left-6 w-3 h-5 bg-primary/60 rounded-full"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={introInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.45 }}
                      className="absolute -top-1 right-6 w-3 h-5 bg-primary/60 rounded-full"
                    />
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">Quarterly Compliance</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Compliances Section with Process Visual */}
      <section ref={servicesRef} className="py-16 sm:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary-foreground">
              Corporate <span className="text-primary">Compliances</span>
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-6 items-start">
              {/* Circular Process Visual */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="flex justify-center lg:col-span-1"
              >
                <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-lg">
                  <div className="relative w-36 h-36">
                    {/* Outer circle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={servicesInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="absolute inset-0 rounded-full border-4 border-primary/30"
                    />
                    {/* Inner circle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={servicesInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="absolute inset-6 rounded-full bg-primary/20 flex items-center justify-center"
                    >
                      <span className="text-xs font-bold text-primary">4 Steps</span>
                    </motion.div>
                    {/* Step markers */}
                    {[0, 1, 2, 3].map((step) => {
                      const angle = (step * 90 - 90) * (Math.PI / 180);
                      const x = 50 + 45 * Math.cos(angle);
                      const y = 50 + 45 * Math.sin(angle);
                      return (
                        <motion.div
                          key={step}
                          initial={{ scale: 0 }}
                          animate={servicesInView ? { scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.5 + step * 0.1 }}
                          className="absolute w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <span className="text-xs font-bold text-primary-foreground">{step + 1}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                  <p className="text-center text-xs text-muted-foreground mt-3">Compliance Process</p>
                </div>
              </motion.div>

              {/* Service Cards Grid */}
              <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Book Keeping */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-2xl p-5 border border-border/50 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground mb-3">
                    01) Book Keeping
                  </h3>
                  <div className="space-y-2">
                    {bookKeepingItems.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <ChevronRight className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Corporate Compliance */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-card rounded-2xl p-5 border border-border/50 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground mb-3">
                    02) Corporate Compliance
                  </h3>
                  <div className="space-y-2">
                    {corporateComplianceItems.slice(0, 4).map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <ChevronRight className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Annual Filings */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-card rounded-2xl p-5 border border-border/50 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground mb-3">
                    03) Annual Filings
                  </h3>
                  <div className="space-y-2">
                    {annualFilingsItems.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <ChevronRight className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* GST */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-card rounded-2xl p-5 border border-border/50 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Receipt className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground mb-3">
                    04) GST
                  </h3>
                  <div className="space-y-2">
                    {gstItems.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <ChevronRight className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppCommunity />
      <Footer />
    </main>
  );
};

export default RegulatoryCompliance;
