import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Newspaper, Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import WhatsAppCommunity from "@/components/WhatsAppCommunity";
import Footer from "@/components/Footer";

const mediaArticles = [
  {
    title: "Dhanacharya Advisors LLP: Raising Capital with Conviction, Building Businesses with Belief",
    subtitle: "The Rise of India's Boutique Investment Banking Powerhouse",
    publication: "Business Standard",
    date: "May 2025",
    description: "An in-depth feature on how Dhanacharya Advisors LLP is emerging as a leading boutique investment banking firm, helping businesses raise capital and achieve their growth ambitions with conviction and belief.",
    url: "https://www.business-standard.com/amp/content/specials/dhanacharya-advisors-llp-raising-capital-with-conviction-building-businesses-with-belief-the-rise-of-india-s-boutique-investment-banking-powerhouse-125051901118_1.html",
    featured: true,
  },
];

const Media = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-secondary relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-10 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              In The News
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-4 sm:mb-6">
              Media <span className="text-primary">Coverage</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
              Discover what leading publications are saying about Dhanacharya Advisors and our impact on India's financial landscape
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section ref={ref} className="py-16 sm:py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Featured Story
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6">
              Latest <span className="text-primary">Press Coverage</span>
            </h2>
          </motion.div>

          {/* Featured Article Card */}
          {mediaArticles.filter(article => article.featured).map((article, index) => (
            <motion.a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="block max-w-4xl mx-auto"
            >
              <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-border/50 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 group">
                {/* Publication Badge */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
                    <Newspaper className="w-3 h-3 sm:w-4 sm:h-4" />
                    {article.publication}
                  </span>
                  <span className="inline-flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    {article.date}
                  </span>
                </div>

                {/* Article Content */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-primary font-medium mb-3 sm:mb-4">
                  {article.subtitle}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                  {article.description}
                </p>

                {/* Read More Button */}
                <div className="flex items-center gap-2 text-primary font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
                  <span>Read Full Article</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* All Articles Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-4 sm:mb-6">
              All <span className="text-primary">Articles</span>
            </h2>
            <p className="text-sm sm:text-base text-secondary-foreground/70 max-w-xl mx-auto">
              Browse through our media coverage and press mentions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {mediaArticles.map((article, index) => (
              <motion.a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-navy-light/30 backdrop-blur-sm border border-secondary-foreground/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <span className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {article.publication}
                  </span>
                  <span className="text-secondary-foreground/50 text-xs">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-heading font-bold text-secondary-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-secondary-foreground/70 mb-4 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
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
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              Media Inquiries?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              For press inquiries, interviews, or media partnerships, please reach out to our communications team.
            </p>
            <motion.a
              href="mailto:contact@dhanacharya.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <WhatsAppCommunity />
      <Footer />
    </main>
  );
};

export default Media;
