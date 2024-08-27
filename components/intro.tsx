"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("home", 0.25);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/emma.png"
              alt="emma's portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-pink-50 shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🌺
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl text-gray-900 font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">hello, i&apos;m emma.</span> i&apos;m a{" "}
        <span className="font-bold">software engineer</span> with a love for
        full-stack development and creating art out of code.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="bg-zinc-900 text-pink-100 px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:text-rose-300 focus:scale-110 hover:scale-110 transition cursor-pointer"
          onClick={() => {
            setActiveSection("contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          contact
        </Link>
        <a
          className="bg-pink-100 text-zinc-900 px-7 py-3 flex items-center gap-2 rounded-full border border-pink-300/[0.5] hover:text-rose-300 hover:scale-110 transition cursor-pointer"
          href="/EFR.pdf" //resume updated
          download={true}
        >
          resume <HiDownload />{" "}
        </a>
        <a
          className="bg-pink-100 text-zinc-900 p-4 flex items-center gap-2 rounded-full border border-pink-300/[0.5] hover:text-rose-300 hover:scale-110 transition cursor-pointer"
          href="https://www.linkedin.com/in/efilev/"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-pink-100 text-zinc-900 p-4 flex items-center gap-2 rounded-full border border-pink-300/[0.5] hover:text-rose-300 hover:scale-110 transition cursor-pointer"
          href="https://github.com/efilev"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
