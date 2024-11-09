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
  kotlin,
  raion,
  incareerr,
  ecowardrobe,
  greecle,
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
    title: "Product Manager",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Android Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
  {
    name: "typescript",
    icon: typescript,
  }
];

const experiences = [
  {
    title: "Product Manager Internship",
    company_name: "Raion Community",
    icon: raion,
    iconBg: "#383E56",
    date: "March 2023 - April 2023",
    points: [
      "I've been assist in market research to identify trends, customer needs, and competitive landscape.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "I should compile data and findings to support product strategy.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Time Product Manager",
    company_name: "Raion Community",
    icon: raion,
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
    points: [
      "Develop and communicate a clear product vision and strategy that aligns with the team goals and market trends.",
      "I also have to identify market opportunities, conduct competitive analysis, and define the product roadmap.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "AturWaktu",
    icon: shopify,
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    points: [
      "Developing and maintaining Applications using Kotlin and Jetpack Compose Framework",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing clean Architecture to build an Useful and Readable Application",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "SembuhGambling",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Aye proved me wrong.",
    name: "Handedius Sando",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Sadrach Harmasantyo",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Johannes Bernard",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "InCareer",
    description:
      "Android based application that allows disabilities user can search their job based on deficiency and implementation with Kotlin & Jetpack Compose Environment",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "notion",
        color: "green-text-gradient",
      },
      {
        name: "kotlin",
        color: "pink-text-gradient",
      },
    ],
    image: incareerr,
    source_code_link: "https://github.com/",
  },
  {
    name: "EcoWardrobe",
    description:
      "EcoWardrobe is a unique application designed to promote sustainable fashion by offering a digital clothing library. EcoWardrobe uses AI to provide personalized recommendations based on user preferences and past interactions.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "notion",
        color: "pink-text-gradient",
      },
    ],
    image: ecowardrobe,
    source_code_link: "https://github.com/",
  },
  {
    name: "Greecle",
    description:
      "Greecle is here to provide solutions in the form of features for selecting types of waste, tracking location, to education about things that can cause environmental pollution caused by AnOrganic waste. Greecle also provides feedback to users in the form of points that can be exchanged for a variety of options, so that users can choose the right type of waste. ",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      
      {
        name: "compose",
        color: "pink-text-gradient",
      },
    ],
    image: greecle,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
