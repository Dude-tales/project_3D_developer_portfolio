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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  logo,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Data Science & MLOps Engineer (full time)",
    company_name: "Careem (Uber Inc.)",
    icon: tesla,
    iconBg: "#383E56",
    date: "May 2023 – Current",
    points: [
      "Developed a pseudonymisation script ensuring data privacy before sharing with other parties, completed within 7 days, using Clean Code design principles.",
      "Participated in collaborative academic projects, conducting dataset analysis & evaluating Machine Learning models for supply/demand prediction, CLTV calculation & fraud detection, while prioritizing rapid script development and thorough documentation to facilitate comparisons with current production models.",
    ],
  },
  {
    title: "Lab/Software Developer (Part Time)",
    company_name: "Al Nafi",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sept 2022 – Apr 2023",
    points: [
      "Developed hands-on applications using AWS tools (Transcribe, Polly, Code Pipeline, Fraud Detector and Face Detector) and DApps (Ganache and Truffle) in 2 days each.",
      "Customizing an open source CRM based on React and Django to increase sales team productivity by 80%.",
      "Led a team of 7+ members to set up and customize LMS and CMS using the OpenEdx platform",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "10 Pearls",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Designed a web-based travel itinerary application using Angular 13, Express and Mongo, following MVC design pattern and industry best practices. Utilized domain-driven and test-driven approach, achieving 90% test coverage with Jest for unit testing.",
      "Developed a component for a top US-based security company portal in 2 days, using Agile method and i18n translation for the report display component. Explained the codebase to colleagues for better understanding",
    ],
  },
  {
    title: "Web Developer & UI/UX Intern",
    company_name: "Enzyme Digital",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2021 - Aug 2021",
    points: [
      "Designed SEO-friendly and responsive E-commerce and corporate webapplication in 12 weeks. Analyzed client's requirements and used agency's pre-build sections to aim for 90%+ performance with quick delivery.",
      "Improved 100% web traffic accuracy while integrating Facebook Pixel and Google tag, and reduced employee time developing a React-based application to automate a 4-hour daily task, cutting time in half",
      "Developed a report display component with i18n for a top US-based security company portal in two days. Explained the code design to colleagues so they can start.",
    ],
    },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ahmed proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ahmed does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ahmed optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ML-Language Detector",
    description:
      "Detect languages (English, Urdu, Punjabi, and mixed) from the voices of multiple people. Multiple models of ML including kNN Classifier, Logistic Regression, Decision Trees, Random Forests with ensemble method, neural networks, and SVMs are used.",
    tags: [
      {
        name: "Python Scikit-Learn",
        color: "blue-text-gradient",
      },
      {
        name: "Python Script",
        color: "green-text-gradient",
      },
      {
        name: "NumPy",
        color: "pink-text-gradient",
      },
      {
        name:"Machine Learning Model",
        color:"blue-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ahmedtahirshekhani/Machine-Learning-Project---Language-Detection",
  },
  {
    name: "UWaterloo - Folder Management DnD",
    description:
      "Developed Folder Management System with CRUD Features, with Drag and Drop.",
    tags: [
      {
        name: "PHP Script",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "App Development",
        color: "green-text-gradient",
      },
      {
        name: "Custom PHP",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Responsive Design",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://esg-reporting.uwaterloo.ca/library/",
  },
  {
    name: "Fikta - Customized ERP",
    description:
      "Fikta - A React-based project similar to an ERP system for maintaining order, return, replacement, delivery, and payment records. Create new products and start publishing their orders to keep records.",
    tags: [
      {
        name: "Enterprise Resource Planning",
        color: "blue-text-gradient",
      },
      {
        name: "ERP Software",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Problem Solving",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Web Development",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ahmedtahirshekhani/fikta-erps",
  },
  {
    name: "Mint It — Blockchain",
    description:
      "A group-based project where we developed a web application to connect NFT in the supply chain. In this users can easily fetch the details of the NFT asset and register the NFT on the Stacks blockchain which provides smart contract layering over the Bitcoin blockchain.",
    tags: [
      {
        name: "Blockchain Architecture",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Responsive Design",
        color: "pink-text-gradient",
      },
      {
        name: "API Integration",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
    ],
    image: logo,
    source_code_link: "https://github.com/ahmedtahirshekhani/",
  },
];

export { services, technologies, experiences, testimonials, projects };
