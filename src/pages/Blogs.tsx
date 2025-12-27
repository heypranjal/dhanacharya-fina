import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Clock, ArrowRight, User, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts, getPillarPost, clusterLabels } from "@/data/blogPosts";
import { BlogPost } from "@/types/blog";

type ClusterFilter = "all" | BlogPost["cluster"];

const Blogs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState<ClusterFilter>("all");

  const pillarPost = getPillarPost();
  const filteredPosts =
    activeFilter === "all"
      ? blogPosts.filter((post) => !post.isPillar)
      : blogPosts.filter((post) => post.cluster === activeFilter && !post.isPillar);

  const filterButtons: { key: ClusterFilter; label: string }[] = [
    { key: "all", label: "All Articles" },
    { key: "core", label: clusterLabels.core },
    { key: "pricing", label: clusterLabels.pricing },
    { key: "advisory", label: clusterLabels.advisory },
    { key: "platform", label: clusterLabels.platform },
  ];

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
              Pre-IPO & Unlisted Shares Insights
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-4 sm:mb-6">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
              Expert insights on pre-IPO investments, unlisted shares, valuations, and strategies to help you make informed decisions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillar Post Section */}
      {pillarPost && (
        <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-10 sm:mb-12"
            >
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-500/10 text-amber-600 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Star className="w-4 h-4" />
                Complete Guide
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Start <span className="text-primary">Here</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
                New to pre-IPO investing? Begin with our comprehensive pillar guide
              </p>
            </motion.div>

            {/* Pillar Post Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <Link to={`/blogs/${pillarPost.slug}`} className="block">
                <div className="bg-gradient-to-br from-primary/5 to-amber-500/5 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 group">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <img
                        src={pillarPost.image}
                        alt={pillarPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                          {pillarPost.category}
                        </span>
                        <span className="px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-medium">
                          Pillar Guide
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {pillarPost.author}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {pillarPost.date}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {pillarPost.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                        {pillarPost.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                        {pillarPost.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-primary font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
                        <span>Read Complete Guide</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filter Tabs */}
      <section className="py-8 bg-muted/30 border-y border-border/50 sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {filterButtons.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-white text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Blog Posts Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-4 sm:mb-6">
              {activeFilter === "all" ? "All" : clusterLabels[activeFilter]}{" "}
              <span className="text-primary">Articles</span>
            </h2>
            <p className="text-sm sm:text-base text-secondary-foreground/70 max-w-xl mx-auto">
              {activeFilter === "all"
                ? "Browse through our collection of insights on pre-IPO and unlisted share investments"
                : `Explore our articles on ${clusterLabels[activeFilter].toLowerCase()}`}
            </p>
          </motion.div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-secondary-foreground/70">
                No articles found in this category. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Link
                    to={`/blogs/${post.slug}`}
                    className="block bg-white/10 backdrop-blur-sm border border-secondary-foreground/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 group h-full"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-3 mb-3 text-xs text-secondary-foreground/60">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-heading font-bold text-secondary-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-secondary-foreground/70 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA Section */}
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
              Ready to Explore Pre-IPO Opportunities?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              Get expert guidance from Dhanacharya Advisors. We help you access quality pre-IPO investments with confidence.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-colors"
              >
                Get Started
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blogs;
