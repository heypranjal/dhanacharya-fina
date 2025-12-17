import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, CheckCircle, AlertTriangle, Building2, BarChart3, Target, Shield, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const BestPreIPOOpportunities = () => {
  const faqs = [
    {
      question: "How do I identify the best pre-IPO opportunities in India?",
      answer: "Look for: strong revenue growth (20%+ YoY), clear path to profitability, experienced management team, dominant market position, upcoming IPO timeline (12-24 months), reasonable valuation relative to peers, and strong investor backing. Dhanacharya Advisors provides curated research on high-potential pre-IPO opportunities."
    },
    {
      question: "Which sectors offer the best pre-IPO opportunities currently?",
      answer: "High-growth sectors in India include: Fintech, SaaS/Enterprise Tech, E-commerce, Healthcare/Pharma Tech, Electric Vehicles, Clean Energy, Digital Infrastructure, and Consumer Tech. Sector selection should align with your investment thesis and market outlook."
    },
    {
      question: "What returns can I expect from pre-IPO investments?",
      answer: "Returns vary significantly based on company performance, IPO timing, and market conditions. Historically, successful pre-IPO investments have generated 30-100%+ returns at listing, but losses are also possible. Past performance doesn't guarantee future results. Diversification across multiple pre-IPO investments is recommended."
    },
    {
      question: "How do I evaluate unlisted shares with high return potential?",
      answer: "Key evaluation criteria: Financial metrics (revenue growth, margins, unit economics), Market opportunity size, Competitive moat, Management quality, Funding history and investor quality, IPO readiness and timeline, Current valuation vs comparable listed companies."
    },
    {
      question: "Should I invest in pre-IPO shares of unicorn startups?",
      answer: "Unicorn pre-IPO shares can offer significant upside but come with higher valuations and expectations. Consider: valuation relative to fundamentals, path to profitability, competition, and execution risks. Not all unicorns perform well post-IPO. Thorough due diligence is essential."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Pre-IPO Investment Guide", url: "/pre-ipo-unlisted-shares-investment-india" },
    { name: "Best Pre-IPO Opportunities", url: "/best-pre-ipo-opportunities-india" }
  ];

  const evaluationCriteria = [
    {
      title: "Revenue Growth",
      description: "Companies with 25%+ annual revenue growth demonstrate strong market demand and execution capability.",
      metric: "25%+ YoY"
    },
    {
      title: "Market Position",
      description: "Leadership position or clear differentiation in a large addressable market with growth potential.",
      metric: "Top 3 in segment"
    },
    {
      title: "Path to Profitability",
      description: "Clear unit economics and timeline to break-even or profitability, reducing execution risk.",
      metric: "Improving margins"
    },
    {
      title: "Management Quality",
      description: "Experienced leadership with track record of execution, preferably with prior exit experience.",
      metric: "Proven team"
    },
    {
      title: "Investor Quality",
      description: "Backing from reputed VCs, PE firms, or strategic investors validates business model and governance.",
      metric: "Tier-1 investors"
    },
    {
      title: "IPO Readiness",
      description: "Companies with DRHP filed or expected within 12-18 months offer shorter investment horizon.",
      metric: "12-18 months"
    }
  ];

  const sectors = [
    {
      name: "Fintech",
      icon: BarChart3,
      opportunities: "Digital payments, lending platforms, insurtech, wealth management",
      outlook: "High Growth"
    },
    {
      name: "SaaS & Enterprise Tech",
      icon: Building2,
      opportunities: "B2B software, cloud infrastructure, AI/ML platforms, cybersecurity",
      outlook: "Strong"
    },
    {
      name: "Consumer Tech",
      icon: Target,
      opportunities: "E-commerce, D2C brands, food delivery, edtech",
      outlook: "Selective"
    },
    {
      name: "Healthcare & Pharma",
      icon: Shield,
      opportunities: "Healthcare platforms, pharma companies, medical devices, diagnostics",
      outlook: "Stable Growth"
    }
  ];

  return (
    <>
      <SEOHead
        title="Best Pre-IPO Opportunities in India 2025 | Dhanacharya Advisors"
        description="Discover the best pre-IPO investment opportunities in India. Curated list of high-potential unlisted shares with strong fundamentals, growth prospects, and upcoming IPO timelines."
        canonicalUrl="/best-pre-ipo-opportunities-india"
        keywords="best pre-IPO opportunities India, unlisted shares with high returns, pre-IPO investment opportunities, high-growth pre-IPO stocks, invest in unlisted companies, top pre-IPO shares 2025"
        faqs={faqs}
        breadcrumbs={breadcrumbs}
        articleSchema={{
          headline: "Best Pre-IPO Opportunities in India – Investment Guide",
          datePublished: "2024-05-01",
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
                <li className="text-primary">Best Pre-IPO Opportunities</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Best Pre-IPO Opportunities in India
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Discover high-potential unlisted shares with strong fundamentals and upcoming IPO prospects.
                Expert-curated opportunities for discerning investors seeking superior returns.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  View Opportunities <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/pre-ipo-investment-advisory-india"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all"
                >
                  Get Advisory
                </Link>
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
                  Identifying High-Potential Pre-IPO Investments
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The quest for <strong>best pre-IPO opportunities India</strong> requires a disciplined
                  approach combining fundamental analysis, market insights, and timing considerations. Not
                  all pre-IPO stocks deliver returns – successful investing requires identifying companies
                  with genuine growth potential at reasonable valuations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong>Unlisted shares with high returns</strong> typically share common characteristics:
                  strong revenue growth, clear competitive advantages, experienced management teams, and
                  realistic paths to profitability and public listing.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Dhanacharya Advisors</strong> conducts rigorous research to identify the most
                  promising <strong>pre-IPO investment opportunities</strong>, providing clients with
                  curated recommendations backed by comprehensive due diligence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Evaluation Criteria */}
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
                  Our Evaluation Framework
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Key criteria we use to identify <strong>unlisted shares with high returns</strong> potential
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {evaluationCriteria.map((criteria, index) => (
                  <motion.div
                    key={criteria.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-secondary">{criteria.title}</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                        {criteria.metric}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{criteria.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sector Opportunities */}
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
                  Promising Sectors for Pre-IPO Investment
                </h2>
                <p className="text-muted-foreground mb-8">
                  Different sectors offer varying risk-reward profiles for <strong>pre-IPO investments</strong>.
                  Here's our current sector outlook:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {sectors.map((sector, index) => (
                    <motion.div
                      key={sector.name}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-sm border border-muted"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <sector.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-secondary">{sector.name}</h3>
                          <span className="text-xs text-primary font-medium">{sector.outlook}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{sector.opportunities}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How We Help */}
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
                How Dhanacharya Helps You Access the Best Opportunities
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-6">
                  <Star className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Curated Research</h3>
                  <p className="text-white/70">
                    Our research team analyzes hundreds of pre-IPO companies to identify the most
                    promising opportunities with strong fundamentals and reasonable valuations.
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-6">
                  <TrendingUp className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Exclusive Access</h3>
                  <p className="text-white/70">
                    Our network provides access to high-demand pre-IPO shares that may not be
                    available through regular channels, including employee ESOP sales.
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-6">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Due Diligence</h3>
                  <p className="text-white/70">
                    Comprehensive verification of company credentials, financials, and seller
                    authenticity before any investment recommendation.
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-6">
                  <Target className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Portfolio Strategy</h3>
                  <p className="text-white/70">
                    Guidance on building a diversified pre-IPO portfolio aligned with your
                    risk tolerance, investment horizon, and return expectations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Risk Disclaimer */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-amber-800 mb-4">Important Investment Disclaimer</h3>
                      <ul className="space-y-2 text-amber-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          Pre-IPO investments are inherently risky and may result in partial or total loss of capital
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          Past performance of pre-IPO investments does not guarantee future results
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          Unlisted shares have limited liquidity and may be difficult to sell
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          IPO timelines are uncertain and companies may delay or cancel listing plans
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                          Consult financial advisors before making investment decisions
                        </li>
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
                Access Premium Pre-IPO Opportunities
              </h2>
              <p className="text-muted-foreground mb-8">
                Connect with <strong>Dhanacharya Advisors</strong> to explore curated <strong>best pre-IPO
                opportunities in India</strong>. Our research team identifies high-potential investments
                tailored to your investment goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  View Current Opportunities <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/invest-in-unicorn-startups-pre-ipo"
                  className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-all"
                >
                  Unicorn Investments
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

export default BestPreIPOOpportunities;
