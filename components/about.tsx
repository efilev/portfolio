"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.8);

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
        i&apos;m ready to build upon what i&apos;ve already learned and created.
      </p>
      <p className="mb-5">
        outside of coding, i&apos;m usually researching recipes for food (and
        coffee), spending hours perfecting my latest finds. my rainy days are
        spent doing crosswords or playing cozy games.
      </p>
    </motion.section>
  );
}
