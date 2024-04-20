import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";

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
] as const; // as const is used to infer it is a readonly array with readonly elements name and hash

export const experiencesData = [
  {
    title: "Software Engineer",
    company: "Ludwig VS",
    description:
      "Engineered an innovative WCAG Accessibility Dashboard using React and Hooks to enable real-time monitoring of web interfaces within an IDE, resulting in a 40% decrease in reported accessibility issues by engineering teams.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
  {
    title: "Software Engineer",
    company: "EBMUD",
    description:
      "Developed Flask API integration with React-Redux front-end for a web app that fetches data from AWS S3 and displays it in a table with sorting and filtering. The app is used by the wastewater department to track percipatation data.",
    icon: React.createElement(FaReact),
    date: "2020 - 2023",
  },
  {
    title: "Civil Engineer",
    company: "EBMUD",
    description:
      "Oversaw long term engineering projects as lead technical engineer coordinating with a cross-functional team of 8-10 engineers to design complex infrastructure and deploy project deliverables within budget and schedule.",
    icon: React.createElement(FaReact),
    date: "2015 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "OpenForge",
    description:
      "Developed platform for engineers to collaborate on open source projects. Designed smooth and responsive  UI/UX and implemented search filtering and sorting functionality.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: corpcommentImg,
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
  "Tailwind CSS",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "AWS (EC2, S3, RDS)",
  "Docker",
  "CI/CD (GitHub Actions)",
  "REST API",
  "Jest",
] as const;