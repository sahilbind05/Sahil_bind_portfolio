/**
 * Single source of truth for all portfolio content.
 * Editing copy, links, projects or skills only requires touching this file.
 */

export const siteConfig = {
  name: "Sahil Bind",
  role: "Software Developer | React · Firebase · AI Integrations",
  tagline:
    "Building responsive web apps and AI-powered platforms with React, Firebase, and modern AI APIs.",
  description:
    "Computer Science undergraduate at Noida International University with a passion for building real-world web applications. I work with Java, JavaScript, React, and Firebase, and enjoy integrating AI APIs to create intelligent, user-focused products — backed by a strong foundation in Data Structures & Algorithms.",
  url: "https://sahilbind.dev",
  email: "bindsahil9@gmail.com",
  phone: "+91 9026348539",
  resumeUrl: "/Sahil-Bind-Resume.pdf",
  social: {
    github: "https://github.com/sahilbind05",
    githubUser: "sahilbind05",
    linkedin: "https://www.linkedin.com/in/sahil-bind05",
    leetcode: "https://leetcode.com/u/sahilbind05",
    leetcodeUser: "sahilbind05",
  },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
] as const;

export const aboutHighlights = [
  "Web Development",
  "AI Integrations",
  "React.js",
  "Firebase",
  "Problem Solving (DSA)",
  "Responsive UI",
] as const;

export interface SkillGroup {
  title: string;
  icon: string; // lucide-react icon name resolved in the component
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: ["Java", "JavaScript", "Python"],
  },
  {
    title: "Frontend",
    icon: "LayoutDashboard",
    skills: ["React.js", "HTML5", "CSS", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend & Databases",
    icon: "Database",
    skills: ["Firebase Auth", "Firebase Firestore", "MongoDB"],
  },
  {
    title: "Developer Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "VS Code", "Firebase Hosting", "AI APIs"],
  },
  {
    title: "Core CS Subjects",
    icon: "GraduationCap",
    skills: ["DSA", "Operating Systems", "DBMS", "OOP", "Computer Networks"],
  },
];

export interface Project {
  title: string;
  description: string;
  features?: string[];
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Produx AI",
    description:
      "AI-powered productivity and goal-tracking platform adopted by 30+ users. Integrates Google Gemini and Groq APIs to generate personalized, domain-specific task plans from user-defined goals, with habit tracking, Pomodoro sessions, and progress analytics.",
    features: [
      "AI Goal Planning",
      "AI Task Generation",
      "Habit Tracking",
      "Pomodoro Sessions",
      "Progress Analytics",
      "Firebase Auth & Firestore Sync",
    ],
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Firebase",
      "Gemini API",
      "Groq API",
      "Recharts",
    ],
    image: "/projects/produx-ai.svg",
    liveUrl: "https://produx-ai-c6c3c.web.app/",
    githubUrl: "https://github.com/sahilbind05/produx-ai",
    featured: true,
  },
  {
    title: "AttendIQ",
    description:
      "Smart attendance management system used by 20+ students, featuring attendance tracking, analytics dashboards, and a responsive user interface. Built with vanilla web technologies and deployed on GitHub Pages.",
    features: [
      "Attendance Tracking",
      "Analytics Dashboard",
      "Responsive UI",
      "Reports",
    ],
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    image: "/projects/attendiq.svg",
    liveUrl: "https://sahilbind05.github.io/AttendIQ/",
    githubUrl: "https://github.com/sahilbind05/attendiq",
  },
];

export interface Achievement {
  label: string;
  value: number;
  suffix?: string;
  description: string;
  icon: string;
}

export const achievementStats: Achievement[] = [
  {
    label: "Projects Deployed",
    value: 2,
    description: "Real-world web apps built and shipped end to end.",
    icon: "Rocket",
  },
  {
    label: "Users Reached",
    value: 50,
    suffix: "+",
    description: "Combined users across Produx AI and AttendIQ.",
    icon: "Users",
  },
  {
    label: "AI APIs Integrated",
    value: 2,
    description: "Google Gemini and Groq integrated into production.",
    icon: "Sparkles",
  },
  {
    label: "Certifications",
    value: 6,
    description: "Morden AI,Generative AI, MongoDB, and Java certifications earned.",
    icon: "Award",
  },
];

export const achievementHighlights = [
  "Active LeetCode practitioner strengthening DSA & problem-solving skills",
  "Built and deployed real-world apps with React, Firebase, and AI APIs",
  "Integrated Google Gemini and Groq AI APIs into a production platform",
  "Strong foundation in Data Structures & Algorithms and core CS subjects",
];

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  detail?: string;
}

export const education: EducationItem[] = [
  {
    institution: "Noida International University",
    degree: "B.Tech — Computer Science and Engineering",
    period: "2023 – 2027",
    detail: "CGPA: 8.12",
  },
];

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  /** Public verification link — when set, the card becomes clickable. */
  url?: string;
}

export const certifications: Certification[] = [
   {
    title: "AI Fundamentals with IBM SkillsBuild",
    issuer: "Cisco",
    year: "2026",
     url : "https://www.credly.com/badges/218b44ba-7e04-4c91-b0b9-098d495885e6/linked_in_profile",
   },
  {
    title: "5-Day AI Agents: Intensive Vibe Coding Course",
    issuer: "Google for Developers",
    year: "2026",
    url :"https://developers.google.com/profile/badges/events/cloud/five-day-ai-agents",
  },
  {
    title: "Introduction to Modern AI",
    issuer: "Cisco",
    year: "2026",
    url : "https://www.credly.com/badges/7fdf1c81-798a-42e7-9f20-f301b26a9faa/linked_in_profile",
  },
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    year: "2026",
  },
  {
    title: "MongoDB Overview: Core Concepts and Architecture",
    issuer: "MongoDB",
    year: "2026",
    url : "https://www.credly.com/badges/79c9173b-d8ad-464f-9d0b-53f96200e93e/linked_in_profile",
  },
  {
    title: "Complete Java",
    issuer: "KnowledgeGate",
    year: "2025",
    url : "https://www.knowledgegate.ai/certificate/A9D85BB3",
  },
];

export interface TimelineItem {
  title: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    title: "Started B.Tech in Computer Science (2023)",
    description:
      "Began my Computer Science degree at Noida International University, building strong fundamentals in programming and core CS subjects.",
  },
  {
    title: "Strengthened DSA & Problem Solving",
    description:
      "Developed problem-solving skills through consistent Data Structures & Algorithms practice on LeetCode.",
  },
  {
    title: "Built AttendIQ — Smart Attendance System (2026)",
    description:
      "Shipped a responsive attendance management system with analytics dashboards, used by 20+ students.",
  },
  {
    title: "Built Produx AI with Gemini & Groq (2026)",
    description:
      "Created an AI-powered productivity platform adopted by 30+ users, integrating Google Gemini and Groq APIs for personalized planning.",
  },
  {
    title: "Exploring Backend & Scalable Systems",
    description:
      "Diving deeper into databases, system design, and backend development to build more robust, production-grade applications.",
  },
];
