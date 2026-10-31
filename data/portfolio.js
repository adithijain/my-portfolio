import {
  Wallet,
  HeartHandshake,
  Rocket,
  Globe,
  Code,
  Wrench,
  MessageSquare,
  Terminal,
} from "lucide-react";

/* ------------------------------------------------------------------
   All the text on your site lives in this one file.
   To change something, edit it here - no need to touch the pages.
------------------------------------------------------------------- */

export const profile = {
  name: "Adithi Jain",
  email: "adithij04@gmail.com",
  phone: "+91 9353260983",
  phoneLink: "+919353260983",
  location: "India",
  linkedin: "https://www.linkedin.com/in/adithi-jain-labb26381",
  github: "https://github.com/adithijain",
 
};

export const about = {
  summary:
    "I am a second-year undergraduate student with a growing interest in software, problem solving, and digital creation. I enjoy building useful systems, understanding real-world problems, and turning ideas into practical solutions. My strengths include communication, structured thinking, and consistent learning.",
  interests: [
    "Software development",
    "Problem solving",
    "Design",
    "Digital creation",
  ],
  goals:
    "I want to keep growing as a developer by building practical projects, strengthening my problem-solving skills, and learning from real-world work.",
};

export const education = [
  {
    title: "Undergraduate Engineering",
    detail: "Second-year student",
    institution: "Sahyadri College of Engineering and Management", // add your college name here, e.g. "XYZ Institute of Technology"
    period: "2025-2029", // add the years here, e.g. "2024 - 2028"
  },
];

export const skillGroups = [
  { title: "Programming", icon: Terminal, items: ["Python", "C++", "Java"] },
  {
    title: "Web development",
    icon: Globe,
    items: ["Next.js", "React", "JavaScript", "CSS"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Vercel"],
  },
  {
    title: "Soft skills",
    icon: MessageSquare,
    items: ["Communication", "Problem Solving"],
  },
];

export const projects = [
  {
    title: "Expense Tracker",
    icon: Wallet,
    description:
      "Built a practical expense-tracking app to manage spending, categorize expenses, and improve personal budgeting habits.",
    tech: [], // e.g. ["Python", "SQLite"]
    github: "", // paste the repo link to show a Code button
    demo: "", // paste a live link to show a Live demo button
  },
  {
    title: "Donation Tracker",
    icon: HeartHandshake,
    description:
      "Created a donation tracking system to monitor contributions, totals, and records in a structured and efficient way.",
    tech: [],
    github: "",
    demo: "",
  },
  {
    title: "Personal Portfolio",
    icon: Code,
    description:
      "This website. A responsive, multi-page portfolio with a dark and light theme, a validated contact form, and reusable components.",
    tech: ["Next.js", "React", "CSS", "Lucide React", "Vercel"],
    github: "https://github.com/adithijain/my-portfolio",
    demo: "https://my-portfolio-adithijain.vercel.app",
  },
  {
    title: "Ongoing Project Work",
    icon: Rocket,
    description:
      "Continuously improving my development skills by building small, problem-solving-focused projects and learning through hands-on practice.",
    tech: [],
    github: "https://github.com/adithijain",
    demo: "",
  },
];

export const experience = [
  {
    title: "TechFest, IIT Bombay",
    period: "2025",
    type: "Event attended",
    text: "Attended the TechFest at IIT Bombay in 2025, where I had the opportunity to explore innovation, technology, and inspiring ideas from the wider student and developer community.",
  },
];

export const certifications = [
  {
    title: "Claude 101",
    issuer: "Anthropic",
    detail: "Certificate No: 8wmexwimoh22",
    image: "/certificates/claude-101.png",
    file: "/certificates/claude-101.pdf",
  },
  {
    title: "Programming in C",
    issuer: "CodeChef",
    detail: "Completed 20 May 2026 • ID: b3f67cf",
    image: "/certificates/codechef-c.png",
    file: "/certificates/codechef-c.pdf",
  },
];
