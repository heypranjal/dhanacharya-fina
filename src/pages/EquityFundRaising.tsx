import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  Rocket,
  Target,
  Building2,
  Briefcase,
  FileText,
  Users,
  Calculator,
  Shield,
  Phone,
  ArrowRight,
  CheckCircle,
  Sprout,
  BarChart3,
  LineChart,
  Landmark,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import WhatsAppCommunity from "@/components/WhatsAppCommunity";
import Footer from "@/components/Footer";

const EquityFundRaising = () => {
  const heroRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const stagesRef = useRef(null);
  const howWeHelpRef = useRef(null);
  const documentsRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: false, margin: "-100px" });
  const whatWeDoInView = useInView(whatWeDoRef, { once: false, margin: "-100px" });
  const stagesInView = useInView(stagesRef, { once: false, margin: "-100px" });
  const howWeHelpInView = useInView(howWeHelpRef, { once: false, margin: "-100px" });
  const documentsInView = useInView(documentsRef, { once: false, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: false, margin: "-100px" });

  const stages = [
    {
      icon: Sprout,
      title: "Seed Stage",
      description:
        "The seed stage refers to the period just after a company has launched and is working on their proof of concept. During this period a company is also looking forward to gain initial transaction and receive feedback from early adopters so that they can refine what they offer before looking to move into the growth stage.",
      howWeHelp:
        "We identify the most attractive deal within our investors network, and approach the seed investors or lenders, and intermediate the negotiation with the one which is most advantageous.",
    },
    {
      icon: Rocket,
      title: "Series A",
      description:
        "Startups that get to this stage have usually figured out their product, the size of the market and need capital to scale, improve distribution systems or establish a business model if they don't have one yet.",
      howWeHelp:
        "As an advisor we take the initiative to identify business opportunities and management teams to promote new ventures.",
    },
    {
      icon: BarChart3,
      title: "Series B, C & Above",
      description:
        'Series B, C & further rounds of funding are "all about scaling". Successful startups at this stage tend to have an established user base. When companies reach this stage, business model is operational whether the company is profitable or not, user base is expanding and acquisitions might be in the crosshairs of the executives leading these companies.',
      howWeHelp:
        "Nurturing these companies through their formative years, we provide strategic guidance, management expertise, business and expansion opportunities & support for subsequent financing needs.",
    },
    {
      icon: Landmark,
      title: "Private Company",
      description:
        "Company whose shares may not be offered to the public for sale and which operates under legal requirements less strict than those for a public company.",
      howWeHelp:
        "We advice private companies with respect to structuring, raising and sourcing capital (eg. expansion capital, acquisition financing, pre-IPO funding, buy-out capital).",
    },
  ];

  const howWeCanHelp = [
    "Startup investment & fund raising advisory",
    "Liasoning with VC's to raise funds",
    "Preparation Of Pitch Deck, Financial Models & Other Collaterals",
    "Co-ordinating on the due diligence & deal documentation",
    "Taxation/Accounting/Compliances",
    "MIS & Process Improvement",
  ];

  const investorDocuments = [
    "Elevator Pitch",
    "Company Presentation",
    "Business Plan",
    "Share capitalisation table",
    "Short deck",
    "Business model",
    "Information deck",
    "Market research",
    "Financials projections",
    "Business valuation model & reports",
    "Financial due diligence",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section with Rocket Visual */}
      <section
        ref={heroRef}
        className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-secondary relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute top-10 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Equity Fund Raising
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-heading font-bold text-secondary-foreground mb-4 sm:mb-6">
                Plan To Raise Money For Your{" "}
                <span className="text-primary">Startup?</span>
              </h1>
              <p className="text-base sm:text-lg text-secondary-foreground/80 mb-8">
                We help startups at every stage of their funding journey
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <motion.a
                  href="tel:+918285363331"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-colors"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Call Us Now
                </motion.a>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-colors"
                  >
                    Get Consultation
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Rocket Ascending Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                <div className="relative w-48 h-56 flex items-center justify-center">
                  {/* Ascending trail lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={heroInView ? { scaleY: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="absolute bottom-0 w-2 bg-primary/20 rounded-full origin-bottom"
                      style={{
                        left: `${20 + i * 15}%`,
                        height: `${30 + i * 15}%`,
                      }}
                    />
                  ))}
                  {/* Rocket */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={heroInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                    className="relative z-10"
                  >
                    <div className="w-16 h-20 bg-primary rounded-t-full flex items-center justify-center">
                      <Rocket className="w-8 h-8 text-primary-foreground -rotate-45" />
                    </div>
                    {/* Flame */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={heroInView ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 0.5 }}
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary/60 rounded-b-full"
                    />
                  </motion.div>
                  {/* Stars */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={`star-${i}`}
                      initial={{ scale: 0 }}
                      animate={heroInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                      className="absolute w-2 h-2 bg-primary rounded-full"
                      style={{
                        left: `${10 + i * 25}%`,
                        top: `${15 + (i % 2) * 20}%`,
                      }}
                    />
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">Growth Journey</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section
        ref={whatWeDoRef}
        className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whatWeDoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Our Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6">
              What Do <span className="text-primary">We Do?</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={whatWeDoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/50 hover:border-primary/50 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                <Target className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3 sm:mb-4">
                Fund Raising Advisory
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Dhanacharya offers fund raising advisory to startups (early & growth stage) at various stages of fund raising & reaching them to the potential investors within our investors network for raising funds.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={whatWeDoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/50 hover:border-primary/50 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3 sm:mb-4">
                Comprehensive Solutions
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We offer fund raising advisory to startups for private equity financing, venture capital fund raise, early stage fund raise & debt financing to scale their business. We make sure that our clients achieve the next growth milestone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={whatWeDoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border/50 hover:border-primary/50 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-3 sm:mb-4">
                Investor Network
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We scout promising investment opportunities for investment managers at PE/VC and asset management firms, while on the other, we prepare startups for fundraising.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Where Do We Come In Section */}
      <section
        ref={stagesRef}
        className="py-16 sm:py-20 lg:py-24 bg-secondary relative overflow-hidden"
      >
        <div className="absolute top-10 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-5 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={stagesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Funding Stages
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground mb-4 sm:mb-6">
              Where Do We <span className="text-primary">Come In?</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
              We are with you at different stages of your business
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={stagesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-navy-light/30 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-primary/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <stage.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-secondary-foreground">
                        {stage.title}
                      </h3>
                    </div>
                  </div>
                  <div className="lg:w-2/3 space-y-4">
                    <p className="text-sm sm:text-base text-secondary-foreground/70 leading-relaxed">
                      {stage.description}
                    </p>
                    <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                      <p className="text-sm sm:text-base text-secondary-foreground/80">
                        <span className="text-primary font-semibold">How we help: </span>
                        {stage.howWeHelp}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section
        ref={howWeHelpRef}
        className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={howWeHelpInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Our Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6">
              How We Can <span className="text-primary">Help?</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {howWeCanHelp.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={howWeHelpInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Documents Section */}
      <section
        ref={documentsRef}
        className="py-16 sm:py-20 lg:py-24 bg-secondary relative overflow-hidden"
      >
        <div className="absolute top-10 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={documentsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Documentation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground mb-4 sm:mb-6">
              Investor Readiness <span className="text-primary">Documents</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
              We help clients prepare documents needed to pitch investors to raise funds. These documents include:
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {investorDocuments.map((doc, index) => (
              <motion.div
                key={doc}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={documentsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-navy-light/30 backdrop-blur-sm border border-secondary-foreground/10 rounded-xl p-4 sm:p-5 text-center hover:border-primary/50 transition-all group"
              >
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-2" />
                <span className="text-xs sm:text-sm text-secondary-foreground group-hover:text-primary transition-colors">
                  {doc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-border/50 text-center shadow-xl">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
                Get Your First <span className="text-primary">Consultation!</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                Ready to take your startup to the next level? Contact us today.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+918285363331" className="text-lg sm:text-xl font-semibold hover:text-primary transition-colors">
                    91-8285363331
                  </a>
                </div>
                <div className="hidden sm:block text-muted-foreground">|</div>
                <div className="flex items-center gap-2 text-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+918076542631" className="text-lg sm:text-xl font-semibold hover:text-primary transition-colors">
                    91-8076542631
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="tel:+918285363331"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-colors"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Call Us
                </motion.a>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-colors"
                  >
                    Contact Now
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <WhatsAppCommunity />
      <Footer />
    </main>
  );
};

export default EquityFundRaising;
