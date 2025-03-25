import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  starbucks,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Development",
    icon: web,
  },
  {
    title: "Frontend Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SDE Intern",
    company_name: "Kleiba Private Limited",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - April 2023",
    points: [
      "Managed the successful migration of the code-base from React.JS to Next.JS, resulting 40% reduction in response time, leading to faster website loading and improved SEO rankings.",
      "Improved the Blogs page of the website utilizing Next.js and API integration to efficiently retrieve database-stored information, achieving a 21% improvement in post rendering speed.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "IIEST Shibpur",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Sept 2024 - Feb 2025",
    points: [
      "Quantum Cryptography for IIoT Security",
      "Conducted performance analysis, demonstrating up to 30% higher resilience against quantum-based cyberattacks compared to classical Machine Learning methods.",
      "Achieved 93% detection accuracy using QSVM, surpassing classical SVM models by 15%, and improved anomaly classification precision with QNN to 91%, reducing false positives by 22%.",
      
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Knight at Leetcode, rated 1907, placed among top 4.5% of users worldwide.",
    name: "LeetCode",
    //link: "https://leetcode.com/rupantar99/",
    // designation: "CFO",
    // company: "Acme Co",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },

  // <a href="https://leetcode.com/u/rupantar99/" target="_blank" rel="noopener noreferrer">
  // LeetCode Profile
  // </a>

  {
    testimonial:
      "Ranked 2/804 teams in the E-Summit’22 conducted by IIT Indore",
    name: "Hackathon",
    // designation: "COO",
    // company: "DEF Corp",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "4 star at CodeChef, highest rating of 1803, among the top 5% of Indian users",
    name: "Codechef",
    // designation: "CTO",
    // company: "456 Enterprises",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Cars Quest",
    description:
      "Deployed a Car Rental website integrated with Google Authentication via Clerk. Implemented advanced filtering options, seamless user interface leading to substantial decrease in bounce rates by 12% , with a secure booking database.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/rupantar99/Rental-Cars",
  },
  {
    name: "Job Hunt",
    description:
      "Built a responsive Job Portal with Admin Dashboard and enhanced User authentication system. Developed a powerful Search mechanism with category and location filters, reducing search query response time to an average of 0.3 seconds",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/rupantar99/JobHunt",
  },
  {
    name: "Blood Bank Website",
    description:
      "Designed an efficient Blood Inventory Management System for blood banks with real-time analytics. Reduced response time to critical blood requests by optimizing stock levels , preventing wastage by 17% and integrated search functionality to boost information retrieval speed.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/rupantar99/Blood-Bank",
  },
];

export { services, technologies, experiences, testimonials, projects };
