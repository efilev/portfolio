import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import expressAngularImg from "@/public/ExpressAngularSite.png";
import openGLImg from "@/public/OpenGLScene.png";
import plannaDailyImg from "@/public/PlannaDaily.png";

export const links = [
  {
    name: "home",
    hash: "#home",
  },
  {
    name: "about",
    hash: "#about",
  },
  {
    name: "projects",
    hash: "#projects",
  },
  {
    name: "skills",
    hash: "#skills",
  },
  {
    name: "experience",
    hash: "#experience",
  },
  {
    name: "contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated university",
    location: "Southern New Hampshire University",
    description:
      "Here is where I built my foundation for a diverse set of programming skills, including full-stack development, 3D graphics, reverse software engineering, UI/UX design, and much more.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
  {
    title: "HR Assistant",
    location: "McNairn Packaging | Massachusetts",
    description:
      "Improved office efficiency by maintaining and organizing files, supported team members with project coordination and task management, collaborated with HR management to ensure all employee records were up-to-date.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2022",
  },
  {
    title: "Merchandiser",
    location: "American Greetings | Massachusetts",
    description:
      "In this role I boosted sales by creating visually appealing displays and implementing effective merchandising strategies, provided product knowledge to customers, and managed inventory levels with frequent monitoring and ordering for optimal product availability.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2025",
  },
  {
    title: "Universal Agent",
    location: "Freedom Credit Union | Massachusetts",
    description: "Responsible for cash handling and utilizing Insight software to process transactions, manage accounts, and generate reports. Frequently analyze data to identify patterns and potential issues.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - present",
  }
] as const;

export const projectsData = [
  {
    title: "Travlr App",
    description:
      "A dynamic Angular app to book trips, with separate views for users and admins. Includes a custom backend for routing, auth, and storage. Later migrated to the cloud using Docker and AWS.",
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
  {
    title: "OpenGL 3D Scene",
    description:
      "OpenGL and C++ used to transform a set of basic meshes into a complex 3D scene including a coffee cup, candle, envelope and pencil on a deskpad.",
    tags: ["OpenGL", "C++"],
    imageUrl: openGLImg,
  },
  {
    title: "Android App",
    description:
      "An Android mobile scheduling app designed for the Google Pixel. This app provides a view of your month, week and day with a list of upcoming events. Add as many events as you like and schedule SMS reminders for any future event.",
    tags: ["Android"],
    imageUrl: plannaDailyImg,
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
