import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, TrendingUp, CheckCircle, AlertTriangle, Building2, Target, Users, Star } from "lucide-react";
import Header from "@/components/Header";
import WhatsAppCommunity from "@/components/WhatsAppCommunity";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const InvestInUnicornStartups = () => {
  const faqs = [
    {
      question: "What is a unicorn startup and how can I invest before IPO?",
      answer: "A unicorn is a privately-held startup valued at $1 billion or more. To invest in unicorns before IPO, you can: purchase shares from employees with vested ESOPs, buy from early investors looking to exit, or participate in secondary market transactions through trusted intermediaries like Dhanacharya Advisors."
    },
    {
      question: "Which Indian unicorns are expected to go public soon?",
      answer: "Several Indian unicorns are in various stages of IPO preparation. Companies across fintech, e-commerce, SaaS, and consumer tech sectors are actively exploring public listings. Contact Dhanacharya Advisors for the latest information on available unicorn pre-IPO opportunities."
    },
    {
      question: "What is the minimum investment to buy unicorn startup shares?",
      answer: "Minimum investments for unicorn pre-IPO shares typically range from ₹5,00,000 to ₹25,00,000 or more, depending on share price and lot sizes. High-demand unicorn shares may have higher minimums due to limited availability. We can help identify opportunities matching your investment capacity."
    },
    {
      question: "What are the risks of investing in unicorn startups?",
      answer: "Key risks include: high valuations that may not sustain post-IPO, execution risks in rapidly scaling businesses, competitive pressures, regulatory changes, longer holding periods, and limited liquidity. Thorough due diligence and portfolio diversification are essential."
    },
    {
      question: "How do unicorn pre-IPO returns compare to regular pre-IPO investments?",
      answer: "Unicorn investments can offer higher potential returns due to scale and market leadership, but also carry higher risk due to elevated valuations. Returns depend on entry price, company performance, and IPO execution. Not all unicorns perform well post-listing."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Pre-IPO Investment Guide", url: "/pre-ipo-unlisted-shares-investment-india" },
    { name: "Invest in Unicorn Startups", url: "/invest-in-unicorn-startups-pre-ipo" }
  ];

  const unicornSectors = [
    {
      sector: "Fintech",
      description: "Digital payments, lending, insurance, and wealth management platforms disrupting traditional financial services.",
      opportunity: "Strong",
      icon: TrendingUp
    },
    {
      sector: "E-commerce & D2C",
      description: "Online marketplaces, direct-to-consumer brands, and quick commerce platforms serving India's digital consumers.",
      opportunity: "Selective",
      icon: Building2
    },
    {
      sector: "Enterprise SaaS",
      description: "B2B software companies serving global markets with scalable, recurring revenue business models.",
      opportunity: "High",
      icon: Target
    },
    {
      sector: "Consumer Tech",
      description: "EdTech, food delivery, travel, gaming, and other consumer-facing digital platforms.",
      opportunity: "Moderate",
      icon: Users
    }
  ];

  const investmentProcess = [
    {
      step: 1,
      title: "Opportunity Identification",
      description: "We identify unicorn companies with upcoming IPO potential and available secondary market shares."
    },
    {
      step: 2,
      title: "Due Diligence",
      description: "Comprehensive analysis of company fundamentals, valuation, growth trajectory, and IPO readiness."
    },
    {
      step: 3,
      title: "Seller Verification",
      description: "Verification of share ownership, employee ESOP status, and transaction authenticity."
    },
    {
      step: 4,
      title: "Transaction Execution",
      description: "Secure payment processing, documentation, and demat transfer of unicorn shares."
    },
    {
      step: 5,
      title: "Portfolio Monitoring",
      description: "Ongoing updates on company developments, IPO progress, and exit opportunities."
    }
  ];

  return (
    <>
      <SEOHead
        title="Invest in Unicorn Startups Before IPO – India | Dhanacharya Advisors"
        description="Early investment opportunities in India's billion-dollar unicorn startups before they go public. Access pre-IPO shares of high-growth companies through trusted channels."
        canonicalUrl="/invest-in-unicorn-startups-pre-ipo"
        keywords="invest in unicorn startups before IPO, unicorn pre-IPO shares India, invest in unlisted companies, pre-IPO startup investment, buy unicorn shares, billion-dollar startup investment India"
        faqs={faqs}
        breadcrumbs={breadcrumbs}
        articleSchema={{
          headline: "Invest in Unicorn Startups Before IPO – Complete Guide",
          datePublished: "2024-05-15",
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
                <li className="text-primary">Invest in Unicorn Startups</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-10 h-10 text-primary" />
                <span className="text-primary font-semibold">Unicorn Investment Opportunities</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Invest in Unicorn Startups Before IPO
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Access exclusive pre-IPO investment opportunities in India's billion-dollar startups.
                Be an early investor in tomorrow's market leaders before they go public.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  Explore Unicorn Shares <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/best-pre-ipo-opportunities-india"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all"
                >
                  All Opportunities
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
                  Why Invest in Unicorn Startups Before IPO?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  India has emerged as the world's third-largest startup ecosystem, with over 100 unicorns
                  valued at $1 billion or more. Many of these companies are preparing for public listings,
                  creating opportunities to <strong>invest in unicorn startups before IPO</strong> at
                  potentially attractive valuations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  When you <strong>invest in unlisted companies</strong> at the unicorn stage, you're
                  accessing businesses that have already proven product-market fit, achieved significant
                  scale, and attracted marquee investors. The path from unicorn to IPO represents the
                  final stage of value creation before public market discovery.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Dhanacharya Advisors</strong> provides curated access to <strong>unicorn pre-IPO
                  shares</strong> through verified secondary market transactions, enabling HNIs and
                  institutions to participate in India's most promising growth stories.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Unicorn Sectors */}
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
                  Unicorn Investment Sectors
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  India's unicorns span diverse sectors, each offering unique investment characteristics
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {unicornSectors.map((sector, index) => (
                  <motion.div
                    key={sector.sector}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <sector.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-secondary">{sector.sector}</h3>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        sector.opportunity === 'High' ? 'bg-green-100 text-green-700' :
                        sector.opportunity === 'Strong' ? 'bg-blue-100 text-blue-700' :
                        sector.opportunity === 'Selective' ? 'bg-amber-100 text-amber-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {sector.opportunity}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{sector.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Investment Process */}
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
                  How to Invest in Unicorn Startups
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our structured process for accessing and investing in unicorn pre-IPO shares
                </p>
              </motion.div>

              <div className="space-y-6">
                {investmentProcess.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-6 bg-white rounded-xl p-6 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
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
                Benefits of Unicorn Pre-IPO Investment
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Star className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Proven Business Models</h3>
                    <p className="text-white/70 text-sm">
                      Unicorns have demonstrated product-market fit, significant revenue, and
                      the ability to scale, reducing early-stage risk.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Rocket className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Growth Potential</h3>
                    <p className="text-white/70 text-sm">
                      Market leaders in their categories with strong growth runways and
                      potential for continued value creation post-IPO.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <TrendingUp className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Institutional Validation</h3>
                    <p className="text-white/70 text-sm">
                      Backing from top-tier VCs and PE firms validates business model,
                      management quality, and governance standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Clear Exit Path</h3>
                    <p className="text-white/70 text-sm">
                      Companies actively preparing for IPO provide clearer exit timeline
                      compared to early-stage investments.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
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
                  Understanding Unicorn Investment Risks
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                    <AlertTriangle className="w-6 h-6 text-amber-600 mb-3" />
                    <h3 className="font-semibold text-amber-800 mb-2">Valuation Risk</h3>
                    <p className="text-amber-700 text-sm">
                      Unicorn valuations may be inflated by private market dynamics and may not
                      sustain in public markets.
                    </p>
                  </div>

                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                    <AlertTriangle className="w-6 h-6 text-amber-600 mb-3" />
                    <h3 className="font-semibold text-amber-800 mb-2">Execution Pressure</h3>
                    <p className="text-amber-700 text-sm">
                      High-growth expectations create execution pressure. Any stumble can lead
                      to significant valuation corrections.
                    </p>
                  </div>

                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                    <AlertTriangle className="w-6 h-6 text-amber-600 mb-3" />
                    <h3 className="font-semibold text-amber-800 mb-2">Competition</h3>
                    <p className="text-amber-700 text-sm">
                      Unicorn sectors attract intense competition from well-funded rivals,
                      potentially affecting margins and growth.
                    </p>
                  </div>

                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                    <AlertTriangle className="w-6 h-6 text-amber-600 mb-3" />
                    <h3 className="font-semibold text-amber-800 mb-2">IPO Timing</h3>
                    <p className="text-amber-700 text-sm">
                      IPO timing is uncertain and depends on market conditions, regulatory
                      approvals, and company readiness.
                    </p>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="font-semibold text-secondary mb-3">Our Risk Mitigation Approach</h3>
                  <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" /> Thorough company analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" /> Valuation reasonability check
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" /> Portfolio diversification guidance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" /> Regular market updates
                    </li>
                  </ul>
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
              <Rocket className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-heading font-bold text-secondary mb-4">
                Ready to Invest in India's Unicorns?
              </h2>
              <p className="text-muted-foreground mb-8">
                Connect with <strong>Dhanacharya Advisors</strong> to explore available
                <strong> unicorn pre-IPO investment</strong> opportunities. Access billion-dollar
                companies before they go public.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  Explore Unicorn Shares <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/dhanacharya-advisors-pre-ipo-specialists"
                  className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-all"
                >
                  About Our Services
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

export default InvestInUnicornStartups;
