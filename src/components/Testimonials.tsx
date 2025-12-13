import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    content: "Dhanacharya helped me secure the perfect investment strategy for my business. Their expertise and personalized approach made all the difference.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "IT Professional",
    content: "The team's dedication to understanding my financial goals was impressive. They created a customized plan that perfectly aligned with my needs.",
    rating: 5,
  },
  {
    name: "Vikram Patel",
    role: "Startup Founder",
    content: "Thanks to Dhanacharya's equity fund raising services, my startup secured the funding we needed to scale. Highly recommended!",
    rating: 5,
  },
  {
    name: "Anita Reddy",
    role: "Healthcare Professional",
    content: "Professional, trustworthy, and always available. Their corporate advisory services helped us navigate complex financial decisions.",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden rounded-3xl bg-card card-shadow border border-border/50 p-8 lg:p-12 min-h-[300px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8"
                >
                  <Quote className="w-8 h-8 text-primary" />
                </motion.div>

                <p className="text-xl lg:text-2xl text-foreground/80 mb-8 leading-relaxed font-light italic">
                  "{testimonials[current].content}"
                </p>

                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-primary fill-primary" />
                    </motion.div>
                  ))}
                </div>

                <h4 className="text-xl font-heading font-bold text-foreground">
                  {testimonials[current].name}
                </h4>
                <p className="text-muted-foreground">{testimonials[current].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;