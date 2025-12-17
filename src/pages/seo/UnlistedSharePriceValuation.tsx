import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Calculator, BarChart3, Target, AlertTriangle, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const UnlistedSharePriceValuation = () => {
  const faqs = [
    {
      question: "How is unlisted share price determined?",
      answer: "Unlisted share price is determined through multiple factors: recent transaction prices in secondary markets, company's latest funding round valuations, discounted cash flow (DCF) analysis, comparable company multiples, book value, and demand-supply dynamics. Unlike listed shares with real-time pricing, unlisted prices are negotiated between buyers and sellers."
    },
    {
      question: "Where can I check unlisted share prices in India?",
      answer: "Unlisted share prices can be checked through: trusted intermediaries like Dhanacharya Advisors who track secondary market transactions, specialized unlisted share trading platforms, financial advisors with access to transaction data, and company announcements regarding funding rounds. There's no centralized exchange for real-time unlisted prices."
    },
    {
      question: "Why do unlisted share prices differ from IPO prices?",
      answer: "Pre-IPO prices are typically lower than IPO prices due to: illiquidity premium (discount for lack of easy exit), information asymmetry, market conditions at different times, IPO pricing strategy to ensure successful listing, and investor demand during book building. The gap represents potential gains for pre-IPO investors."
    },
    {
      question: "What is fair market value for unlisted shares?",
      answer: "Fair market value (FMV) for unlisted shares is typically determined using: Net Asset Value method (book value of assets minus liabilities), Discounted Cash Flow method (present value of future cash flows), or Comparable Company Method (multiples of similar listed companies). FMV is important for tax purposes and ESOP transactions."
    },
    {
      question: "How often do unlisted share prices change?",
      answer: "Unlisted share prices can change based on: new funding rounds (quarterly to annually), significant company announcements, financial performance updates, market sentiment shifts, and demand-supply changes in secondary markets. Major price movements typically follow funding rounds or material business developments."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Pre-IPO Investment Guide", url: "/pre-ipo-unlisted-shares-investment-india" },
    { name: "Unlisted Share Price & Valuation", url: "/unlisted-share-price-pre-ipo-valuation" }
  ];

  const valuationMethods = [
    {
      title: "Discounted Cash Flow (DCF)",
      description: "Projects future cash flows and discounts them to present value using appropriate discount rates. Best for companies with predictable cash flows.",
      pros: ["Fundamental approach", "Forward-looking", "Captures growth potential"],
      cons: ["Requires assumptions", "Sensitive to inputs", "Complex for early-stage companies"]
    },
    {
      title: "Comparable Company Analysis",
      description: "Values the company based on trading multiples (P/E, EV/EBITDA, P/S) of similar listed companies, adjusted for differences.",
      pros: ["Market-based", "Easy to understand", "Real-world benchmarks"],
      cons: ["Finding true comparables", "Market may be irrational", "Doesn't capture unique factors"]
    },
    {
      title: "Precedent Transaction Analysis",
      description: "Uses valuations from recent M&A deals or funding rounds in similar companies to derive value.",
      pros: ["Real transaction data", "Includes control premium", "Industry-specific"],
      cons: ["Limited data availability", "Market conditions vary", "Deal-specific terms"]
    },
    {
      title: "Net Asset Value (NAV)",
      description: "Calculates value based on book value of assets minus liabilities. Often used as floor valuation.",
      pros: ["Simple calculation", "Tangible basis", "Good for asset-heavy companies"],
      cons: ["Ignores intangibles", "Backward-looking", "Misses growth value"]
    }
  ];

  return (
    <>
      <SEOHead
        title="Unlisted Share Price & Pre-IPO Valuation Guide | Dhanacharya Advisors"
        description="Comprehensive guide to understanding unlisted share prices and pre-IPO valuation methods in India. Learn how unlisted shares are valued, pricing factors, and how to determine fair market value."
        canonicalUrl="/unlisted-share-price-pre-ipo-valuation"
        keywords="unlisted share price, unlisted price, share price, pre IPO price, pre-IPO valuation, fair market value unlisted shares, how to value unlisted shares, unlisted company valuation India"
        faqs={faqs}
        breadcrumbs={breadcrumbs}
        articleSchema={{
          headline: "Unlisted Share Price & Pre-IPO Valuation – Complete Guide",
          datePublished: "2024-03-01",
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
                <li className="text-primary">Unlisted Share Price & Valuation</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Unlisted Share Price & Pre-IPO Valuation
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Master the art of valuing unlisted companies. Understand pricing dynamics, valuation methodologies,
                and how to assess fair value for pre-IPO investments.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                Get Price Estimates <ArrowRight className="w-5 h-5" />
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
                  Understanding Unlisted Share Pricing
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong>Unlisted share price</strong> determination is fundamentally different from listed securities.
                  While listed stocks have transparent, real-time prices on exchanges, <strong>unlisted price</strong>
                  discovery happens through private negotiations, reference to recent transactions, and fundamental
                  valuation analysis.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  For investors looking to buy or <strong>sell unlisted shares</strong>, understanding how
                  <strong> pre-IPO valuation</strong> works is crucial. The <strong>share price</strong> you pay
                  (or receive) depends on multiple factors including company fundamentals, market conditions,
                  and the specific dynamics of the unlisted market.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Dhanacharya Advisors</strong> helps investors navigate <strong>unlisted share price</strong>
                  discovery by providing research-backed valuations, market insights, and transparent pricing for
                  <strong> pre-IPO shares</strong> across various sectors.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Price Discovery */}
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
                  How Unlisted Share Prices Are Discovered
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary mb-3">Secondary Market Transactions</h3>
                    <p className="text-muted-foreground text-sm">
                      Recent transaction prices in the OTC market serve as primary benchmarks. Higher trading
                      volumes provide more reliable price discovery.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary mb-3">Funding Round Valuations</h3>
                    <p className="text-muted-foreground text-sm">
                      Latest equity funding rounds establish company valuations. Series A, B, C rounds provide
                      institutional validation of share prices.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Calculator className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary mb-3">Fundamental Analysis</h3>
                    <p className="text-muted-foreground text-sm">
                      DCF models, comparable company analysis, and asset-based valuations provide intrinsic
                      value estimates independent of market transactions.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary mb-3">Demand-Supply Dynamics</h3>
                    <p className="text-muted-foreground text-sm">
                      Buyer interest versus seller availability influences prices. High-demand pre-IPO stocks
                      often trade at premiums due to limited supply.
                    </p>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-secondary mb-3">Key Price Influencers</h3>
                  <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" /> Company financial performance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" /> IPO timeline expectations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" /> Sector trends and outlook
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" /> Management credibility
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" /> Competitive positioning
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" /> Market sentiment
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Valuation Methods */}
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
                  Pre-IPO Valuation Methodologies
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Professional approaches to determining fair value for <strong>unlisted shares</strong>
                </p>
              </motion.div>

              <div className="space-y-6">
                {valuationMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-muted"
                  >
                    <h3 className="text-xl font-semibold text-secondary mb-3">{method.title}</h3>
                    <p className="text-muted-foreground mb-4">{method.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-green-700 mb-2">Advantages</h4>
                        <ul className="space-y-1">
                          {method.pros.map((pro, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" /> {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-amber-700 mb-2">Limitations</h4>
                        <ul className="space-y-1">
                          {method.cons.map((con, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <AlertTriangle className="w-4 h-4 text-amber-500" /> {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pre-IPO vs IPO Pricing Teaser */}
        <section className="py-16 lg:py-24 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                Pre-IPO Price vs IPO Price: Understanding the Gap
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                The difference between <strong>pre-IPO price</strong> and <strong>IPO price</strong> represents
                the potential return opportunity for early investors. Learn how this pricing gap is created
                and what factors influence post-listing performance.
              </p>
              <Link
                to="/pre-ipo-price-vs-ipo-price"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                Explore Price Comparison <ArrowRight className="w-5 h-5" />
              </Link>
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
                Get Expert Valuation Guidance
              </h2>
              <p className="text-muted-foreground mb-8">
                <strong>Dhanacharya Advisors</strong> provides comprehensive <strong>unlisted share price</strong>
                analysis and valuation insights. Make informed investment decisions with our expert guidance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  Get Price Estimates <ArrowRight className="w-5 h-5" />
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

export default UnlistedSharePriceValuation;
