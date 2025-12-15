import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Receipt, Scale, FileText, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const regulatoryComplianceItems = [
  "Preparation & filing of TDS returns Monthly TDS Audit",
  "Generate FORM 16A & issue to the requestor",
  "Submission of FORM 15CA/CB certificate",
  "Preparation of FORM 34(a) for tax audit report",
  "TDS computation & payment- Challan preparation",
  "Income tax accounting",
  "Transaction Advisory service",
  "Transfer Pricing",
];

const assessmentItems = [
  "Representation before Appellate Authorities and Tribunals",
  "Representation before local tax authorities during the course of audit or investigation by the revenue authorities",
];

const reconciliationItems = [
  "Accruals the withholding on real time basis",
  "Real-time TDS validation of invoices",
];

const TaxationAdvisory = () => {
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
              Taxation <span className="text-primary">Advisory</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section with Currency Visual */}
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
                  Tax consultancy <span className="text-primary">service</span>
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <p className="leading-relaxed text-base sm:text-lg">
                    The changes in the tax and regulatory environment constantly challenge large and growing businesses, particularly those operating internationally.
                  </p>
                  <p className="leading-relaxed text-base sm:text-lg">
                    At Dhanacharya, we provide tax advisory and regulatory service in India and can help you minimize your tax exposure and highlight the risks presented by constantly evolving and increasingly complex legislation.
                  </p>
                  <p className="leading-relaxed text-base sm:text-lg">
                    Drawing on our knowledge and understanding of tax regimes in India and around the world, we offer timely information and independent advice.
                  </p>
                </div>
              </motion.div>

              {/* Nested Circles with ₹ Symbol Visual */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={introInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={introInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-primary/20 flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={introInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-primary/40 flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={introInView ? { scale: 1 } : {}}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center"
                        >
                          <span className="text-primary-foreground text-2xl sm:text-3xl font-bold">₹</span>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                    {/* Decorative elements */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={introInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary/60"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={introInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-primary/40"
                    />
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-6">Tax Optimization</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Document Stack Visual */}
      <section ref={servicesRef} className="py-16 sm:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Document Stack Visual */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="flex justify-center order-2 lg:order-1"
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                  <div className="relative w-48 h-56">
                    {/* Stacked documents with lines */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="absolute bottom-0 left-0 w-44 h-52 bg-primary/10 rounded-lg"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="absolute bottom-2 left-2 w-44 h-52 bg-primary/20 rounded-lg"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="absolute bottom-4 left-4 w-44 h-52 bg-primary/40 rounded-lg p-4"
                    >
                      {/* Document lines */}
                      <div className="space-y-3">
                        <div className="w-full h-2 bg-primary/60 rounded" />
                        <div className="w-3/4 h-2 bg-primary/60 rounded" />
                        <div className="w-full h-2 bg-primary/60 rounded" />
                        <div className="w-1/2 h-2 bg-primary/60 rounded" />
                        <div className="w-full h-2 bg-primary/60 rounded" />
                        <div className="w-2/3 h-2 bg-primary/60 rounded" />
                      </div>
                    </motion.div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">Tax Documents</p>
                </div>
              </motion.div>

              {/* Service Categories */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2 space-y-6"
              >
                {/* Regulatory Compliance */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Receipt className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-secondary-foreground">
                      01) Regulatory Compliance
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {regulatoryComplianceItems.slice(0, 5).map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-secondary-foreground/80">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Assessment Proceedings */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Scale className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-secondary-foreground">
                      02) Assessment Proceedings
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {assessmentItems.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-secondary-foreground/80">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Reconciliations */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-secondary-foreground">
                      03) Reconciliations
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {reconciliationItems.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-secondary-foreground/80">{item}</span>
                      </motion.div>
                    ))}
                  </div>
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

export default TaxationAdvisory;
