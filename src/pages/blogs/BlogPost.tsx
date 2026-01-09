import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, ChevronRight, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import WhatsAppCommunity from "@/components/WhatsAppCommunity";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { getBlogContent, getRelatedPosts, blogPosts } from "@/data/blogPosts";
import { BlogPost as BlogPostType } from "@/types/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const blogContent = slug ? getBlogContent(slug) : undefined;

  if (!blogContent) {
    return (
      <main className="min-h-screen overflow-x-hidden">
        <Header />
        <section className="pt-32 pb-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-heading font-bold text-secondary-foreground mb-4">
              Blog Not Found
            </h1>
            <p className="text-secondary-foreground/70 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const { post, metaDescription, sections, faqs, breadcrumbs } = blogContent;
  const relatedPosts = getRelatedPosts(post);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <SEOHead
        title={`${post.title} | Dhanacharya Advisors`}
        description={metaDescription}
        canonicalUrl={`/blogs/${post.slug}`}
        keywords={post.keywords.join(", ")}
        faqs={faqs}
        breadcrumbs={breadcrumbs}
        articleSchema={{
          headline: post.title,
          datePublished: "2024-12-01",
          dateModified: "2024-12-20",
          author: "Dhanacharya Advisors",
        }}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-navy via-navy-light to-primary/20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.url} className="flex items-center gap-2">
                  {index < breadcrumbs.length - 1 ? (
                    <>
                      <Link
                        to={crumb.url}
                        className="hover:text-white transition-colors"
                      >
                        {crumb.name}
                      </Link>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  ) : (
                    <span className="text-white/80">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>

          {/* Category & Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-4 mb-6"
          >
            <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
              {post.category}
            </span>
            {post.isPillar && (
              <span className="px-3 py-1 bg-amber-500 text-white rounded-full text-sm font-medium">
                Pillar Guide
              </span>
            )}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-4xl"
          >
            {post.title}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 text-white/70"
          >
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3 mb-4"
            >
              <BookOpen className="w-5 h-5 text-primary" />
              <h2 className="font-semibold text-foreground">Table of Contents</h2>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid sm:grid-cols-2 gap-2"
            >
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    <span className="text-primary font-medium">{index + 1}.</span>
                    {section.heading}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#faqs"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <span className="text-primary font-medium">{sections.length + 1}.</span>
                  Frequently Asked Questions
                </a>
              </li>
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Content Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12 scroll-mt-24"
              >
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
                  {section.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {section.content}
                </p>
              </motion.div>
            ))}

            {/* Internal Links Box */}
            {relatedPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-12"
              >
                <h3 className="font-semibold text-foreground mb-4">
                  Related Articles You Might Find Helpful:
                </h3>
                <ul className="space-y-2">
                  {relatedPosts.slice(0, 4).map((related) => (
                    <li key={related.id}>
                      <Link
                        to={`/blogs/${related.slug}`}
                        className="text-primary hover:underline flex items-center gap-2"
                      >
                        <ArrowRight className="w-4 h-4" />
                        {related.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-16 lg:py-24 bg-muted/30 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-heading font-bold text-foreground mb-8 text-center"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm group"
                >
                  <summary className="p-6 cursor-pointer font-semibold text-foreground flex items-center justify-between">
                    {faq.question}
                    <ChevronRight className="w-5 h-5 transform group-open:rotate-90 transition-transform text-primary" />
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-heading font-bold text-secondary-foreground mb-8 text-center"
            >
              Continue <span className="text-primary">Reading</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {relatedPosts.slice(0, 3).map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/blogs/${related.slug}`}
                    className="block bg-white/10 backdrop-blur-sm border border-secondary-foreground/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-medium">
                        {related.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading font-bold text-secondary-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-secondary-foreground/70 line-clamp-2 mb-3">
                        {related.excerpt}
                      </p>
                      <span className="text-primary text-sm font-medium flex items-center gap-1">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
              Ready to Start Your Pre-IPO Journey?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get expert guidance from Dhanacharya Advisors. We help you access quality pre-IPO opportunities with confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                All Blogs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <WhatsAppCommunity />
      <Footer />
    </main>
  );
};

export default BlogPost;
