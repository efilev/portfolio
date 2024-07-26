"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 text-zinc-900 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>about me</SectionHeading>
      <p className="mb-5">
        i&apos;m a recent grad with a B.S in computer science & software
        engineering.
      </p>
      <p className="mb-5">
        i&apos;m a lifelong puzzle solver and found the most fulfilling puzzles
        to solve in programming. coming from a school that prioritizes projects,
        i&apos;m ready to build upon what i&apos;ve learned and created.
      </p>
      <p className="mb-5">
        outside of coding you can find me researching recipes and creating a
        tornado in my kitchen. i also have a not-so-secret love for astronomy -
        an astronomy class in college cemented my transition to the STEM field
        after majoring in journalism for 2 years.
      </p>
    </motion.section>
  );
}
