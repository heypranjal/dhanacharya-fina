import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Shield, Users, FileCheck, AlertTriangle, CheckCircle, Building2, Landmark, Scale } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PreIPOUnlistedSharesInvestment = () => {
  const faqs = [
    {
      question: "What are Pre-IPO shares and how are they different from listed shares?",
      answer: "Pre-IPO shares are equity shares of companies that have not yet been listed on stock exchanges like NSE or BSE. Unlike listed shares, pre-IPO shares are traded privately through intermediaries and cannot be bought/sold on exchanges. They offer early investment opportunities in promising companies before public listing, potentially at lower valuations."
    },
    {
      question: "Is it legal to buy unlisted shares in India?",
      answer: "Yes, it is completely legal to buy and sell unlisted shares in India. The transactions are governed by the Companies Act, 2013, and share transfers must be reported to the respective company's Registrar. However, these trades happen over-the-counter (OTC) as they are not available on stock exchanges."
    },
    {
      question: "What is the minimum investment required for pre-IPO shares?",
      answer: "The minimum investment varies by company and transaction. Typically, pre-IPO investments start from ₹50,000 to ₹1,00,000. However, for high-demand pre-IPO shares of unicorn startups, minimum investments can range from ₹5,00,000 to ₹25,00,000 depending on lot sizes and availability."
    },
    {
      question: "How are pre-IPO shares held and what about demat transfer?",
      answer: "Pre-IPO shares can be held in demat form with depositories like NSDL or CDSL. After purchase, shares are transferred to your demat account through off-market transfer. Dhanacharya Advisors facilitates seamless demat transfer of unlisted shares, ensuring secure and transparent transactions."
    },
    {
      question: "What are the risks of investing in unlisted shares?",
      answer: "Key risks include: limited liquidity (difficulty selling quickly), lack of price transparency, longer lock-in periods, company-specific risks, regulatory changes, and potential delays in IPO listing. It's important to invest through trusted advisors who conduct thorough due diligence."
    },
    {
      question: "How is taxation applied on pre-IPO share gains?",
      answer: "Gains from selling unlisted shares are taxed as capital gains. If held for more than 24 months, LTCG tax of 20% with indexation applies. For shorter holding periods, STCG is taxed as per your income tax slab. Post-IPO, the holding period and tax rules may differ for listed securities."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Pre-IPO & Unlisted Shares Investment", url: "/pre-ipo-unlisted-shares-investment-india" }
  ];

  const clusterPages = [
    {
      title: "How to Buy Pre-IPO Shares in India",
      url: "/how-to-buy-pre-ipo-shares-india",
      description: "Complete guide on buying unlisted shares through trusted platforms"
    },
    {
      title: "Sell Unlisted Shares in India",
      url: "/sell-unlisted-shares-india",
      description: "Learn the process of selling your unlisted equity holdings"
    },
    {
      title: "Unlisted Share Price & Valuation",
      url: "/unlisted-share-price-pre-ipo-valuation",
      description: "Understanding how unlisted shares are priced and valued"
    },
    {
      title: "Pre-IPO Price vs IPO Price",
      url: "/pre-ipo-price-vs-ipo-price",
      description: "Comparative analysis of pricing at different investment stages"
    },
    {
      title: "Pre-IPO Investment Advisory",
      url: "/pre-ipo-investment-advisory-india",
      description: "SEBI-compliant advisory services for pre-IPO investments"
    },
    {
      title: "Unlisted Share Brokers in India",
      url: "/unlisted-share-brokers-india",
      description: "Find trusted brokers for unlisted share trading"
    },
    {
      title: "Best Pre-IPO Opportunities",
      url: "/best-pre-ipo-opportunities-india",
      description: "Discover high-potential pre-IPO investment opportunities"
    },
    {
      title: "Invest in Unicorn Startups",
      url: "/invest-in-unicorn-startups-pre-ipo",
      description: "Early investment opportunities in billion-dollar startups"
    }
  ];

  return (
    <>
      <SEOHead
        title="Pre-IPO & Unlisted Shares Investment in India – Complete Guide | Dhanacharya Advisors"
        description="Comprehensive guide to investing in pre-IPO shares and unlisted equity in India. Learn how to buy unlisted shares, understand pricing, taxation, SEBI regulations, and find trusted pre-IPO investment advisors."
        canonicalUrl="/pre-ipo-unlisted-shares-investment-india"
        keywords="pre-IPO investment, pre-IPO shares, unlisted shares, unlisted equity investment, buy unlisted shares, pre-IPO stock trading, unlisted shares trading, invest in unlisted companies, best pre-IPO opportunities India, Dhanacharya Advisors"
        faqs={faqs}
        breadcrumbs={breadcrumbs}
        articleSchema={{
          headline: "Pre-IPO & Unlisted Shares Investment in India – Complete Guide",
          datePublished: "2024-01-15",
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
                <li className="text-primary">Pre-IPO & Unlisted Shares Investment</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Pre-IPO & Unlisted Shares Investment in India – Complete Guide
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Your comprehensive resource for understanding pre-IPO investments, buying unlisted shares,
                and building wealth through early-stage equity opportunities in India's most promising companies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  Start Investing <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/dhanacharya-advisors-pre-ipo-specialists"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
                >
                  Why Choose Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-heading font-bold text-secondary mb-6">
                  What is Pre-IPO Investment?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong>Pre-IPO investment</strong> refers to the purchase of shares in a company before it goes public through an Initial Public Offering (IPO).
                  These <strong>unlisted shares</strong> represent equity in private companies that are preparing for eventual listing on stock exchanges like NSE or BSE.
                  For investors seeking exceptional returns, <strong>pre-IPO shares</strong> offer a unique opportunity to participate in a company's growth story
                  at valuations significantly lower than post-IPO prices.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In India, the market for <strong>unlisted equity investment</strong> has grown substantially, driven by the emergence of unicorn startups,
                  fintech companies, and high-growth enterprises across sectors. Whether you're looking to <strong>buy unlisted shares</strong> of established
                  pre-IPO companies or <strong>invest in unlisted companies</strong> with disruptive potential, understanding the landscape is crucial for success.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Dhanacharya Advisors</strong> serves as your trusted partner in navigating the complex world of <strong>pre-IPO stock trading</strong>.
                  As experienced <strong>capital market consultants India</strong>, we provide comprehensive advisory services, ensuring you access the
                  <strong> best pre-IPO opportunities India</strong> has to offer while maintaining full regulatory compliance.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Understanding Unlisted Shares */}
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
                  Understanding Unlisted Shares and Pre-IPO Markets
                </h2>

                <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
                  <h3 className="text-xl font-semibold text-secondary mb-4 flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-primary" />
                    Types of Unlisted Securities
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Unlisted shares</strong> encompass a wide range of securities not traded on recognized stock exchanges:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Pre-IPO Shares:</strong> Equity of companies actively preparing for public listing, typically within 12-36 months</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Private Company Shares:</strong> Stakes in privately-held businesses with no immediate IPO plans</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Startup Equity:</strong> Early-stage investments in emerging companies, often through ESOPs or secondary sales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>Delisted Shares:</strong> Shares of companies that were previously listed but have been removed from exchanges</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-secondary mb-4 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    How Pre-IPO Trading Works in India
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Unlisted shares trading</strong> operates through over-the-counter (OTC) markets, where transactions occur directly between
                    buyers and sellers facilitated by intermediaries like <strong>unlisted share brokers in India</strong>. The process involves:
                  </p>
                  <ol className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">1</span>
                      <span><strong>Price Discovery:</strong> Unlike listed markets, <strong>unlisted share price</strong> is determined through negotiation,
                      recent transaction benchmarks, and fundamental valuation analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">2</span>
                      <span><strong>Counterparty Matching:</strong> <strong>Pre-IPO investment firms</strong> connect buyers with sellers, often employees
                      or early investors looking to liquidate holdings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">3</span>
                      <span><strong>Due Diligence:</strong> Verification of share authenticity, seller credentials, and company fundamentals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold flex-shrink-0">4</span>
                      <span><strong>Transfer Execution:</strong> Shares are transferred via demat or physical mode with proper documentation</span>
                    </li>
                  </ol>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Invest in Pre-IPO */}
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
                  Why Invest in Pre-IPO Shares? Key Benefits
                </h2>
                <p className="text-muted-foreground mb-8">
                  <strong>Pre-IPO investment</strong> has emerged as a preferred strategy for High Net Worth Individuals (HNIs) and institutional investors
                  seeking <strong>unlisted shares with high returns</strong>. Here's why savvy investors are increasingly allocating capital to
                  <strong> pre-IPO opportunities</strong>:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-secondary mb-3">Early-Stage Pricing Advantage</h3>
                    <p className="text-muted-foreground text-sm">
                      Access shares at <strong>pre-IPO prices</strong> significantly lower than eventual <strong>IPO prices</strong>,
                      capturing the valuation gap as companies grow and prepare for listing.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-secondary mb-3">Portfolio Diversification</h3>
                    <p className="text-muted-foreground text-sm">
                      <strong>Invest in unlisted companies</strong> across sectors not adequately represented in public markets,
                      reducing correlation with traditional equity holdings.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-secondary mb-3">Access to High-Growth Companies</h3>
                    <p className="text-muted-foreground text-sm">
                      <strong>Invest in unicorn startups before IPO</strong> and participate in the growth stories of India's
                      next generation of market leaders.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-secondary mb-3">Wealth Creation Potential</h3>
                    <p className="text-muted-foreground text-sm">
                      Historical data shows significant returns when companies successfully list, with some pre-IPO
                      investments generating 2x-10x returns post-listing.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-2">Important Disclaimer</h4>
                      <p className="text-amber-700 text-sm">
                        Pre-IPO investments carry inherent risks including illiquidity, lack of price transparency, and potential for capital loss.
                        Past performance does not guarantee future results. Always consult with qualified financial advisors and conduct thorough
                        due diligence before investing.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing and Valuation */}
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
                  Unlisted Share Pricing and Valuation
                </h2>
                <p className="text-muted-foreground mb-8">
                  Understanding <strong>unlisted share price</strong> dynamics is crucial for making informed investment decisions.
                  Unlike listed securities with real-time pricing, <strong>unlisted price</strong> determination involves multiple factors:
                </p>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-secondary mb-3 flex items-center gap-3">
                      <Scale className="w-5 h-5 text-primary" />
                      Valuation Methodologies
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>DCF Analysis:</strong> Discounted Cash Flow projections based on company financials</li>
                      <li>• <strong>Comparable Company Analysis:</strong> Valuation multiples of similar listed companies</li>
                      <li>• <strong>Recent Transaction Multiples:</strong> Prices from recent funding rounds or secondary sales</li>
                      <li>• <strong>Book Value Analysis:</strong> Net asset value approach for asset-heavy businesses</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-secondary mb-3 flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Pre-IPO Price vs IPO Price Dynamics
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      The relationship between <strong>pre-IPO price</strong> and <strong>IPO price</strong> is influenced by:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Market conditions at the time of listing</li>
                      <li>• Company's growth trajectory and financial performance</li>
                      <li>• Investor sentiment and sector dynamics</li>
                      <li>• IPO pricing strategy and book building demand</li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      <Link to="/pre-ipo-price-vs-ipo-price" className="text-primary hover:underline font-medium">
                        Learn more about Pre-IPO vs IPO pricing →
                      </Link>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SEBI Regulations */}
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
                  SEBI Regulations and Compliance for Unlisted Share Trading
                </h2>
                <p className="text-muted-foreground mb-8">
                  While unlisted shares are not directly regulated by SEBI like listed securities, several regulatory frameworks
                  govern <strong>unlisted shares trading</strong> in India. Working with a <strong>SEBI registered advisor</strong> or
                  <strong> trusted platform for unlisted shares</strong> ensures compliance:
                </p>

                <div className="grid gap-6">
                  <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                    <Landmark className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">Companies Act, 2013</h3>
                      <p className="text-muted-foreground">
                        Governs share transfer procedures, including execution of share transfer deeds, stamp duty payment,
                        and intimation to the company's Registrar of Members.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                    <FileCheck className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">Income Tax Act Compliance</h3>
                      <p className="text-muted-foreground">
                        All transactions must comply with capital gains taxation rules. Sellers must report gains in
                        annual tax returns, with TDS applicable in certain scenarios.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                    <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">FEMA Guidelines</h3>
                      <p className="text-muted-foreground">
                        For transactions involving NRIs or foreign investors, Foreign Exchange Management Act regulations
                        apply, requiring RBI pricing guidelines and reporting.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-primary/5 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-secondary mb-3">Why Work with Dhanacharya Advisors?</h3>
                  <p className="text-muted-foreground mb-4">
                    As trusted <strong>pre-IPO share market advisory</strong> professionals, we ensure:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" /> Complete regulatory compliance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" /> Transparent documentation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" /> Secure demat transfers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" /> Tax-efficient structuring
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Taxation Section */}
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
                  Taxation on Pre-IPO and Unlisted Share Investments
                </h2>
                <p className="text-muted-foreground mb-8">
                  Understanding the tax implications is essential when you <strong>buy unlisted shares</strong> or
                  <strong> sell unlisted shares</strong>. Here's a comprehensive overview:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
                    <thead className="bg-primary/10">
                      <tr>
                        <th className="text-left p-4 font-semibold text-secondary">Scenario</th>
                        <th className="text-left p-4 font-semibold text-secondary">Holding Period</th>
                        <th className="text-left p-4 font-semibold text-secondary">Tax Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-muted">
                      <tr>
                        <td className="p-4 text-muted-foreground">Short-Term Capital Gains (Unlisted)</td>
                        <td className="p-4 text-muted-foreground">Less than 24 months</td>
                        <td className="p-4 text-muted-foreground">As per Income Tax Slab</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-muted-foreground">Long-Term Capital Gains (Unlisted)</td>
                        <td className="p-4 text-muted-foreground">24 months or more</td>
                        <td className="p-4 text-muted-foreground">20% with Indexation</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-muted-foreground">Post-IPO LTCG (Listed)</td>
                        <td className="p-4 text-muted-foreground">12 months or more</td>
                        <td className="p-4 text-muted-foreground">10% above ₹1 Lakh</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-muted-foreground">Post-IPO STCG (Listed)</td>
                        <td className="p-4 text-muted-foreground">Less than 12 months</td>
                        <td className="p-4 text-muted-foreground">15%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 text-sm text-muted-foreground">
                  *Tax rates are indicative and subject to change. Consult a tax professional for personalized advice.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Risks Section */}
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
                  Risks and Considerations in Pre-IPO Investing
                </h2>
                <p className="text-muted-foreground mb-8">
                  While <strong>pre-IPO investment</strong> offers significant upside potential, investors must understand and
                  mitigate associated risks:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" /> Liquidity Risk
                    </h3>
                    <p className="text-red-700 text-sm">
                      Unlisted shares cannot be easily sold on exchanges. Finding buyers may take time, and
                      exit opportunities depend on market conditions and company performance.
                    </p>
                  </div>

                  <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" /> Information Asymmetry
                    </h3>
                    <p className="text-red-700 text-sm">
                      Private companies have limited disclosure requirements compared to listed entities,
                      making thorough due diligence challenging.
                    </p>
                  </div>

                  <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" /> IPO Uncertainty
                    </h3>
                    <p className="text-red-700 text-sm">
                      Companies may delay or cancel IPO plans due to market conditions, regulatory issues,
                      or business challenges, affecting exit timelines.
                    </p>
                  </div>

                  <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" /> Valuation Risk
                    </h3>
                    <p className="text-red-700 text-sm">
                      Unlisted share prices may not reflect true value, and post-IPO listing prices
                      may be lower than pre-IPO purchase prices in adverse scenarios.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cluster Pages Navigation */}
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
                Explore Our Complete Pre-IPO Investment Guide
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Dive deeper into specific topics related to <strong>pre-IPO investment</strong> and
                <strong> unlisted shares trading</strong> in India
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clusterPages.map((page, index) => (
                <motion.div
                  key={page.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    to={page.url}
                    className="block bg-white/10 hover:bg-white/20 rounded-xl p-6 transition-all h-full group"
                  >
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4">{page.description}</p>
                    <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              ))}
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
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
                Ready to Explore Pre-IPO Investment Opportunities?
              </h2>
              <p className="text-muted-foreground mb-8">
                Partner with <strong>Dhanacharya Advisors</strong> – your trusted <strong>pre-IPO investment firm</strong> and
                <strong> capital market consultants India</strong>. Get expert guidance on <strong>how to buy pre-IPO shares in India</strong> and
                access the <strong>best pre-IPO opportunities</strong> tailored to your investment goals.
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
                  Learn About Our Services
                </Link>
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
                  Frequently Asked Questions About Pre-IPO Investment
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
      </main>

      <Footer />
    </>
  );
};

export default PreIPOUnlistedSharesInvestment;
