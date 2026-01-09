import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building, User, Handshake, Scale, Heart, FileText, ChevronRight, Check } from "lucide-react";
import Header from "@/components/Header";
import WhatsAppCommunity from "@/components/WhatsAppCommunity";
import Footer from "@/components/Footer";

const legalEntities = [
  {
    title: "Pvt Ltd co. Registration",
    description: "A private limited company is a privately-held business entity. It is held by private stakeholders, wherein the liability of a shareholder is limited and their personal assets are not at risk.",
    icon: Building,
  },
  {
    title: "One person co. Registration",
    description: "The One Person Company is the type of entity which is owned by a single person. The OPC is also a type of Private Limited Company, but with little distinctness. It allows a sole person to own and also manage the entire business operations.",
    icon: User,
  },
  {
    title: "Partnership Firm Registration",
    description: "A partnership firm is a type of business structure formed with mutual consent of all the partners for a profitable purpose. The firm owned and controlled by a set of people that are known as partners and have some shared capital in the firm.",
    icon: Handshake,
  },
  {
    title: "Limited liability partnership Registration",
    description: "Limited Liability Partnership (LLP) is a partnership in which some or all partners have limited liability. It therefore exhibits elements of partnerships and corporations.",
    icon: Scale,
  },
  {
    title: "Section 8 co. Registration",
    description: "A company is referred to as Section 8 Company when it registered as a Non-Profit Organization (NPO). Income of companies registered here can not be used for distributing dividends to the company's members and has to be used for the promotion of charitable objectives.",
    icon: Heart,
  },
];

const businessPlanItems = [
  "Mission and Vision",
  "Founders profile",
  "Elevator pitch",
  "Competition Analysis",
  "Marketing Plan",
  "Exit Strategy",
  "Competitors and Alternatives",
  "The problem targeted and the solution offered",
  "Projected Financial statements",
  "Traction gained",
  "Market Research",
  "Business Model",
  "Target Market",
  "Financial Schedule",
  "Projected Cash Flow",
  "Valuation of business",
  "Key Investment Advantage",
  "Validation of Problems and solutions",
  "Funds raised so far",
  "Utilisation of funds",
];

const StartYourBusiness = () => {
  const heroRef = useRef(null);
  const registerRef = useRef(null);
  const entitiesRef = useRef(null);
  const businessPlanRef = useRef(null);

  const heroInView = useInView(heroRef, { once: false, margin: "-100px" });
  const registerInView = useInView(registerRef, { once: false, margin: "-100px" });
  const entitiesInView = useInView(entitiesRef, { once: false, margin: "-100px" });
  const businessPlanInView = useInView(businessPlanRef, { once: false, margin: "-100px" });

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16 sm:pb-20 bg-secondary relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6"
            >
              Start Your <span className="text-primary">Business</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-secondary-foreground/70"
            >
              We partner our clients with a long term perspective.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* How to Register Section */}
      <section ref={registerRef} className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={registerInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                  How to get your business <span className="text-primary">registered?</span>
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <p className="leading-relaxed text-base sm:text-lg">
                    One critical aspect that most founders aren't the best at is the basic legal requirements for the incorporation and commencement of business. The first step to start a new business is to get it registered.
                  </p>
                  <p className="leading-relaxed text-base sm:text-lg">
                    There are multiple business structures from which you can choose the one which is most appropriate for your organisational aspirations.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={registerInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-8 bg-primary/10 rounded-2xl p-6 border border-primary/20"
                >
                  <p className="text-lg sm:text-xl font-semibold text-foreground text-center">
                    We help incorporate your business
                  </p>
                </motion.div>
              </motion.div>

              {/* Growth Bar Chart Visual */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={registerInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                  <div className="flex items-end justify-center gap-3 h-48">
                    {[30, 45, 60, 80, 100].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={registerInView ? { height: `${height}%` } : {}}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        className="w-10 sm:w-12 bg-primary rounded-t-sm relative"
                      >
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                          {index + 1}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">Business Growth Stages</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Legal Entities Section */}
      <section ref={entitiesRef} className="py-16 sm:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Building Blocks Visual */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={entitiesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="flex justify-center order-2 lg:order-1"
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                  <div className="flex flex-col items-center gap-2">
                    {/* Building blocks stacked */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={entitiesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="w-16 h-12 bg-primary rounded-sm"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={entitiesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="w-24 h-12 bg-primary/80 rounded-sm"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={entitiesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="w-32 h-12 bg-primary/60 rounded-sm"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={entitiesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="w-40 h-12 bg-primary/40 rounded-sm"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={entitiesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="w-48 h-12 bg-primary/20 rounded-sm"
                    />
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">5 Entity Types</p>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={entitiesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-8">
                  Types of <span className="text-primary">legal entities</span>
                </h2>
                <div className="space-y-4">
                  {legalEntities.map((entity, index) => (
                    <motion.div
                      key={entity.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={entitiesInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-6 h-6 rounded bg-primary flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </span>
                      <span className="text-sm sm:text-base font-medium text-secondary-foreground">
                        {entity.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Plan Section */}
      <section ref={businessPlanRef} className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={businessPlanInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Business <span className="text-primary">Plan</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6">
                  Business Plan is uniform written arrangement of your ideas, goal, mission, vision & prospects in a single document. A comprehensive Business Plan helps investors understand the intent and objective of the idea.
                </p>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-4">
                  What is covered in a business plan?
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {businessPlanItems.slice(0, 10).map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={businessPlanInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Document Stack Visual */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={businessPlanInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                  <div className="relative w-48 h-56">
                    {/* Stacked documents */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={businessPlanInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="absolute bottom-0 left-0 w-40 h-48 bg-primary/20 rounded-lg"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={businessPlanInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="absolute bottom-2 left-2 w-40 h-48 bg-primary/40 rounded-lg"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={businessPlanInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="absolute bottom-4 left-4 w-40 h-48 bg-primary/60 rounded-lg flex items-center justify-center"
                    >
                      <FileText className="w-16 h-16 text-primary-foreground/60" />
                    </motion.div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">Business Plan Documents</p>
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

export default StartYourBusiness;
