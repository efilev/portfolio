"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

// ****************************************
// WORKING TO ADD CLICKABILITY TO IMAGES
interface ClickProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Project(
  { title, description, tags, imageUrl }: ProjectProps,
  //{ onClick }: ClickProps
) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className="group bg-purple-50 max-w-[42rem] rounded-lg border border-purple-300/[0.3] overflow-hidden sm:pr-8 relative sm:h-[25rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:text-pink-900
      transition group-even:pl-8"
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
          <h3 className="text-2x1 font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-pink-900/[0.6] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          // onClick={onClick}
          src={imageUrl}
          alt="project"
          quality={95}
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 
        group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04]
        group-even:group-hover:translate-x-3 
        group-even:group-hover:-translate-y-3 
        group-even:group-hover:rotate-2
        transition"
        />
      </section>
    </motion.div>
  );
}
