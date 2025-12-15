import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Receipt, FileText, Scale, ChevronRight } from "lucide-react";
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
              Taxation <span className="text-primary">Advisory</span>
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
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 sm:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Regulatory Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-6 border border-border/50 shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Receipt className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                01) Regulatory Compliance
              </h3>
              <div className="space-y-2">
                {regulatoryComplianceItems.map((item, index) => (
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

            {/* Assessment Proceedings */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border/50 shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Scale className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                02) Assessment Proceedings
              </h3>
              <div className="space-y-2">
                {assessmentItems.map((item, index) => (
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

            {/* Reconciliations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 border border-border/50 shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                03) Reconciliations
              </h3>
              <div className="space-y-2">
                {reconciliationItems.map((item, index) => (
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

export default TaxationAdvisory;
