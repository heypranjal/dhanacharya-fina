import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, Star, ChevronDown, ChevronUp } from "lucide-react";

const testimonials = [
  {
    name: "Ruchika Handa",
    role: "Journalist",
    content: "Prompt, helpful, knowledgable and informative! Kunal and the team were great. We appreciated all of their efforts, they went above and beyond to ensure we were happy with everything and were extremely helpful through every step of the process!",
    rating: 5,
  },
  {
    name: "Vipin Sehgal",
    role: "Senior Advocate",
    content: "DhanAcharya team provides an excellent service, be it on a business or on a personal level. I have found the company's advice regarding investment opportunities particularly helpful – everything is explained fully, no matter how complex the subject.",
    rating: 5,
  },
  {
    name: "Mahender Kataria",
    role: "Businessman & Politician",
    content: "These guys from DhanAcharya Advisors made the process of buying our dream home possible! We can't thank them enough. From the moment we found the house to the moment we moved in they were very helpful in every step of the way.",
    rating: 5,
  },
  {
    name: "Umesh Paliwal",
    role: "UnlistedZone",
    content: "UnlistedZone has worked with Dhawal Pant from Dhanachharya Advisors for buying and selling unlisted shares, and we have found the team to be extremely professional. Based on our experience, we would confidently recommend engaging with them without any hesitation.",
    rating: 5,
  },
  {
    name: "Rajesh Garg",
    role: "Client",
    content: "We had a fantastic experience working with Dhanacharya Advisors LLP. Their team is highly professional, responsive, and deeply knowledgeable. They guided us through a complex transaction with confidence and clarity. We especially appreciated their strategic insights and ability to negotiate favorable terms. Highly recommended for anyone seeking top-tier investment banking support.",
    rating: 5,
  },
  {
    name: "Sasha Sanwal",
    role: "Client",
    content: "Dhawal and team are very proactive in searching for new ideas as well as understanding industry trends which together with a strong and growing network provides a very powerful value proposition for clients.",
    rating: 5,
  },
  {
    name: "Vipin Aggarwal",
    role: "Client",
    content: "Dhawal and Kunal make an excellent duo. They are extremely hardworking and well networked into financial fraternity. Best thing is they complete all assignments they sign on. Best Wishes to them.",
    rating: 5,
  },
  {
    name: "Zakir Hussain",
    role: "Client",
    content: "Great people, in depth knowledge and the Skin in the game philosophy sets Dhanacharya aparts and especially founders are gems of persons.",
    rating: 5,
  },
  {
    name: "Harish Lakhera",
    role: "Client",
    content: "Excellent guys to work with, indepth market knowledge and great industry connects.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative p-6 sm:p-8 border border-secondary-foreground/10 rounded-xl bg-secondary/30 backdrop-blur-sm hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300 cursor-pointer"
    >
      {/* Quote Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
        className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
      >
        <Quote className="w-5 h-5 text-primary" />
      </motion.div>

      {/* Number */}
      <span className="absolute top-4 right-4 text-primary/20 font-heading font-bold text-2xl group-hover:text-primary/40 transition-colors">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Content */}
      <p className="text-sm sm:text-base text-secondary-foreground/80 leading-relaxed mb-6 mt-4 italic">
        "{testimonial.content}"
      </p>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 + i * 0.05 }}
          >
            <Star className="w-4 h-4 text-primary fill-primary" />
          </motion.div>
        ))}
      </div>

      {/* Author */}
      <div className="border-t border-secondary-foreground/10 pt-4">
        <h4 className="text-base sm:text-lg font-heading font-bold text-secondary-foreground group-hover:text-primary transition-colors">
          {testimonial.name}
        </h4>
        <p className="text-sm text-primary">{testimonial.role}</p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1920"
          alt="Business meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/90" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4"
          >
            <div className="w-8 sm:w-12 h-px bg-primary" />
            <span className="text-primary text-xs sm:text-sm font-medium tracking-wide">
              Testimonials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-foreground"
          >
            What Our <span className="text-primary">Clients Say</span>
          </motion.h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Read More / Show Less Button */}
        {testimonials.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center mt-10 sm:mt-12"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 rounded-full text-primary font-medium text-sm sm:text-base transition-all duration-300"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  Read More Reviews
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
