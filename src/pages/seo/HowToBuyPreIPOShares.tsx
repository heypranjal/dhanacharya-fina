import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, FileText, CreditCard, Shield, AlertTriangle, Building2, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const HowToBuyPreIPOShares = () => {
  const faqs = [
    {
      question: "How can I buy pre-IPO shares in India?",
      answer: "To buy pre-IPO shares in India, you need to: 1) Open a demat account with NSDL or CDSL, 2) Connect with a trusted pre-IPO investment advisor like Dhanacharya Advisors, 3) Complete KYC verification, 4) Select from available pre-IPO opportunities, 5) Transfer funds and receive shares in your demat account through off-market transfer."
    },
    {
      question: "What documents are required to buy unlisted shares?",
      answer: "Required documents include: PAN card, Aadhaar card, cancelled cheque or bank statement, demat account details (DP ID and Client ID), passport-size photographs, and income proof for high-value transactions. All documents must be self-attested for KYC compliance."
    },
    {
      question: "Is it safe to buy pre-IPO shares through intermediaries?",
      answer: "Buying through reputable and established intermediaries like Dhanacharya Advisors is safe. We ensure: verified seller credentials, authentic share certificates, proper documentation, secure payment processing, and transparent demat transfers. Always avoid unverified sources and conduct due diligence."
    },
    {
      question: "What is the minimum investment for pre-IPO shares?",
      answer: "Minimum investment varies by company, typically ranging from ₹50,000 to ₹25,00,000 depending on the share price and lot size. High-demand unicorn pre-IPO shares may have higher minimums. Contact Dhanacharya Advisors for current minimum investment requirements."
    },
    {
      question: "How long does it take to receive pre-IPO shares after purchase?",
      answer: "After payment confirmation and documentation completion, shares are typically transferred to your demat account within 3-7 business days through off-market transfer. The timeline may vary based on seller processing and company transfer procedures."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Pre-IPO Investment Guide", url: "/pre-ipo-unlisted-shares-investment-india" },
    { name: "How to Buy Pre-IPO Shares", url: "/how-to-buy-pre-ipo-shares-india" }
  ];

  const steps = [
    {
      number: 1,
      title: "Open a Demat Account",
      description: "Ensure you have an active demat account with NSDL or CDSL depository. This account will hold your unlisted shares in electronic form.",
      icon: FileText
    },
    {
      number: 2,
      title: "Complete KYC Verification",
      description: "Submit your PAN, Aadhaar, bank details, and other required documents for identity verification and compliance purposes.",
      icon: Shield
    },
    {
      number: 3,
      title: "Select Pre-IPO Opportunity",
      description: "Review available pre-IPO shares, analyze company fundamentals, growth prospects, and make an informed investment decision.",
      icon: Building2
    },
    {
      number: 4,
      title: "Make Payment",
      description: "Transfer funds through secure banking channels. Dhanacharya Advisors provides verified bank accounts for all transactions.",
      icon: CreditCard
    },
    {
      number: 5,
      title: "Receive Shares in Demat",
      description: "Shares are transferred to your demat account through off-market transfer within 3-7 business days with full documentation.",
      icon: CheckCircle
    }
  ];

  return (
    <>
      <SEOHead
        title="How to Buy Pre-IPO Shares in India – Step-by-Step Guide | Dhanacharya Advisors"
        description="Learn how to buy pre-IPO shares in India with our comprehensive guide. Understand the process of buying unlisted shares, required documents, demat transfer, and find trusted platforms for pre-IPO investment."
        canonicalUrl="/how-to-buy-pre-ipo-shares-india"
        keywords="how to buy pre-IPO shares in India, buy unlisted shares, unlisted shares trading, pre-IPO investment, trusted platform for unlisted shares, demat transfer unlisted shares, pre-IPO stock trading"
        faqs={faqs}
        breadcrumbs={breadcrumbs}
        articleSchema={{
          headline: "How to Buy Pre-IPO Shares in India – Complete Step-by-Step Guide",
          datePublished: "2024-02-01",
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
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm">
              <ol className="flex items-center space-x-2 text-white/60">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link to="/pre-ipo-unlisted-shares-investment-india" className="hover:text-primary transition-colors">Pre-IPO Guide</Link></li>
                <li>/</li>
                <li className="text-primary">How to Buy Pre-IPO Shares</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                How to Buy Pre-IPO Shares in India
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A comprehensive step-by-step guide to purchasing unlisted shares and pre-IPO equity through trusted platforms.
                Learn the complete process from documentation to demat transfer.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                Start Investing Today <ArrowRight className="w-5 h-5" />
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
                  Understanding How to Buy Unlisted Shares in India
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Investing in <strong>pre-IPO shares</strong> has become an increasingly popular strategy for investors seeking
                  early access to high-growth companies before they go public. If you're wondering <strong>how to buy pre-IPO
                  shares in India</strong>, this guide will walk you through the entire process, from finding opportunities
                  to holding shares in your demat account.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Unlike listed stocks that can be purchased through stock exchanges, <strong>buying unlisted shares</strong>
                  requires working with specialized intermediaries who connect buyers with sellers in the over-the-counter (OTC)
                  market. <strong>Unlisted shares trading</strong> involves direct transactions facilitated by trusted platforms
                  and advisors like <strong>Dhanacharya Advisors</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The process of <strong>pre-IPO stock trading</strong> may seem complex at first, but with the right guidance
                  and a <strong>trusted platform for unlisted shares</strong>, you can confidently build a portfolio of promising
                  pre-IPO investments that could deliver substantial returns upon listing.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Process */}
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
                  Step-by-Step Process to Buy Pre-IPO Shares
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Follow these five essential steps to successfully <strong>buy unlisted shares</strong> and add
                  <strong> pre-IPO investments</strong> to your portfolio
                </p>
              </motion.div>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-6 bg-white rounded-xl p-6 shadow-sm"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-primary">STEP {step.number}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-secondary mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Required */}
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
                  Documents Required to Buy Unlisted Shares
                </h2>
                <p className="text-muted-foreground mb-8">
                  To successfully complete your <strong>pre-IPO investment</strong> and ensure regulatory compliance,
                  you'll need to provide the following documents:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-muted">
                    <h3 className="text-lg font-semibold text-secondary mb-4">Identity Documents</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        PAN Card (mandatory)
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        Aadhaar Card
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        Passport-size photographs
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm border border-muted">
                    <h3 className="text-lg font-semibold text-secondary mb-4">Financial Documents</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        Cancelled cheque / Bank statement
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        Income proof (for large investments)
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        Demat account details (DP ID & Client ID)
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Demat Transfer Process */}
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
                  Understanding Demat Transfer for Unlisted Shares
                </h2>
                <p className="text-muted-foreground mb-6">
                  When you <strong>buy unlisted shares</strong>, the shares are transferred to your demat account through
                  an off-market transfer process. This is different from regular stock market transactions which happen
                  on exchanges.
                </p>

                <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
                  <h3 className="text-xl font-semibold text-secondary mb-4">Off-Market Transfer Process</h3>
                  <ol className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">1</span>
                      <span>Seller initiates Delivery Instruction Slip (DIS) from their demat account</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">2</span>
                      <span>Buyer provides DP ID and Client ID for receiving account</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">3</span>
                      <span>Depository processes the off-market transfer request</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">4</span>
                      <span>Shares credited to buyer's demat account within 3-7 business days</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">Important Note on ISIN</h4>
                      <p className="text-amber-700 text-sm">
                        Unlisted shares have a different ISIN (International Securities Identification Number) compared to
                        listed securities. After IPO, the company's ISIN changes, and your holdings automatically reflect
                        the listed ISIN.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Dhanacharya */}
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
                  Why Choose Dhanacharya Advisors for Pre-IPO Investment?
                </h2>
                <p className="text-muted-foreground mb-8">
                  As a <strong>trusted platform for unlisted shares</strong>, <strong>Dhanacharya Advisors</strong> offers
                  several advantages when you're looking to <strong>buy pre-IPO shares in India</strong>:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">Verified Transactions</h3>
                      <p className="text-muted-foreground text-sm">
                        Every seller and share certificate is thoroughly verified before transaction execution.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">Complete Documentation</h3>
                      <p className="text-muted-foreground text-sm">
                        We handle all paperwork including share transfer deeds, stamp duty, and demat transfer.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">Expert Advisory</h3>
                      <p className="text-muted-foreground text-sm">
                        Our team provides research-backed recommendations for the best pre-IPO opportunities.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">Regulatory Compliance</h3>
                      <p className="text-muted-foreground text-sm">
                        All transactions comply with Companies Act, 2013 and applicable tax regulations.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 lg:py-24 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                Related Pre-IPO Investment Guides
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Explore more resources to enhance your understanding of unlisted shares investment
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link
                to="/sell-unlisted-shares-india"
                className="bg-white/10 hover:bg-white/20 rounded-xl p-6 transition-all"
              >
                <h3 className="text-lg font-semibold mb-2">Sell Unlisted Shares</h3>
                <p className="text-white/60 text-sm mb-4">Learn how to exit your pre-IPO investments</p>
                <span className="text-primary text-sm font-medium">Read More →</span>
              </Link>
              <Link
                to="/unlisted-share-price-pre-ipo-valuation"
                className="bg-white/10 hover:bg-white/20 rounded-xl p-6 transition-all"
              >
                <h3 className="text-lg font-semibold mb-2">Pricing & Valuation</h3>
                <p className="text-white/60 text-sm mb-4">Understand how unlisted shares are priced</p>
                <span className="text-primary text-sm font-medium">Read More →</span>
              </Link>
              <Link
                to="/pre-ipo-unlisted-shares-investment-india"
                className="bg-white/10 hover:bg-white/20 rounded-xl p-6 transition-all"
              >
                <h3 className="text-lg font-semibold mb-2">Complete Guide</h3>
                <p className="text-white/60 text-sm mb-4">Comprehensive pre-IPO investment overview</p>
                <span className="text-primary text-sm font-medium">Read More →</span>
              </Link>
            </div>
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
                Ready to Buy Pre-IPO Shares?
              </h2>
              <p className="text-muted-foreground mb-8">
                Connect with <strong>Dhanacharya Advisors</strong> to explore the best <strong>pre-IPO investment</strong>
                opportunities in India. Our expert team will guide you through every step of the process.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/best-pre-ipo-opportunities-india"
                  className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-all"
                >
                  View Opportunities
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

export default HowToBuyPreIPOShares;
