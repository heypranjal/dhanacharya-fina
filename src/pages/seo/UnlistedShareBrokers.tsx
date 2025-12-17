import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, CheckCircle, AlertTriangle, Users, Search, FileCheck, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const UnlistedShareBrokers = () => {
  const faqs = [
    {
      question: "How do I find reliable unlisted share brokers in India?",
      answer: "Look for brokers with: established track record, transparent pricing, verified seller networks, proper documentation processes, positive client reviews, and professional advisory capabilities. Dhanacharya Advisors is a trusted name in unlisted share trading with years of experience serving HNIs and institutions."
    },
    {
      question: "What is the difference between unlisted share brokers and stock brokers?",
      answer: "Stock brokers facilitate trading on recognized exchanges (NSE, BSE) under SEBI regulation. Unlisted share brokers operate in the OTC market, connecting buyers and sellers of pre-IPO and private company shares. Unlisted brokers require different expertise in valuation, due diligence, and off-market transfers."
    },
    {
      question: "What fees do unlisted share brokers charge?",
      answer: "Fee structures vary but typically include: brokerage (1-3% of transaction value), documentation charges, and sometimes advisory fees. Dhanacharya Advisors maintains transparent fee structures with no hidden charges. All fees are disclosed upfront before any transaction."
    },
    {
      question: "Are unlisted share brokers regulated in India?",
      answer: "The unlisted share market is not directly regulated like stock exchanges. However, transactions must comply with Companies Act, 2013, stamp duty laws, and tax regulations. Reputable brokers like Dhanacharya Advisors ensure full regulatory compliance in all transactions."
    },
    {
      question: "How do brokers verify authenticity of unlisted shares?",
      answer: "Professional brokers verify: seller identity and ownership, share certificate authenticity, demat holding statements, company's register of members, any encumbrances or pledges, and transaction history. This due diligence protects buyers from fraudulent transactions."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Pre-IPO Investment Guide", url: "/pre-ipo-unlisted-shares-investment-india" },
    { name: "Unlisted Share Brokers", url: "/unlisted-share-brokers-india" }
  ];

  const selectionCriteria = [
    {
      title: "Track Record",
      description: "Years of experience in unlisted share trading with verifiable transaction history",
      icon: TrendingUp
    },
    {
      title: "Transparency",
      description: "Clear fee structure, upfront pricing, and no hidden charges in transactions",
      icon: Search
    },
    {
      title: "Due Diligence",
      description: "Thorough verification processes for sellers, shares, and documentation",
      icon: FileCheck
    },
    {
      title: "Client Reviews",
      description: "Positive testimonials from HNIs, institutions, and repeat clients",
      icon: Users
    },
    {
      title: "Compliance",
      description: "Adherence to Companies Act, tax laws, and proper documentation standards",
      icon: Shield
    },
    {
      title: "Support",
      description: "Dedicated relationship management and post-transaction support",
      icon: CheckCircle
    }
  ];

  return (
    <>
      <SEOHead
        title="Unlisted Share Brokers in India – Trusted Pre-IPO Trading | Dhanacharya"
        description="Find trusted unlisted share brokers in India. Compare brokers, understand fee structures, and learn how to safely trade pre-IPO shares through verified intermediaries."
        canonicalUrl="/unlisted-share-brokers-india"
        keywords="unlisted share brokers in India, pre-IPO stock trading, unlisted shares trading, buy unlisted shares, sell unlisted shares, pre-IPO brokers India, trusted unlisted share platform"
        faqs={faqs}
        breadcrumbs={breadcrumbs}
        articleSchema={{
          headline: "Unlisted Share Brokers in India – Complete Guide",
          datePublished: "2024-04-15",
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
                <li className="text-primary">Unlisted Share Brokers</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Unlisted Share Brokers in India
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Your guide to finding trusted intermediaries for pre-IPO stock trading. Learn how to
                choose reliable brokers for safe unlisted shares transactions.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                Connect With Us <ArrowRight className="w-5 h-5" />
              </Link>
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
                  Role of Unlisted Share Brokers in Pre-IPO Trading
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong>Unlisted share brokers in India</strong> play a crucial role in connecting buyers
                  and sellers in the OTC (over-the-counter) market. Unlike stock exchanges where trades happen
                  electronically, <strong>pre-IPO stock trading</strong> requires intermediaries who can
                  facilitate private transactions between parties.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  As the market for <strong>unlisted shares trading</strong> has grown in India, so has the
                  number of brokers and platforms offering these services. However, not all brokers are
                  created equal – choosing a reliable partner is essential for safe and successful transactions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Dhanacharya Advisors</strong> stands out as a trusted name among <strong>unlisted
                  share brokers in India</strong>, with a proven track record of facilitating verified
                  transactions for HNIs, family offices, and institutional investors.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Brokers Do */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-heading font-bold text-secondary mb-6">
                  What Unlisted Share Brokers Do
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-secondary mb-3">Matchmaking</h3>
                    <p className="text-muted-foreground text-sm">
                      Connect buyers with sellers of unlisted shares, maintaining networks of ESOP holders,
                      early investors, and institutional sellers looking to exit.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-secondary mb-3">Price Discovery</h3>
                    <p className="text-muted-foreground text-sm">
                      Provide market intelligence on current trading prices, recent transactions, and
                      fair value estimates for unlisted shares.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-secondary mb-3">Due Diligence</h3>
                    <p className="text-muted-foreground text-sm">
                      Verify seller identity, share ownership, certificate authenticity, and ensure
                      shares are free from encumbrances.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-secondary mb-3">Documentation</h3>
                    <p className="text-muted-foreground text-sm">
                      Prepare and process share transfer deeds, delivery instruction slips (DIS),
                      and other required documentation.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-secondary mb-3">Transfer Execution</h3>
                    <p className="text-muted-foreground text-sm">
                      Coordinate off-market demat transfers, payment settlements, and post-transfer
                      verification.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-secondary mb-3">Advisory Services</h3>
                    <p className="text-muted-foreground text-sm">
                      Provide research, valuation analysis, and investment recommendations for
                      pre-IPO opportunities.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Selection Criteria */}
        <section className="py-16 lg:py-24">
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
                  How to Choose the Right Unlisted Share Broker
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Key criteria to evaluate when selecting an <strong>unlisted share broker in India</strong>
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectionCriteria.map((criteria, index) => (
                  <motion.div
                    key={criteria.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <criteria.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">{criteria.title}</h3>
                      <p className="text-muted-foreground text-sm">{criteria.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Red Flags */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-heading font-bold text-secondary mb-6">
                  Red Flags to Watch Out For
                </h2>
                <p className="text-muted-foreground mb-8">
                  Be cautious of brokers exhibiting these warning signs:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-red-800 mb-2">Unrealistic Promises</h3>
                        <p className="text-red-700 text-sm">
                          Guaranteed returns, "sure shot" IPO gains, or promises of specific listing prices.
                          No one can guarantee investment returns.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-red-800 mb-2">Pressure Tactics</h3>
                        <p className="text-red-700 text-sm">
                          Rushing you to invest immediately, creating artificial urgency, or not allowing
                          time for due diligence.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-red-800 mb-2">Hidden Fees</h3>
                        <p className="text-red-700 text-sm">
                          Unclear fee structures, surprise charges after transaction, or reluctance to
                          provide written fee breakdowns.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-red-800 mb-2">Poor Documentation</h3>
                        <p className="text-red-700 text-sm">
                          Reluctance to provide proper documentation, share transfer deeds, or written
                          transaction records.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Dhanacharya */}
        <section className="py-16 lg:py-24 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-heading font-bold mb-6">
                Why Choose Dhanacharya Advisors
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                As one of India's leading <strong>unlisted share brokers</strong>, we offer the reliability,
                expertise, and transparency that serious investors demand.
              </p>

              <div className="grid md:grid-cols-4 gap-6 text-left">
                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Verified Network</h4>
                  <p className="text-white/60 text-sm">Authenticated sellers and genuine share certificates</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Transparent Pricing</h4>
                  <p className="text-white/60 text-sm">Clear fees disclosed upfront, no hidden charges</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Expert Advisory</h4>
                  <p className="text-white/60 text-sm">Research-backed recommendations and valuation insights</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Secure Transactions</h4>
                  <p className="text-white/60 text-sm">Complete documentation and demat transfer support</p>
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
                Ready to Start Trading Unlisted Shares?
              </h2>
              <p className="text-muted-foreground mb-8">
                Partner with <strong>Dhanacharya Advisors</strong> for safe, transparent, and professional
                <strong> pre-IPO stock trading</strong> services.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/how-to-buy-pre-ipo-shares-india"
                  className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-all"
                >
                  How to Buy Pre-IPO
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

export default UnlistedShareBrokers;
