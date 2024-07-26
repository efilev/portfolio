"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 text-zinc-900"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.175
        }}
    >
        <SectionHeading>about me</SectionHeading>
        <p className="mb-5">
            i&apos;m a recent grad with a B.S in computer science & software engineering. 
        </p>
        <p className="mb-5">
            i&apos;m a lifelong puzzle solver and found the most fulfilling puzzles to solve in programming. coming from a school that prioritizes projects, i&apos;m ready to 
            build upon what i&apos;ve learned and created.
        </p>
        <p className="mb-5">
            outside of coding you can find me researching recipes and creating a tornado in my kitchen. i also have a not-so-secret love for astronomy - an astronomy class in college cemented my
            transition to the STEM field after majoring in journalism for 2 years.
        </p>
    </motion.section>
  )
}
