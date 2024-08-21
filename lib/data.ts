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
    title: "graduated university",
    location: "Southern New Hampshire University",
    description:
      "here is where i built my foundation for a diverse set of programming skills, including full-stack development, 3D graphics, reverse software engineering, UI/UX design, and much more.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
  {
    title: "HR assistant",
    location: "McNairn Packaging | Westfield, MA",
    description:
      "improved office efficiency by maintaining and organizing files, supported team members with project coordination and task management, collaborated with HR manager to ensure all employee records were up-to-date.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2022",
  },
  {
    title: "merchandiser",
    location: "American Greetings | Holyoke, MA",
    description:
      "currently i am a merchandiser. in this role i boost sales by creating visually appealing displays and implementing effective merchandising strategies, provide product knowledge to customers, and manage inventory levels with frequent monitoring and ordering for optimal product availability.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
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
