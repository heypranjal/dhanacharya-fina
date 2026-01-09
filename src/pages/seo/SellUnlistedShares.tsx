import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, TrendingUp, Clock, AlertTriangle, FileText, DollarSign, Building2 } from "lucide-react";
import Header from "@/components/Header";
import WhatsAppCommunity from "@/components/WhatsAppCommunity";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const SellUnlistedShares = () => {
  const faqs = [
    {
      question: "How can I sell my unlisted shares in India?",
      answer: "To sell unlisted shares in India: 1) Connect with a trusted intermediary like Dhanacharya Advisors, 2) Provide share details and desired selling price, 3) We match you with verified buyers, 4) Complete documentation including share transfer deed and DIS, 5) Receive payment through secure banking channels. The process typically takes 5-10 business days."
    },
    {
      question: "What documents are needed to sell unlisted shares?",
      answer: "Required documents include: Demat account statement showing share holdings, PAN card, Aadhaar card, cancelled cheque, signed Delivery Instruction Slip (DIS), share transfer deed (for physical shares), and proof of acquisition. All documents must be valid and self-attested."
    },
    {
      question: "How is the selling price determined for unlisted shares?",
      answer: "Unlisted share prices are determined through: recent transaction benchmarks, company valuation metrics, demand-supply dynamics, comparable listed company multiples, and upcoming IPO expectations. Dhanacharya Advisors provides fair market price guidance based on comprehensive analysis."
    },
    {
      question: "Can I sell ESOP shares before company IPO?",
      answer: "Yes, vested ESOP shares can typically be sold in the secondary market, subject to company's ESOP policy and any lock-in restrictions. Many companies allow secondary sales through approved platforms. Check your ESOP agreement for specific terms and restrictions."
    },
    {
      question: "What are the tax implications of selling unlisted shares?",
      answer: "Selling unlisted shares attracts capital gains tax. If held for more than 24 months, LTCG at 20% with indexation applies. For shorter holding periods, gains are added to income and taxed as per your slab. Post-IPO, different rules apply for listed securities."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Pre-IPO Investment Guide", url: "/pre-ipo-unlisted-shares-investment-india" },
    { name: "Sell Unlisted Shares", url: "/sell-unlisted-shares-india" }
  ];

  const sellingReasons = [
    {
      title: "Liquidity Needs",
      description: "Convert your unlisted holdings to cash when you need liquidity for personal or business purposes.",
      icon: DollarSign
    },
    {
      title: "Portfolio Rebalancing",
      description: "Adjust your investment portfolio by reducing exposure to unlisted assets and diversifying into other instruments.",
      icon: TrendingUp
    },
    {
      title: "ESOP Monetization",
      description: "Employees with vested ESOPs can monetize their holdings through secondary market sales.",
      icon: Building2
    },
    {
      title: "Exit Before IPO",
      description: "Take profits before IPO if you've achieved target returns or prefer certainty over IPO uncertainty.",
      icon: Clock
    }
  ];

  return (
    <>
      <SEOHead
        title="Sell Unlisted Shares in India – Complete Exit Guide | Dhanacharya Advisors"
        description="Learn how to sell unlisted shares in India. Complete guide covering the selling process, documentation, pricing, taxation, and finding trusted buyers for your pre-IPO holdings."
        canonicalUrl="/sell-unlisted-shares-india"
        keywords="sell unlisted shares, sell unlisted shares India, exit pre-IPO investment, sell ESOP shares, unlisted shares trading, sell pre-IPO shares, unlisted share price, capital gains unlisted shares"
        faqs={faqs}
        breadcrumbs={breadcrumbs}
        articleSchema={{
          headline: "How to Sell Unlisted Shares in India – Complete Exit Guide",
          datePublished: "2024-02-15",
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
                <li className="text-primary">Sell Unlisted Shares</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Sell Unlisted Shares in India
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Expert guidance on selling your pre-IPO holdings, ESOP shares, and unlisted equity.
                Get fair prices and seamless exit with trusted intermediaries.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                Sell Your Shares <ArrowRight className="w-5 h-5" />
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
                  How to Sell Unlisted Shares in India
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether you've invested in <strong>pre-IPO shares</strong>, hold vested <strong>ESOP shares</strong>,
                  or inherited unlisted equity, there comes a time when you may want to <strong>sell unlisted shares</strong>
                  to realize returns or meet liquidity needs. Unlike listed stocks that can be sold instantly on exchanges,
                  <strong> selling unlisted shares in India</strong> requires a different approach.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The <strong>unlisted shares trading</strong> market operates over-the-counter (OTC), where transactions
                  are facilitated by intermediaries who connect sellers with verified buyers. <strong>Dhanacharya Advisors</strong>
                  specializes in providing exit solutions for unlisted shareholders, ensuring you get competitive prices
                  and secure transactions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This comprehensive guide covers everything you need to know about selling your unlisted holdings –
                  from the process and documentation to pricing and tax implications.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Sell */}
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
                  Common Reasons to Sell Unlisted Shares
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Understanding when and why to exit your unlisted investments
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {sellingReasons.map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <reason.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Selling Process */}
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
                  Step-by-Step Process to Sell Unlisted Shares
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-6 bg-white rounded-xl p-6 shadow-sm border border-muted">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">Share Your Holdings Details</h3>
                      <p className="text-muted-foreground">
                        Contact Dhanacharya Advisors with details of your unlisted shares – company name, number of shares,
                        acquisition price, and holding period. We'll assess the current market demand.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 bg-white rounded-xl p-6 shadow-sm border border-muted">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">Get Price Quotation</h3>
                      <p className="text-muted-foreground">
                        We provide fair market price based on recent transactions, company fundamentals, and demand-supply.
                        You decide whether to proceed at the offered price.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 bg-white rounded-xl p-6 shadow-sm border border-muted">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">Complete Documentation</h3>
                      <p className="text-muted-foreground">
                        Submit required documents including demat statement, PAN, Aadhaar, and sign the Delivery Instruction Slip (DIS)
                        to initiate share transfer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 bg-white rounded-xl p-6 shadow-sm border border-muted">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">Share Transfer Execution</h3>
                      <p className="text-muted-foreground">
                        Shares are transferred from your demat account to the buyer through off-market transfer.
                        This typically takes 2-3 business days.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 bg-white rounded-xl p-6 shadow-sm border border-muted">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">Receive Payment</h3>
                      <p className="text-muted-foreground">
                        Upon successful transfer confirmation, payment is released to your bank account through
                        secure banking channels within 1-2 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Factors */}
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
                  Factors Affecting Unlisted Share Selling Price
                </h2>
                <p className="text-muted-foreground mb-8">
                  The price at which you can <strong>sell unlisted shares</strong> depends on multiple factors:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" /> Company Performance
                    </h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Revenue and profit growth trajectory</li>
                      <li>• Recent funding rounds and valuations</li>
                      <li>• Market position and competitive advantage</li>
                      <li>• Management quality and execution capability</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" /> IPO Expectations
                    </h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Likelihood and timeline of public listing</li>
                      <li>• Expected IPO valuation and pricing</li>
                      <li>• Market conditions for IPOs</li>
                      <li>• Regulatory approvals and SEBI filings</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" /> Demand & Supply
                    </h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Number of shares available in secondary market</li>
                      <li>• Investor interest and buying demand</li>
                      <li>• Recent transaction prices</li>
                      <li>• Lock-up expiries and ESOP vesting schedules</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" /> Market Conditions
                    </h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Overall equity market sentiment</li>
                      <li>• Sector-specific trends and outlook</li>
                      <li>• Comparable company valuations</li>
                      <li>• Interest rate environment</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Taxation */}
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
                  Tax Implications When Selling Unlisted Shares
                </h2>
                <p className="text-muted-foreground mb-8">
                  Understanding capital gains taxation is essential before you <strong>sell unlisted shares in India</strong>.
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
                    <thead className="bg-primary/10">
                      <tr>
                        <th className="text-left p-4 font-semibold text-secondary">Holding Period</th>
                        <th className="text-left p-4 font-semibold text-secondary">Tax Classification</th>
                        <th className="text-left p-4 font-semibold text-secondary">Tax Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-muted">
                      <tr>
                        <td className="p-4 text-muted-foreground">Less than 24 months</td>
                        <td className="p-4 text-muted-foreground">Short-Term Capital Gains</td>
                        <td className="p-4 text-muted-foreground">As per Income Tax Slab</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-muted-foreground">24 months or more</td>
                        <td className="p-4 text-muted-foreground">Long-Term Capital Gains</td>
                        <td className="p-4 text-muted-foreground">20% with Indexation benefit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">Important Tax Considerations</h4>
                      <ul className="text-amber-700 text-sm space-y-1">
                        <li>• Indexation benefit helps reduce LTCG tax liability by adjusting purchase price for inflation</li>
                        <li>• Fair Market Value rules apply if shares were acquired below market value</li>
                        <li>• Consult a tax advisor for personalized guidance on your specific situation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
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
                Looking to Sell Your Unlisted Shares?
              </h2>
              <p className="text-muted-foreground mb-8">
                <strong>Dhanacharya Advisors</strong> provides seamless exit solutions for unlisted shareholders.
                Get competitive prices and secure transactions with our expert team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  Get Price Quote <ArrowRight className="w-5 h-5" />
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

      <WhatsAppCommunity />
      <Footer />
    </>
  );
};

export default SellUnlistedShares;
