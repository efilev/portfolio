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
    title: "Software Developer",
    location: "Hampden County Sheriff's Office | Massachusetts",
    description:
      "This is where I've landed after graduating! Here I work with C# and .NET to make WPF applications for our user base of 1,500. I also help maintain the large database, holding employee and inmate info, on Microsoft SQL Server. Currently, I am working on a project 20 years in the making, which entails programatically automating the creation, maintenance, and deletion of user accounts in Active Directory.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Travlr App",
    description:
      "A dynamic Angular app to book trips, with separate views for users and admins. Includes a custom backend for routing, auth, and storage. Later migrated to the cloud using Docker and AWS.",
    tags: [
      "JavaScript",
      "Node.js",
      "React",
      "Git",
      "AWS",
      "C#",
      ".NET",
      "MS SQL Server",
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
