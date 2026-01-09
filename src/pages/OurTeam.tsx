import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Award, Briefcase, Scale, Music, Trophy, ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import WhatsAppCommunity from "@/components/WhatsAppCommunity";
import Footer from "@/components/Footer";

interface TeamMember {
  name: string;
  role: string;
  title: string;
  description: string[];
  highlights: string[];
  category: "executive" | "advisory";
  linkedin?: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Kunal Kapoor",
    role: "Founder & Partner",
    title: "Executive Board",
    category: "executive",
    linkedin: "https://www.linkedin.com/in/kunal-kapoor-71960198/",
    image: "https://res.cloudinary.com/dadfpmrat/image/upload/v1767791346/KUNAL_KAPOOR_ouf2ad.jpg",
    description: [
      "Kunal Kapoor is a capital markets professional and business builder known for combining deep market understanding with a highly practical, execution-oriented investment strategy. With extensive exposure to Chartered Accountancy & CFA (US) level financial frameworks, Kunal brings institutional rigor to real-world capital allocation and private market investing.",
      "Over the years, Kunal has backed multiple private companies across growth stages, working closely with founders on strategy, capital structuring, and investor alignment. Several of these businesses have successfully progressed to public markets, delivering strong returns and meaningful value creation for early investors through profitable exits and long-term compounding.",
      "He is deeply involved in equity research, investment strategy, and private deal structuring, with a sharp focus on identifying high-growth businesses early, understanding management intent, and aligning the right long-term investors with such opportunities. His approach is not theoretical—it is market-tested, conviction-led, and built on years of hands-on exposure to public and private markets.",
      "Kunal is recognized for his ability to study macro, sectoral, and business-level trends, convert insights into clear investment theses, and deploy capital with discipline and patience. He actively builds and curates investor networks, enabling selective access to private placements, from early stage to pre-IPO stage investment opportunities, and emerging growth companies.",
      "As the driving force behind Dhanacharya Advisors LLP, Kunal has played a key role in scaling the firm into a trusted boutique investment banking and private markets advisory platform, working closely with entrepreneurs, family offices, and sophisticated investors. His strength lies in strategic thinking, deal judgment, and long-term relationship building—qualities that define enduring capital franchises.",
      "A former national-level sportsperson, Kunal brings the same competitive intensity, discipline, and resilience to business and investing, reinforcing his reputation as a decisive yet thoughtful leader in the capital markets ecosystem.",
    ],
    highlights: [
      "CFA (US) & CA Background",
      "Private Markets & Capital Allocation Expert",
      "Former National-Level Sportsperson",
    ],
  },
  {
    name: "Dhawal Pant",
    role: "Managing Partner",
    title: "Executive Board",
    category: "executive",
    linkedin: "https://www.linkedin.com/in/dhawalpant/",
    image: "https://res.cloudinary.com/dadfpmrat/image/upload/v1767791411/dhawal_urnwgb.jpg",
    description: [
      "A Private Equity professional with core competencies in Valuation advisory, Dhawal had been a part of the Private Equity practice of the Data and Information behemoth IHS Markit in Gurgaon.",
      "He is a CFA from CFA Institute, USA & a qualified Chartered Accountant. He is an expert in financial modelling, equity & debt valuations, and Fundamental Analysis. He's a Delhi University commerce graduate as well.",
      "He has a rich experience in Statutory Audit of various listed business houses from S.S. Kothari Mehta & Co., a top ranked Chartered Accountancy firm in India.",
    ],
    highlights: [
      "CFA from CFA Institute (USA)",
      "Chartered Accountant",
      ,
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
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const heroInView = useInView(heroRef, { once: false, margin: "-100px" });
  const executiveInView = useInView(executiveRef, { once: false, margin: "-100px" });
  const advisoryInView = useInView(advisoryRef, { once: false, margin: "-100px" });

  const executiveMembers = teamMembers.filter((m) => m.category === "executive");
  const advisoryMembers = teamMembers.filter((m) => m.category === "advisory");

  const toggleExpanded = (name: string) => {
    setExpandedMember(expandedMember === name ? null : name);
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section with Network Visual */}
      <section ref={heroRef} className="pt-32 pb-16 sm:pb-20 bg-secondary relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
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
                className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-secondary-foreground mb-6"
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
            </motion.div>

            {/* Connected Network Nodes Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                <div className="relative w-48 h-48">
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    {/* Lines connecting nodes */}
                    <motion.line
                      x1="50" y1="15" x2="20" y2="50"
                      stroke="currentColor" strokeWidth="2" className="text-primary/30"
                      initial={{ pathLength: 0 }}
                      animate={heroInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    />
                    <motion.line
                      x1="50" y1="15" x2="80" y2="50"
                      stroke="currentColor" strokeWidth="2" className="text-primary/30"
                      initial={{ pathLength: 0 }}
                      animate={heroInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    />
                    <motion.line
                      x1="20" y1="50" x2="50" y2="85"
                      stroke="currentColor" strokeWidth="2" className="text-primary/30"
                      initial={{ pathLength: 0 }}
                      animate={heroInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    />
                    <motion.line
                      x1="80" y1="50" x2="50" y2="85"
                      stroke="currentColor" strokeWidth="2" className="text-primary/30"
                      initial={{ pathLength: 0 }}
                      animate={heroInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    />
                    <motion.line
                      x1="20" y1="50" x2="80" y2="50"
                      stroke="currentColor" strokeWidth="2" className="text-primary/30"
                      initial={{ pathLength: 0 }}
                      animate={heroInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    />
                  </svg>
                  {/* Node positions: top, left, right, bottom */}
                  {[
                    { x: 50, y: 15 },
                    { x: 20, y: 50 },
                    { x: 80, y: 50 },
                    { x: 50, y: 85 },
                  ].map((pos, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={heroInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1, type: "spring" }}
                      className="absolute w-10 h-10 bg-primary rounded-full flex items-center justify-center"
                      style={{
                        left: `${pos.x}%`,
                        top: `${pos.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Users className="w-5 h-5 text-primary-foreground" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">Connected Team</p>
              </div>
            </motion.div>
          </div>

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
                  {/* Avatar with LinkedIn Icon */}
                  <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden"
                    >
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-3xl sm:text-4xl font-bold text-primary">
                          {member.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      )}
                    </motion.div>
                    {/* LinkedIn Icon */}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#0A66C2] hover:bg-[#004182] rounded-full flex items-center justify-center shadow-lg transition-colors"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                  </div>

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
                  {member.name === "Kunal Kapoor" ? (
                    <>
                      {/* Show first paragraph always */}
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {member.description[0]}
                      </p>

                      {/* Expandable content */}
                      <AnimatePresence>
                        {expandedMember === member.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-3 overflow-hidden"
                          >
                            {member.description.slice(1).map((para, i) => (
                              <p key={i} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                {para}
                              </p>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Read More / Read Less Button */}
                      <button
                        onClick={() => toggleExpanded(member.name)}
                        className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-medium text-sm transition-colors mt-2"
                      >
                        {expandedMember === member.name ? (
                          <>
                            Read Less
                            <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            Read More
                            <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </>
                  ) : (
                    member.description.map((para, i) => (
                      <p key={i} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {para}
                      </p>
                    ))
                  )}
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
                  {/* Avatar with LinkedIn Icon */}
                  <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden"
                    >
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-3xl sm:text-4xl font-bold text-primary">
                          {member.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      )}
                    </motion.div>
                    {/* LinkedIn Icon */}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#0A66C2] hover:bg-[#004182] rounded-full flex items-center justify-center shadow-lg transition-colors"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                  </div>

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

      <WhatsAppCommunity />
      <Footer />
    </main>
  );
};

export default OurTeam;
