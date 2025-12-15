import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building, Users, User, Handshake, Scale, Heart, FileText, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={registerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              How to get your business <span className="text-primary">registered?</span>
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed text-base sm:text-lg">
                One critical aspect that most founders aren't the best at is the basic legal requirements for the incorporation and commencement of business. The first step to start a new business is to get it registered.
              </p>
              <p className="leading-relaxed text-base sm:text-lg">
                There are multiple business structures from which you can choose the one which is most appropriate for your organisational aspirations. A new business must get incorporated in any of these business structures as per the scale of its operations, capital invested, number of members, and the risk associated with the business.
              </p>
              <p className="leading-relaxed text-base sm:text-lg">
                As the features, pros and cons of each business structure are different, we as an area expert enter into a detailed discussion with our clients to understand their requirements & conditions of our client enabling them to form the most suitable legal entity of their business.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={registerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 bg-primary/10 rounded-2xl p-6 border border-primary/20"
            >
              <p className="text-lg sm:text-xl font-semibold text-foreground text-center">
                We help incorporate your business
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Types of Legal Entities Section */}
      <section ref={entitiesRef} className="py-16 sm:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={entitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-4">
              Types of <span className="text-primary">legal entities</span>
            </h2>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {legalEntities.map((entity, index) => (
              <motion.div
                key={entity.title}
                initial={{ opacity: 0, x: -30 }}
                animate={entitiesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border/50 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <entity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2">
                      {index + 1}) {entity.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {entity.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Plan Section */}
      <section ref={businessPlanRef} className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={businessPlanInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Business <span className="text-primary">Plan</span>
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed text-base sm:text-lg">
                Business Plan is uniform written arrangement of your ideas, goal, mission, vision & prospects in a single document. In other words its investor pitch deck or a set of documents for providers of capital that walks them through the business idea and goal in depth. A comprehensive Business Plan helps them to get into the founder's shoes and understand the intent and objective of the idea in a palpable manner and hence help the investor to take correct approach towards the valuation of the company. Business plans are used for presenting your idea to investors like angle investors, venture capitalist, private equity investor, private capitalists & banking institutions.
              </p>
              <p className="leading-relaxed text-base sm:text-lg">
                A well drafted Business Plan contains a complete set of information of business along with the co founders. It also includes financial projections with forecasted cash flow, a pitch for them to invest in the business. Dhanacharya advisors has a team of professionals with vast experience of preparing financial and business plans.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={businessPlanInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10"
            >
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-6">
                What is covered in a business plan ?
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {businessPlanItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={businessPlanInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="flex items-center gap-2 bg-muted/50 rounded-lg p-3"
                  >
                    <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default StartYourBusiness;
