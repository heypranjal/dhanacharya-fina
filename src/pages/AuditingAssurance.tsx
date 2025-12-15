import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, AlertTriangle, FileCheck, TrendingUp, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
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
              Auditing & <span className="text-primary">Assurance</span>
            </motion.h1>
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
            className="max-w-4xl mx-auto"
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
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 sm:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Risk Advisory */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-6 border border-border/50 shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <AlertTriangle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                1) Risk Advisory
              </h3>
              <div className="space-y-2">
                {riskAdvisoryItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Regulatory Compliances */}
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
                2) Regulatory Compliances
              </h3>
              <div className="space-y-2">
                {regulatoryComplianceItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Efficiency & Economy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 border border-border/50 shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                3) Efficiency & Economy
              </h3>
              <div className="space-y-2">
                {efficiencyItems.map((item, index) => (
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AuditingAssurance;
