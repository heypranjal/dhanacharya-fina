import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, BarChart3, Clock, Target } from "lucide-react";
import Header from "@/components/Header";
import WhatsAppCommunity from "@/components/WhatsAppCommunity";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PreIPOvsIPOPrice = () => {
  const faqs = [
    {
      question: "What is the typical difference between pre-IPO and IPO price?",
      answer: "The gap between pre-IPO and IPO prices varies significantly based on company performance, market conditions, and timing. Historically, successful pre-IPO investments have seen 20-100%+ appreciation at listing, though this is not guaranteed. Some IPOs may list below pre-IPO secondary market prices in adverse conditions."
    },
    {
      question: "Is pre-IPO price always lower than IPO price?",
      answer: "Not always. While pre-IPO prices are typically lower due to illiquidity discount, there are cases where IPO prices are lower than secondary market pre-IPO prices. This happens when: market conditions deteriorate between pre-IPO trading and listing, company underperforms, or pre-IPO prices were inflated due to excessive demand."
    },
    {
      question: "How is IPO price band determined?",
      answer: "IPO price band is determined by merchant bankers based on: company financials and growth projections, peer valuations and market multiples, demand from anchor investors, market conditions, and retail investor appetite. SEBI guidelines allow a maximum 20% gap between floor and cap price."
    },
    {
      question: "What happens to pre-IPO shares after IPO listing?",
      answer: "After IPO listing, pre-IPO shares convert to listed shares with the new ISIN. Lock-in periods may apply (typically 6-12 months for promoters, 3 months for pre-IPO investors in some cases). Post lock-in, shares can be sold freely on exchanges like any other listed stock."
    },
    {
      question: "Should I sell pre-IPO shares at IPO or hold longer?",
      answer: "The decision depends on: your investment thesis, listing performance expectations, lock-in restrictions, tax implications (STCG vs LTCG), and overall portfolio strategy. Some investors exit at listing for quick gains, while others hold for long-term appreciation. Consult advisors for personalized guidance."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Pre-IPO Investment Guide", url: "/pre-ipo-unlisted-shares-investment-india" },
    { name: "Pre-IPO Price vs IPO Price", url: "/pre-ipo-price-vs-ipo-price" }
  ];

  return (
    <>
      <SEOHead
        title="Pre-IPO Price vs IPO Price – Understanding the Gap | Dhanacharya Advisors"
        description="Compare pre-IPO prices with IPO prices. Learn how the pricing gap creates opportunities, factors affecting listing gains, and strategies for pre-IPO investors in India."
        canonicalUrl="/pre-ipo-price-vs-ipo-price"
        keywords="pre IPO price, IPO price, pre-IPO vs IPO, listing gains, pre-IPO returns, IPO pricing, unlisted share price, pre-IPO investment returns India"
        faqs={faqs}
        breadcrumbs={breadcrumbs}
        articleSchema={{
          headline: "Pre-IPO Price vs IPO Price – Understanding the Opportunity Gap",
          datePublished: "2024-03-15",
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
                <li className="text-primary">Pre-IPO Price vs IPO Price</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Pre-IPO Price vs IPO Price
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Understand the pricing dynamics between pre-IPO secondary market transactions and
                IPO listing prices. Learn how to maximize returns from the valuation gap.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                Explore Pre-IPO Opportunities <ArrowRight className="w-5 h-5" />
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
                  The Price Gap Opportunity
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  One of the primary attractions of <strong>pre-IPO investment</strong> is the potential
                  difference between the <strong>pre-IPO price</strong> you pay and the eventual
                  <strong> IPO price</strong> at which shares list on the exchange. This gap represents
                  the core return opportunity for early-stage investors.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Understanding why this gap exists, how it's created, and what factors influence its
                  magnitude is crucial for anyone looking to invest in <strong>unlisted shares</strong>
                  with the expectation of listing gains.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Dhanacharya Advisors</strong> helps investors analyze potential
                  <strong> pre-IPO</strong> opportunities by evaluating expected <strong>IPO price</strong>
                  scenarios and the risk-reward profile of each investment.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Price Comparison Visual */}
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
                  Pre-IPO vs IPO: Key Differences
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Pre-IPO Column */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-primary/20">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-secondary">Pre-IPO Price</h3>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">Typically <strong>lower valuation</strong> due to illiquidity premium</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">Determined by <strong>private negotiations</strong> and recent transactions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground"><strong>Limited price transparency</strong> in OTC markets</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">Early <strong>access to growth companies</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">Higher <strong>risk-reward ratio</strong></span>
                      </li>
                    </ul>
                  </div>

                  {/* IPO Column */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-secondary/20">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="text-xl font-semibold text-secondary">IPO Price</h3>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">Usually <strong>higher valuation</strong> reflecting liquidity premium</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">Set through <strong>book building</strong> process with institutional demand</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground"><strong>Transparent pricing</strong> with SEBI disclosures</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground"><strong>Immediate liquidity</strong> post-listing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">More <strong>regulated environment</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Factors Affecting Gap */}
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
                  Factors That Influence the Price Gap
                </h2>
                <p className="text-muted-foreground mb-8">
                  The difference between <strong>pre-IPO price</strong> and <strong>IPO price</strong>
                  is influenced by multiple factors:
                </p>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-secondary mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" /> Time to IPO
                    </h3>
                    <p className="text-muted-foreground">
                      The longer the gap between pre-IPO investment and IPO, the more value appreciation
                      can occur (or erosion in adverse scenarios). Companies with imminent IPO filings
                      typically have smaller price gaps.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-secondary mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" /> Company Growth Trajectory
                    </h3>
                    <p className="text-muted-foreground">
                      High-growth companies with improving financials between pre-IPO investment and
                      listing tend to see larger appreciation. Slowing growth or declining metrics can
                      compress the gap.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-secondary mb-3 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-primary" /> Market Conditions
                    </h3>
                    <p className="text-muted-foreground">
                      Bull markets typically result in higher IPO valuations and better listing gains.
                      Bear markets can lead to IPO pricing below pre-IPO secondary market levels.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-secondary mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" /> IPO Pricing Strategy
                    </h3>
                    <p className="text-muted-foreground">
                      Companies and merchant bankers may price IPOs conservatively for successful listing
                      (leaving gains for investors) or aggressively (maximizing company proceeds but
                      risking poor listing).
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Scenarios */}
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
                  Possible Scenarios for Pre-IPO Investors
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Positive Scenario */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                      <h3 className="font-semibold text-green-800">Positive Outcome</h3>
                    </div>
                    <p className="text-green-700 text-sm mb-4">
                      IPO lists at premium to issue price, and significantly above pre-IPO cost.
                    </p>
                    <ul className="text-green-700 text-sm space-y-2">
                      <li>• Strong market conditions</li>
                      <li>• Company outperforms expectations</li>
                      <li>• High investor demand</li>
                      <li>• Returns: 30-100%+</li>
                    </ul>
                  </div>

                  {/* Neutral Scenario */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-6 h-6 text-amber-600" />
                      <h3 className="font-semibold text-amber-800">Neutral Outcome</h3>
                    </div>
                    <p className="text-amber-700 text-sm mb-4">
                      IPO lists near issue price with modest gain over pre-IPO cost.
                    </p>
                    <ul className="text-amber-700 text-sm space-y-2">
                      <li>• Stable market conditions</li>
                      <li>• Company meets expectations</li>
                      <li>• Moderate investor interest</li>
                      <li>• Returns: 10-30%</li>
                    </ul>
                  </div>

                  {/* Negative Scenario */}
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingDown className="w-6 h-6 text-red-600" />
                      <h3 className="font-semibold text-red-800">Negative Outcome</h3>
                    </div>
                    <p className="text-red-700 text-sm mb-4">
                      IPO lists at discount or below pre-IPO purchase price.
                    </p>
                    <ul className="text-red-700 text-sm space-y-2">
                      <li>• Weak market conditions</li>
                      <li>• Company underperforms</li>
                      <li>• Low investor demand</li>
                      <li>• Returns: Negative to 0%</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">Investment Risk Disclaimer</h4>
                      <p className="text-amber-700 text-sm">
                        Past performance of pre-IPO investments does not guarantee future results. The
                        scenarios presented are illustrative. Actual returns depend on specific company
                        performance, market conditions, and timing. Always conduct thorough due diligence
                        and consult financial advisors before investing.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
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
        <section className="py-16 lg:py-24 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-heading font-bold mb-4">
                Maximize Your Pre-IPO Returns
              </h2>
              <p className="text-white/70 mb-8">
                <strong>Dhanacharya Advisors</strong> helps you identify pre-IPO opportunities with
                favorable risk-reward profiles. Get expert analysis on potential <strong>IPO price</strong>
                expectations and listing scenarios.
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
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all"
                >
                  View Opportunities
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <WhatsAppCommunity />
      <Footer />
    </>
  );
};

export default PreIPOvsIPOPrice;
