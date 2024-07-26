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
        <p>
            i'm a recent grad with a B.S in computer science & software engineering. i'm open to full-time work anywhere in the world.
        </p>
        <p>
            coming from a school that prioritizes projects, i'm ready to put my knowledge to work! i am a 
            lifelong puzzle solver and found the most fulfilling puzzles to solve in programming. from creating 3D 
            scenes in OpenGL, to migrating a full-stack app to the cloud on AWS, to making an Android scheduling app, i am dedicated to solving problems out of each program I work on. 
            my passion has only grown with each project i have done, and i'm excited to show you what i've done so far.  i'm open to full-time work anywhere in the world.
        </p>
        <p>
            outside of coding you can find me researching recipes and creating a tornado in my kitchen. i also have a great curiosity in astronomy - an astronomy class in college shifted my 
            interest in the STEM field after a long debate between majoring in computer science or  journalism.
        </p>
    </motion.section>
  )
}
