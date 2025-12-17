import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, CheckCircle, Users, Award, FileCheck, Building2, Target, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PreIPOInvestmentAdvisory = () => {
  const faqs = [
    {
      question: "What is a pre-IPO investment advisory firm?",
      answer: "A pre-IPO investment advisory firm like Dhanacharya Advisors provides professional guidance for investing in unlisted shares. Services include: identifying promising pre-IPO opportunities, conducting due diligence, facilitating transactions, ensuring regulatory compliance, providing valuation analysis, and offering portfolio advisory for unlisted investments."
    },
    {
      question: "How do I find a trusted platform for unlisted shares in India?",
      answer: "Look for: established track record in unlisted share transactions, transparent fee structure, verified seller network, proper documentation processes, client testimonials, regulatory compliance, and professional advisory capabilities. Dhanacharya Advisors meets all these criteria as a trusted platform for pre-IPO investments."
    },
    {
      question: "Are pre-IPO advisors regulated by SEBI?",
      answer: "While unlisted share trading itself is not directly regulated by SEBI, investment advisors providing recommendations may need SEBI registration depending on the nature of advice. Dhanacharya Advisors operates in compliance with applicable regulations and provides transparent, compliant advisory services."
    },
    {
      question: "What should I expect from a capital market consultant for pre-IPO investments?",
      answer: "Quality capital market consultants provide: research-backed investment recommendations, thorough due diligence reports, risk assessment, valuation analysis, transaction facilitation, documentation support, tax guidance, and ongoing portfolio monitoring. They should have deep understanding of Indian capital markets."
    },
    {
      question: "How do pre-IPO investment firms ensure transaction safety?",
      answer: "Reputable firms ensure safety through: seller verification, share certificate authentication, escrow arrangements for payments, proper documentation (share transfer deeds, DIS), demat transfer confirmation, and complete transaction records. Dhanacharya Advisors follows stringent verification protocols."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Pre-IPO Investment Guide", url: "/pre-ipo-unlisted-shares-investment-india" },
    { name: "Pre-IPO Investment Advisory", url: "/pre-ipo-investment-advisory-india" }
  ];

  const services = [
    {
      title: "Pre-IPO Research & Analysis",
      description: "Comprehensive research on pre-IPO companies including financials, growth prospects, competitive positioning, and IPO potential.",
      icon: Target
    },
    {
      title: "Due Diligence",
      description: "Thorough verification of company credentials, share authenticity, and seller legitimacy before any transaction.",
      icon: FileCheck
    },
    {
      title: "Transaction Facilitation",
      description: "End-to-end support for buying and selling unlisted shares including documentation and demat transfers.",
      icon: Building2
    },
    {
      title: "Portfolio Advisory",
      description: "Strategic guidance on building a diversified pre-IPO portfolio aligned with your investment goals.",
      icon: Award
    },
    {
      title: "Regulatory Compliance",
      description: "Ensuring all transactions comply with Companies Act, tax regulations, and other applicable laws.",
      icon: Shield
    },
    {
      title: "Personalized Support",
      description: "Dedicated relationship managers for HNIs and institutions with tailored investment solutions.",
      icon: Users
    }
  ];

  return (
    <>
      <SEOHead
        title="Pre-IPO Investment Advisory India – Trusted Platform | Dhanacharya Advisors"
        description="Expert pre-IPO investment advisory services in India. Trusted platform for unlisted shares with SEBI-compliant guidance. Capital market consultants for HNIs and institutions."
        canonicalUrl="/pre-ipo-investment-advisory-india"
        keywords="pre-IPO investment advisory, trusted platform for unlisted shares, pre-IPO share market advisory, capital market consultants India, pre-IPO investment firm, SEBI registered advisor, pre-IPO specialists India"
        faqs={faqs}
        breadcrumbs={breadcrumbs}
        articleSchema={{
          headline: "Pre-IPO Investment Advisory Services in India",
          datePublished: "2024-04-01",
          dateModified: "2025-01-10",
          author: "Dhanacharya Advisors"
        }}
      />

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-navy via-navy-light to-primary/20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <nav className="mb-8 text-sm">
              <ol className="flex items-center space-x-2 text-white/60">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link to="/pre-ipo-unlisted-shares-investment-india" className="hover:text-primary transition-colors">Pre-IPO Guide</Link></li>
                <li>/</li>
                <li className="text-primary">Pre-IPO Investment Advisory</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Trusted Platform & Pre-IPO Investment Advisory in India
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Partner with experienced capital market consultants for expert guidance on pre-IPO investments.
                Access premium unlisted share opportunities with complete regulatory compliance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  Get Advisory <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+918285363331"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" /> Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-heading font-bold text-secondary mb-6">
                  Why You Need a Pre-IPO Investment Advisory Partner
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Navigating the <strong>pre-IPO investment</strong> landscape requires specialized expertise.
                  Unlike listed securities with transparent pricing and regulated exchanges, <strong>unlisted shares trading</strong>
                  involves complex due diligence, price negotiations, and compliance requirements that demand
                  professional guidance.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  As a <strong>trusted platform for unlisted shares</strong>, <strong>Dhanacharya Advisors</strong>
                  provides comprehensive <strong>pre-IPO share market advisory</strong> services tailored to
                  HNIs, family offices, and institutional investors. Our team of experienced <strong>capital
                  market consultants India</strong> brings deep expertise in pre-IPO valuations, opportunity
                  identification, and transaction execution.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're looking to build a diversified pre-IPO portfolio, explore specific opportunities,
                  or exit existing unlisted holdings, our <strong>pre-IPO investment firm</strong> offers the
                  expertise and infrastructure to help you achieve your investment objectives.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
                  Our Pre-IPO Advisory Services
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive support for your <strong>pre-IPO investment</strong> journey from research to execution
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-heading font-bold text-secondary mb-6">
                  Why Dhanacharya is Your Trusted Pre-IPO Partner
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">Experienced Team</h3>
                      <p className="text-muted-foreground">
                        Our advisors bring decades of experience in Indian capital markets, investment banking,
                        and private equity. We understand the nuances of <strong>pre-IPO investment</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">Verified Network</h3>
                      <p className="text-muted-foreground">
                        Access to a vetted network of sellers including ESOPs holders, early investors, and
                        institutional sellers ensures authentic, verified transactions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">Complete Compliance</h3>
                      <p className="text-muted-foreground">
                        All transactions are executed with full documentation, proper stamp duty, and compliance
                        with Companies Act and tax regulations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">Client-First Approach</h3>
                      <p className="text-muted-foreground">
                        We prioritize your investment goals with transparent fees, unbiased recommendations,
                        and dedicated support throughout your pre-IPO investment journey.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-16 lg:py-24 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-heading font-bold mb-8 text-center">
                Who We Serve
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">HNI Investors</h3>
                  <p className="text-white/70 text-sm">
                    High Net Worth Individuals seeking early access to promising companies and portfolio diversification.
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Family Offices</h3>
                  <p className="text-white/70 text-sm">
                    Multi-generational wealth managers looking for alternative investment opportunities in pre-IPO equity.
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Institutional Investors</h3>
                  <p className="text-white/70 text-sm">
                    Funds and institutions seeking bulk transactions and strategic investments in unlisted companies.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-heading font-bold text-secondary mb-8 text-center">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details
                      key={index}
                      className="bg-white rounded-xl shadow-sm group"
                    >
                      <summary className="p-6 cursor-pointer font-semibold text-secondary hover:text-primary transition-colors list-none flex items-center justify-between">
                        {faq.question}
                        <ArrowRight className="w-5 h-5 transform group-open:rotate-90 transition-transform" />
                      </summary>
                      <div className="px-6 pb-6 text-muted-foreground">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
                Start Your Pre-IPO Investment Journey
              </h2>
              <p className="text-muted-foreground mb-8">
                Connect with our <strong>capital market consultants</strong> to explore pre-IPO opportunities
                tailored to your investment profile. Get expert guidance from India's <strong>trusted platform
                for unlisted shares</strong>.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  Schedule Consultation <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/dhanacharya-advisors-pre-ipo-specialists"
                  className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-all"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PreIPOInvestmentAdvisory;
