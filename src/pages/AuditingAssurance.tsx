import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, FileCheck, TrendingUp, Check } from "lucide-react";
import Header from "@/components/Header";
import WhatsAppCommunity from "@/components/WhatsAppCommunity";
import Footer from "@/components/Footer";

const riskAdvisoryItems = [
  "Accounting & Reporting Advisory services",
  "Internal Audits",
  "Forensic Audits",
  "Internal Financial Controls Reporting",
  "International Regulatory & Compliance Requirement",
  "Financial & Operational review",
  "Third Party Attestation",
];

const regulatoryComplianceItems = [
  "GST Audit",
  "Tax Audit",
  "Compliance Audit",
  "Stock Audit",
  "CSR Audit",
];

const efficiencyItems = [
  "Employee benefit plan audit",
  "Operational Audit",
  "Payroll Audit",
  "Management Audit",
  "Retail Audit",
];

const AuditingAssurance = () => {
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
              Auditing & <span className="text-primary">Assurance</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section with Shield Visual */}
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
                  Auditing, Assurance & <span className="text-primary">Corporate Governance</span>
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <p className="leading-relaxed text-base sm:text-lg">
                    In a rapidly evolving business & regulatory environment, the right guidance is more important than ever.
                  </p>
                  <p className="leading-relaxed text-base sm:text-lg">
                    We draw on deep industry experience & global resources to help clients to navigate change, bolster investor confidence & strengthen the value of their businesses.
                  </p>
                </div>
              </motion.div>

              {/* Shield with Checkmark Visual */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={introInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                  <div className="relative w-48 h-56 flex items-center justify-center">
                    {/* Shield shape */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={introInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="absolute w-40 h-48 bg-primary/20 rounded-t-full"
                      style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={introInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="absolute w-32 h-40 bg-primary/40 rounded-t-full"
                      style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={introInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="absolute w-24 h-32 bg-primary rounded-t-full flex items-center justify-center"
                      style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                    >
                      <Check className="w-10 h-10 text-primary-foreground" />
                    </motion.div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">Protected & Compliant</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Efficiency Chart */}
      <section ref={servicesRef} className="py-16 sm:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Trending Bar Chart Visual */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="flex justify-center order-2 lg:order-1"
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                  <div className="flex items-end justify-center gap-2 h-48">
                    {[25, 40, 35, 55, 50, 70, 65, 85, 80, 100].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={servicesInView ? { height: `${height}%` } : {}}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                        className="w-6 sm:w-8 bg-primary/80 rounded-t-sm"
                      />
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">Efficiency Growth</p>
                </div>
              </motion.div>

              {/* Service Categories */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2 space-y-6"
              >
                {/* Risk Advisory */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-secondary-foreground">
                      1) Risk Advisory
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {riskAdvisoryItems.slice(0, 4).map((item, index) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-secondary-foreground text-xs rounded-full"
                      >
                        <Check className="w-3 h-3 text-primary" />
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Regulatory Compliances */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <FileCheck className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-secondary-foreground">
                      2) Regulatory Compliances
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {regulatoryComplianceItems.map((item, index) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-secondary-foreground text-xs rounded-full"
                      >
                        <Check className="w-3 h-3 text-primary" />
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Efficiency & Economy */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-secondary-foreground">
                      3) Efficiency & Economy
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {efficiencyItems.map((item, index) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={servicesInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-secondary-foreground text-xs rounded-full"
                      >
                        <Check className="w-3 h-3 text-primary" />
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppCommunity />
      <Footer />
    </main>
  );
};

export default AuditingAssurance;
