import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import WhatsAppCommunity from "@/components/WhatsAppCommunity";
import Footer from "@/components/Footer";

const WhatWeDo = () => {
  const heroRef = useRef(null);
  const equityRef = useRef(null);
  const investmentsRef = useRef(null);
  const corporateRef = useRef(null);

  const heroInView = useInView(heroRef, { once: false, margin: "-100px" });
  const equityInView = useInView(equityRef, { once: false, margin: "-100px" });
  const investmentsInView = useInView(investmentsRef, { once: false, margin: "-100px" });
  const corporateInView = useInView(corporateRef, { once: false, margin: "-100px" });

  const investmentItems = [
    { name: "Mutual Fund", href: "/mutualfunds" },
    { name: "Calculator", href: "/calculator" },
  ];

  const corporateItems = [
    { name: "Start Your Business", href: "/start-your-business" },
    { name: "Intellectual Property", href: "/intellectual-property" },
    { name: "Registration & Licenses", href: "/registration-licenses" },
    { name: "Tax & Compliance", href: "/taxation-advisory" },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section - Why Do You Need Us */}
      <section
        ref={heroRef}
        className="pt-32 pb-16 sm:pb-20 bg-secondary relative overflow-hidden"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground leading-tight">
                  Why Do You Need <span className="text-primary">Us?</span>
                </h1>
              </motion.div>

              {/* First Paragraph */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <p className="text-secondary-foreground/70 leading-relaxed text-sm sm:text-base">
                  We are financial & business consultants providing a wide array of investment, corporate and legal services including fundraising services for individual and corporate clients on a Pan India basis.
                </p>
              </motion.div>

              {/* Second Paragraph */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-secondary-foreground/70 leading-relaxed text-sm sm:text-base">
                  As a team of financial, management & legal experts having an industry wide combined experience of 100+ years, we are dedicated to helping our clients, employees, and communities achieve financial security, financial mobility, and financial freedom through our services
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 - Equity Fund Raising Section */}
      <section
        ref={equityRef}
        id="equity"
        className="py-16 sm:py-20 lg:py-24 bg-background"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={equityInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <span className="text-primary font-bold text-5xl sm:text-6xl lg:text-7xl opacity-30">01</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6 -mt-4">
                  Equity Fund Raising
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-8">
                  We have an empowered network of Angel Investors & Venture Capital and PE funds that ensures our member startups have easy access to external funds to scale up constantly. Dhanacharya provides you with the strategy, skills and support you need to secure equity funding and assists you in preparing the best pitch to secure committed investments from Angel Investors, VCs or via Crowdfunding, even if you've no previous experience in dealing with investors.
                </p>
                <Link to="/equityfundraising">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-full transition-colors text-sm"
                  >
                    LEARN MORE
                  </motion.span>
                </Link>
              </motion.div>

              {/* Bar Chart Visual */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={equityInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                  <div className="flex items-end justify-center gap-3 h-48">
                    {[40, 55, 70, 85, 100].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={equityInView ? { height: `${height}%` } : {}}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        className="w-8 sm:w-10 bg-primary rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 - Investments Section */}
      <section
        ref={investmentsRef}
        id="investments"
        className="py-16 sm:py-20 lg:py-24 bg-secondary relative overflow-hidden"
      >
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Pie Chart Visual */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={investmentsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="flex justify-center order-2 lg:order-1"
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-8 border-primary/20 flex items-center justify-center">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-8 border-primary/40 flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={investmentsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <div className="text-right">
                  <span className="text-primary font-bold text-5xl sm:text-6xl lg:text-7xl opacity-30">02</span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-secondary-foreground mb-6 -mt-4">
                    Investments
                  </h2>
                </div>
                <p className="text-secondary-foreground/70 leading-relaxed text-sm sm:text-base mb-6 text-right">
                  We exist to reach to the common man with foundation stone for creating long-term wealth for the investor through various financial products and extend the opportunity to make wealth through an empowered network of Dhanacharya Advisors. Explore how our advisors can help you to meet your goals and succeed as investors.
                </p>
                <div className="flex flex-col items-end gap-3">
                  {investmentItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={investmentsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <Link
                        to={item.href}
                        className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors group"
                      >
                        <span className="text-sm sm:text-base font-medium">{item.name}</span>
                        <span className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 - Corporate Advisory Section */}
      <section
        ref={corporateRef}
        id="corporate"
        className="py-16 sm:py-20 lg:py-24 bg-background"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={corporateInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <span className="text-primary font-bold text-5xl sm:text-6xl lg:text-7xl opacity-30">03</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6 -mt-4">
                  Corporate Advisory
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-8">
                  We provide specialised services (which matches their core competency) in the form of complete solution. These services include, incorporation, taxation advice, legal vetting, statutory compliance work, evaluating a business proposal, financial management, transaction support etc.
                </p>
                <div className="flex flex-col gap-3">
                  {corporateItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={corporateInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <Link
                        to={item.href}
                        className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                      >
                        <span className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </span>
                        <span className="text-sm sm:text-base font-medium">{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Briefcase Visual */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={corporateInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                  <div className="w-48 h-56 sm:w-56 sm:h-64 bg-primary/10 rounded-lg flex items-end justify-center pb-6">
                    <div className="w-20 h-28 sm:w-24 sm:h-32 bg-primary/30 rounded-t-lg" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppCommunity />
      <Footer />
    </main>
  );
};

export default WhatWeDo;
