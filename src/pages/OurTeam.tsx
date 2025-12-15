import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Award, Briefcase, Scale, Music, Trophy } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface TeamMember {
  name: string;
  role: string;
  title: string;
  description: string[];
  highlights: string[];
  category: "executive" | "advisory";
}

const teamMembers: TeamMember[] = [
  {
    name: "Kunal Kapoor",
    role: "Managing Partner",
    title: "Executive Board",
    category: "executive",
    description: [
      "A qualified CFA from CFA Institute (USA), Kunal holds a Chartered Accountancy background and is a Delhi University graduate.",
      "He has a rich experience in Equity Research and proprietary trading of stocks with specialisation in fundamental & Technical Analysis.",
      "He acts in the advisory board of various investment consultancies in Delhi-NCR with a breadth of experience in wealth management.",
      "He has also served as an auditor in the Statutory Audit team of renowned CA firms of New Delhi & delivered high quality audit and assurance services to top public sector banks (PNB, OBC & others) & big listed corporates.",
    ],
    highlights: [
      "CFA from CFA Institute (USA)",
      "Chartered Accountant",
      "National achievements in Table Tennis and Hockey",
    ],
  },
  {
    name: "Dhawal Pant",
    role: "Managing Partner",
    title: "Executive Board",
    category: "executive",
    description: [
      "A Private Equity professional with core competencies in Valuation advisory, Dhawal had been a part of the Private Equity practice of the Data and Information behemoth IHS Markit in Gurgaon.",
      "He is a CFA from CFA Institute, USA & a qualified Chartered Accountant. He is an expert in financial modelling, equity & debt valuations, and Fundamental Analysis. He's a Delhi University commerce graduate as well.",
      "He has a rich experience in Statutory Audit of various listed business houses from S.S. Kothari Mehta & Co., a top ranked Chartered Accountancy firm in India.",
    ],
    highlights: [
      "CFA from CFA Institute (USA)",
      "Chartered Accountant",
      "Lead vocalist in HigherGround music project",
    ],
  },
  {
    name: "Jatin Kapoor",
    role: "Legal & Compliance Head",
    title: "Advisory Board",
    category: "advisory",
    description: [
      "A qualified lawyer and Company Secretary, Jatin holds a post graduation diploma in corporate & legal management. With expertise in Corporate Law, he has a diverse experience in Corporate Advisory, Transaction advisory, Insolvency & Bankruptcy Law as well as Company Litigation.",
      "He is a member of Bar Council of India and represents his clients in High Courts and Supreme Court of India.",
      "He has served Fortune 500 companies in various legal matters.",
    ],
    highlights: [
      "Qualified Lawyer & Company Secretary",
      "Member of Bar Council of India",
      "Represented India in Lawyers Cricket World Cup (Sri Lanka)",
    ],
  },
  {
    name: "Abhishek Sood",
    role: "Taxation Head",
    title: "Advisory Board",
    category: "advisory",
    description: [
      "Abhishek is a qualified Chartered Accountant from ICAI.",
      "He is a corporate taxation expert and has worked with Big4 firms as a part of taxation advisory practice in KPMG. He has also worked with globally renowned firm BDO and K.C. Khanna, a New Delhi based CA firm since 1942.",
      "He also has a statutory audit & internal audit experience of numerous years & has lead a team of auditors on assignment of top PSU banks (PNB, Canara Bank etc.) & listed companies of India.",
    ],
    highlights: [
      "Chartered Accountant from ICAI",
      "Big4 experience (KPMG)",
      "Expert in Corporate Taxation",
    ],
  },
];

const OurTeam = () => {
  const heroRef = useRef(null);
  const executiveRef = useRef(null);
  const advisoryRef = useRef(null);

  const heroInView = useInView(heroRef, { once: false, margin: "-100px" });
  const executiveInView = useInView(executiveRef, { once: false, margin: "-100px" });
  const advisoryInView = useInView(advisoryRef, { once: false, margin: "-100px" });

  const executiveMembers = teamMembers.filter((m) => m.category === "executive");
  const advisoryMembers = teamMembers.filter((m) => m.category === "advisory");

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-16 sm:pb-20 bg-secondary relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              Our Team
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-6"
            >
              We do whatever <span className="text-primary">it takes.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-secondary-foreground/70 mb-8"
            >
              Professional and Experienced Financial Consultants
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {[
                { icon: Users, label: "Team Members", value: "4+" },
                { icon: Award, label: "Certifications", value: "10+" },
                { icon: Briefcase, label: "Years Experience", value: "50+" },
                { icon: Trophy, label: "Achievements", value: "20+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-secondary-foreground/10"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-2xl sm:text-3xl font-bold text-secondary-foreground">{stat.value}</p>
                  <p className="text-sm text-secondary-foreground/60">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Executive Board Section */}
      <section ref={executiveRef} className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={executiveInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Executive <span className="text-primary">Board</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our managing partners bring decades of combined experience in finance, investment, and advisory services.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {executiveMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                animate={executiveInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-card rounded-3xl p-6 sm:p-8 border border-border/50 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Avatar Placeholder */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0"
                  >
                    <span className="text-3xl sm:text-4xl font-bold text-primary">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </motion.div>

                  <div className="flex-1 text-center sm:text-left">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-2">
                      {member.role}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-4">
                      {member.name}
                    </h3>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
                      {member.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded-lg text-xs text-muted-foreground"
                        >
                          <Award className="w-3 h-3 text-primary" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6 space-y-3">
                  {member.description.map((para, i) => (
                    <p key={i} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section ref={advisoryRef} className="py-16 sm:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={advisoryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Advisors
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-4">
              Advisory <span className="text-primary">Board</span>
            </h2>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
              Expert advisors providing specialized guidance in legal, compliance, and taxation matters.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {advisoryMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                animate={advisoryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-card rounded-3xl p-6 sm:p-8 border border-border/50 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Avatar Placeholder */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0"
                  >
                    <span className="text-3xl sm:text-4xl font-bold text-primary">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </motion.div>

                  <div className="flex-1 text-center sm:text-left">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-2">
                      {member.role}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-4">
                      {member.name}
                    </h3>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
                      {member.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded-lg text-xs text-muted-foreground"
                        >
                          {member.role.includes("Legal") ? (
                            <Scale className="w-3 h-3 text-primary" />
                          ) : member.role.includes("Taxation") ? (
                            <Briefcase className="w-3 h-3 text-primary" />
                          ) : (
                            <Award className="w-3 h-3 text-primary" />
                          )}
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6 space-y-3">
                  {member.description.map((para, i) => (
                    <p key={i} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Special Achievement for Jatin */}
                {member.name === "Jatin Kapoor" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={advisoryInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20"
                  >
                    <div className="flex items-center gap-3">
                      <Trophy className="w-5 h-5 text-primary" />
                      <p className="text-sm text-foreground">
                        <span className="font-semibold">Sports Achievement:</span> Professional cricketer who represented India in Lawyers Cricket World Cup (Sri Lanka) and Delhi in national championships.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Special Achievement for Dhawal */}
                {member.name === "Dhawal Pant" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={executiveInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20"
                  >
                    <div className="flex items-center gap-3">
                      <Music className="w-5 h-5 text-primary" />
                      <p className="text-sm text-foreground">
                        <span className="font-semibold">Musical Talent:</span> Trained vocalist from Gandharva Mahavidyalaya, New Delhi and lead vocalist in HigherGround, an experimental music project.
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Ready to work with <span className="text-primary">our experts?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team of qualified professionals is ready to help you achieve your financial goals. Get in touch with us today.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Contact Our Team
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default OurTeam;
