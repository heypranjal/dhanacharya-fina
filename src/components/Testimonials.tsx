import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

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