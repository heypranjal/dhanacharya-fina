import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  PiggyBank,
  Briefcase,
  CreditCard,
  ArrowRight,
  Users,
  Target,
  Shield,
  Calculator,
  Building,
  FileText,
  Scale,
  Receipt,
  Home,
  GraduationCap,
  Coins,
  Wallet,
  Landmark,
  BadgeCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WhatWeDo = () => {
  const heroRef = useRef(null);
  const equityRef = useRef(null);
  const investmentsRef = useRef(null);
  const corporateRef = useRef(null);
  const loansRef = useRef(null);

  const heroInView = useInView(heroRef, { once: false, margin: "-100px" });
  const equityInView = useInView(equityRef, { once: false, margin: "-100px" });
  const investmentsInView = useInView(investmentsRef, { once: false, margin: "-100px" });
  const corporateInView = useInView(corporateRef, { once: false, margin: "-100px" });
  const loansInView = useInView(loansRef, { once: false, margin: "-100px" });

  const investmentServices = [
    { name: "Mutual Fund", icon: PiggyBank, href: "#mutualfund" },
    { name: "Calculator", icon: Calculator, href: "#calculator" },
  ];

  const corporateServices = [
    { name: "Start Your Business", icon: Building, description: "Company incorporation and setup" },
    { name: "Intellectual Property", icon: Shield, description: "Patent, trademark & copyright protection" },
    { name: "Registration & Licenses", icon: FileText, description: "All statutory registrations" },
    { name: "Tax & Compliance", icon: Receipt, description: "Tax advisory and compliance management" },
  ];

  const loanTypes = [
    { name: "Personal Loan", icon: Wallet },
    { name: "Business Loan", icon: Briefcase },
    { name: "Home Loan", icon: Home },
    { name: "Education Loan", icon: GraduationCap },
    { name: "Gold Loan", icon: Coins },
    { name: "Credit Cards", icon: CreditCard },
  ];

  const stats = [
    { value: "100+", label: "Years Combined Experience" },
    { value: "500+", label: "Clients Served" },
    { value: "₹100Cr+", label: "Funds Raised" },
    { value: "Pan India", label: "Coverage" },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-secondary relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute top-10 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Our Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-4 sm:mb-6">
              What Do <span className="text-primary">We Do</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-secondary-foreground/80 max-w-3xl mx-auto mb-8">
              We help startups in their fund raising process
            </p>
          </motion.div>

          {/* Why Do You Need Us Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mt-8 sm:mt-12"
          >
            <div className="bg-navy-light/30 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-secondary-foreground">
                  Why Do You <span className="text-primary">Need Us?</span>
                </h2>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-secondary-foreground/70 leading-relaxed mb-6">
                We are financial & business consultants providing a wide array of investment, corporate and legal services including fundraising services for individual and corporate clients on a Pan India basis.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-secondary-foreground/70 leading-relaxed">
                As a team of financial, management & legal experts having an industry wide combined experience of{" "}
                <span className="text-primary font-semibold">100+ years</span>, we are dedicated to helping our clients, employees, and communities achieve financial security, financial mobility, and financial freedom through our services.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mt-8 sm:mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center p-4 sm:p-6 bg-navy-light/20 rounded-xl border border-secondary-foreground/5"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-secondary-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Equity Fund Raising Section */}
      <section
        ref={equityRef}
        id="equity"
        className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={equityInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Fund Raising
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6">
                Equity Fund <span className="text-primary">Raising</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6">
                We have an empowered network of Angel Investors & Venture Capital and PE funds that ensures our member startups have easy access to external funds to scale up constantly.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-8">
                Dhanacharya provides you with the strategy, skills and support you need to secure equity funding and assists you in preparing the best pitch to secure committed investments from Angel Investors, VCs or via Crowdfunding, even if you've no previous experience in dealing with investors.
              </p>
              <Link to="/equityfundraising">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={equityInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/50 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground">
                      Funding Solutions
                    </h3>
                    <p className="text-sm text-muted-foreground">For every stage of growth</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {["Angel Investment", "Venture Capital", "PE Funds", "Crowdfunding"].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={equityInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl"
                    >
                      <BadgeCheck className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm sm:text-base text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investments Section */}
      <section
        ref={investmentsRef}
        id="investments"
        className="py-16 sm:py-20 lg:py-24 bg-secondary relative overflow-hidden"
      >
        <div className="absolute top-10 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-5 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={investmentsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Wealth Creation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground mb-4 sm:mb-6">
              <span className="text-primary">Investments</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-secondary-foreground/70 max-w-3xl mx-auto">
              We exist to reach to the common man with foundation stone for creating long-term wealth for the investor through various financial products and extend the opportunity to make wealth through an empowered network of Dhanacharya Advisors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={investmentsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-navy-light/30 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-3xl mx-auto mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <p className="text-sm sm:text-base text-secondary-foreground/80">
                Explore how our advisors can help you to meet your goals and succeed as investors.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {investmentServices.map((service, index) => (
              <motion.a
                key={service.name}
                href={service.href}
                initial={{ opacity: 0, y: 30 }}
                animate={investmentsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-navy-light/30 backdrop-blur-sm border border-secondary-foreground/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-secondary-foreground group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Advisory Section */}
      <section
        ref={corporateRef}
        id="corporate"
        className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={corporateInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Business Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6">
              Corporate <span className="text-primary">Advisory</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide specialised services (which matches their core competency) in the form of complete solution. These services include, incorporation, taxation advice, legal vetting, statutory compliance work, evaluating a business proposal, financial management, transaction support etc.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {corporateServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                animate={corporateInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-xl sm:rounded-2xl p-6 border border-border/50 hover:border-primary/50 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Loans Section */}
      <section
        ref={loansRef}
        id="loans"
        className="py-16 sm:py-20 lg:py-24 bg-secondary relative overflow-hidden"
      >
        <div className="absolute top-10 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={loansInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Financing Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground mb-4 sm:mb-6">
              <span className="text-primary">Loans</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-secondary-foreground/70 max-w-3xl mx-auto">
              We with our various finance partners strives to get you the best loan and Credit Card deals in just a few clicks. These include home loan, personal loan, business loan, gold loan, education loan, venture debts. Our services come at no cost to our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {loanTypes.map((loan, index) => (
              <motion.div
                key={loan.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={loansInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-navy-light/30 backdrop-blur-sm border border-secondary-foreground/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-primary/50 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <loan.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-xs sm:text-sm font-heading font-semibold text-secondary-foreground group-hover:text-primary transition-colors">
                  {loan.name}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={loansInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-10 sm:mt-12"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WhatWeDo;
