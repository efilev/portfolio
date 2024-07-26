import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import expressAngularImg from "@/public/ExpressAngularSite.png";
import openGLImg from "@/public/OpenGLScene.png";
import plannaDailyImg from "@/public/PlannaDaily.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "openGL 3D scene",
    description:
      "openGL and C++ used to transform a set of basic meshes into a complex 3D scene including a coffee cup, candle, envelope and pencil on a deskpad.",
    tags: ["OpenGL", "C++"],
    imageUrl: openGLImg,
  },
  {
    title: "android",
    description:
      "an Android app designed for the Google Pixel. this simple app provides a view of your month, week and day with a list of upcoming events. you can add as many events as you like and schedule SMS reminders for any future event.",
    tags: ["android"],
    imageUrl: plannaDailyImg,
  },
  {
    title: "full stack",
    description:
      "created a static HTML Express page and converted it to a dynamic Angular website with a frontend and backend. later migrated to the cloud using Docker and AWS",
    tags: [
      "JavaScript",
      "MongoDB",
      "HTML",
      "CSS",
      "Node.js",
      "Angular",
      "Git",
      "AWS",
    ],
    imageUrl: expressAngularImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "Android",
  "AWS",
  "OpenGL",
] as const;
