"use client";
import React from "react";
import { motion } from "framer-motion";

export interface Testimonial {
  text: string;
  image?: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div
                  className="p-8 rounded-3xl border border-border/50 bg-card card-shadow max-w-xs w-full"
                  key={i}
                >
                  <div className="text-foreground/80 leading-relaxed italic">
                    "{text}"
                  </div>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="flex flex-col">
                      <div className="font-heading font-medium tracking-tight leading-5 text-foreground">
                        {name}
                      </div>
                      <div className="leading-5 text-muted-foreground text-sm tracking-tight">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
