"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("about", 0.8);

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
        I&apos;m a recent grad with a B.S in computer science & software
        engineering.
      </p>
      <p className="mb-5">
        I&apos;m a lifelong puzzle solver and found the most fulfilling puzzles
        to solve in programming. Coming from a school that prioritizes projects,
        I am ready to build upon what I&apos;ve already learned and created.
      </p>
      <p className="mb-5">
        Outside of coding, I&apos;m usually researching recipes for food (and
        coffee).
      </p>
    </motion.section>
  );
}
