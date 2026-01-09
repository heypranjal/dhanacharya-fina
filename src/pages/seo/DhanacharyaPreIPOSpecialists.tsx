import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Users, TrendingUp, CheckCircle, Building2, Phone, Mail, MapPin, Star } from "lucide-react";
import Header from "@/components/Header";
import WhatsAppCommunity from "@/components/WhatsAppCommunity";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const DhanacharyaPreIPOSpecialists = () => {
  const faqs = [
    {
      question: "Who is Dhanacharya Advisors?",
      answer: "Dhanacharya Advisors is a leading pre-IPO investment advisory firm in India, specializing in unlisted shares trading and equity investments. We serve HNIs, family offices, and institutional investors with curated pre-IPO opportunities, comprehensive due diligence, and seamless transaction execution."
    },
    {
      question: "What services does Dhanacharya Advisors offer for pre-IPO investments?",
      answer: "Our services include: Pre-IPO share sourcing and advisory, unlisted shares buying and selling facilitation, company research and due diligence, valuation analysis, transaction documentation, demat transfer assistance, portfolio advisory, and ongoing market updates."
    },
    {
      question: "Is Dhanacharya Advisors suitable for first-time pre-IPO investors?",
      answer: "Yes, we cater to investors at all experience levels. For first-time investors, we provide educational guidance on pre-IPO investing, help assess risk tolerance, recommend suitable opportunities, and ensure complete understanding before any investment decision."
    },
    {
      question: "How does Dhanacharya ensure safe pre-IPO transactions?",
      answer: "We ensure safety through: thorough seller verification, share certificate authentication, proper documentation (share transfer deeds, DIS), secure payment processing, demat transfer confirmation, and complete transaction records. All processes are designed to protect investor interests."
    },
    {
      question: "What is the minimum investment with Dhanacharya Advisors?",
      answer: "Minimum investments vary by opportunity, typically starting from ₹50,000 to ₹5,00,000 depending on the share price and availability. For high-demand pre-IPO or unicorn shares, minimums may be higher. Contact us to discuss opportunities matching your investment capacity."
    },
    {
      question: "How can I contact Dhanacharya Advisors for pre-IPO investment consultation?",
      answer: "You can reach us through: Phone: +91 82853 63331 / +91 78382 31007, Email: contact@dhanacharya.com, or visit our office at D-127, Second Floor, Sector 10, Noida, UP 201301. You can also fill out the contact form on our website for a callback."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Pre-IPO Investment Guide", url: "/pre-ipo-unlisted-shares-investment-india" },
    { name: "Dhanacharya Advisors", url: "/dhanacharya-advisors-pre-ipo-specialists" }
  ];

  const services = [
    {
      title: "Pre-IPO Share Advisory",
      description: "Research-backed recommendations on the best pre-IPO investment opportunities in India.",
      icon: TrendingUp
    },
    {
      title: "Transaction Facilitation",
      description: "End-to-end support for buying and selling unlisted shares with complete documentation.",
      icon: Building2
    },
    {
      title: "Due Diligence",
      description: "Comprehensive verification of companies, shares, and sellers before any transaction.",
      icon: Shield
    },
    {
      title: "Valuation Analysis",
      description: "Fair value assessment and pricing guidance for informed investment decisions.",
      icon: Award
    },
    {
      title: "Portfolio Advisory",
      description: "Strategic guidance on building diversified pre-IPO portfolios aligned with your goals.",
      icon: Users
    },
    {
      title: "HNI & Institutional Services",
      description: "Specialized solutions for high-value investors and institutional clients.",
      icon: Star
    }
  ];

  const stats = [
    { value: "500+", label: "Transactions Facilitated" },
    { value: "₹100Cr+", label: "Investment Volume" },
    { value: "200+", label: "Satisfied Clients" },
    { value: "50+", label: "Companies Covered" }
  ];

  return (
    <>
      <SEOHead
        title="Dhanacharya Advisors – Pre-IPO Specialists for HNIs & Institutions | India"
        description="Dhanacharya Advisors is India's trusted pre-IPO investment firm serving HNIs and institutions. Expert advisory on unlisted shares, comprehensive due diligence, and secure transaction execution."
        canonicalUrl="/dhanacharya-advisors-pre-ipo-specialists"
        keywords="Dhanacharya Advisors, pre-IPO specialists for HNIs and institutions, pre-IPO investment firm India, unlisted share advisors, capital market consultants, trusted pre-IPO platform"
        faqs={faqs}
        breadcrumbs={breadcrumbs}
        articleSchema={{
          headline: "Dhanacharya Advisors – Pre-IPO Specialists for HNIs & Institutions",
          datePublished: "2024-01-01",
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
                <li className="text-primary">Dhanacharya Advisors</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="mb-6">
                <img
                  src="https://res.cloudinary.com/dadfpmrat/image/upload/v1766126485/Artboard_10_maqdxl.png"
                  alt="Dhanacharya Advisors"
                  className="h-16 w-auto"
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Dhanacharya Advisors – Pre-IPO Specialists for HNIs & Institutions
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Your trusted partner for pre-IPO investments in India. Expert advisory, verified opportunities,
                and seamless execution for discerning investors.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  Schedule Consultation <ArrowRight className="w-5 h-5" />
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

        {/* About Section */}
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
                  About Dhanacharya Advisors
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong>Dhanacharya Advisors</strong> is a premier <strong>pre-IPO investment firm</strong>
                  dedicated to connecting sophisticated investors with India's most promising unlisted
                  companies. As <strong>pre-IPO specialists for HNIs and institutions</strong>, we bring
                  decades of combined experience in capital markets, investment banking, and equity research.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our mission is to democratize access to pre-IPO investment opportunities while maintaining
                  the highest standards of due diligence, transparency, and regulatory compliance. We serve
                  as a trusted bridge between investors seeking early-stage equity exposure and verified
                  sellers in the secondary market.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a first-time pre-IPO investor or an experienced HNI looking to expand your
                  unlisted portfolio, <strong>Dhanacharya Advisors</strong> provides personalized service
                  tailored to your investment objectives and risk profile.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center text-white"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
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
                  Our Services
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive pre-IPO investment solutions for discerning investors
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

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-heading font-bold text-secondary mb-8">
                  Why Investors Choose Dhanacharya Advisors
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">Curated Opportunities</h3>
                      <p className="text-muted-foreground">
                        We don't list every available pre-IPO stock. Our research team carefully selects
                        opportunities based on fundamentals, growth potential, and valuation attractiveness.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">Verified Transactions</h3>
                      <p className="text-muted-foreground">
                        Every seller and share certificate undergoes rigorous verification. We authenticate
                        ownership, check for encumbrances, and ensure transaction legitimacy.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">Transparent Pricing</h3>
                      <p className="text-muted-foreground">
                        No hidden fees or surprises. Our fee structure is clearly communicated upfront,
                        and all transaction costs are disclosed before you commit.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">Personalized Service</h3>
                      <p className="text-muted-foreground">
                        Dedicated relationship managers for HNIs and institutions. We understand your
                        investment goals and recommend opportunities accordingly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">Regulatory Compliance</h3>
                      <p className="text-muted-foreground">
                        All transactions comply with Companies Act, stamp duty requirements, and tax
                        regulations. Proper documentation for your records and compliance needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">Ongoing Support</h3>
                      <p className="text-muted-foreground">
                        Our relationship doesn't end with the transaction. We provide updates on company
                        developments, IPO progress, and exit opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
                Get in Touch
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-white/70">
                    <a href="tel:+918285363331" className="hover:text-primary transition-colors">+91 82853 63331</a><br />
                    <a href="tel:+917838231007" className="hover:text-primary transition-colors">+91 78382 31007</a>
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-white/70">
                    <a href="mailto:contact@dhanacharya.com" className="hover:text-primary transition-colors">
                      contact@dhanacharya.com
                    </a>
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Office</h3>
                  <p className="text-white/70">
                    D-127, Second Floor, Sector 10,<br />
                    Noida, UP 201301
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
                Ready to Start Your Pre-IPO Investment Journey?
              </h2>
              <p className="text-muted-foreground mb-8">
                Partner with <strong>Dhanacharya Advisors</strong> – India's trusted
                <strong> pre-IPO specialists for HNIs and institutions</strong>. Get expert guidance,
                verified opportunities, and professional service.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
                >
                  Schedule Consultation <ArrowRight className="w-5 h-5" />
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

      <WhatsAppCommunity />
      <Footer />
    </>
  );
};

export default DhanacharyaPreIPOSpecialists;
