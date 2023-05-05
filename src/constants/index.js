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
  kauai,
  CFH,
  onechild,
  target,
  dnd,
  archie,
  sum,
  khs,
  cfh,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UX/UI Designer",
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
    title: "Wordpress Developer",
    company_name: "Kauai Historical Society",
    icon: kauai,
    iconBg: "#ffffff",
    date: "March 2020 - April 2022",
    points: [
      "Developing and maintaining web applications using JavaScript, HTML and CSS.",
      "Collaborating with stakeholders at the Kauai Historical Society including Directors, managers, and donors.",
      "Designed and developed high-quality websites using WordPress.",
      "Created an action plan website management system for the Kauai Historical Society.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Call for Humanity",
    icon: CFH,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using JavaScript, HTML and CSS.",
      "Collaborating with stakeholders at Call for Humanity including Directors, board members, and donors.",
      "Designed and developed high-quality websites using WordPress.",
      "Worked in a team environment which included a designer, product manager, and other developers.",
      "Created an action plan website management system for Call for Humanity.",
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "One Child Canada",
    icon: onechild,
    iconBg: "#383E56",
    date: "Jan 2020 - Feb 2021",
    points: [
      "Developing and maintaining web applications using WordPress while working with HTML and CSS.",
      "Collaborating with stakeholders at Call for Humanity including Directors, board members, and donors.",
      "Designed and developed high-quality websites using WordPress.",
      "Worked in a team environment which included a designer, product manager, and other developers.",
      "Created an action plan website management system for Call for Humanity.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Walking through our website redesign with Tanvir has been a wonderful journey. Tanvir's expertise, attention to detail, and great personality has made this such an enjoyable and rewarding experience. We've already received so much positive feedback from our members and friends of Kauai Historical Society. Mahalo Tanvir!",
    name: "Delia A.",
    designation: "Executive Administrator",
    company: "Kuai Historical Society",
    image:
      "https://d20xup02wxfuga.cloudfront.net/images/profiles/ae4a33313b9b4772b60367ee7d2ee0a1_175x175_cropped.jpg",
  },
  {
    testimonial:
      "Tanvir was enthusiastic and fun to work with. He was well prepared for the call and offered great advice. I had a lot of questions so we didn't finish in the allotted hour, Tanvir offered to stay on the call until we got through my list. Highly recommended!",
    name: "Gillian H.",
    designation: "Director",
    company: "Justicewise",
    image:
      "https://d20xup02wxfuga.cloudfront.net/images/profiles/9a9bdc1dc9db43d882f4fd9bc53eac75_175x175_cropped.jpg",
  },
  {
    testimonial:
      "Tanvir was very helpful and enthusiastic about the project. Our site is pretty barebones and he still had a bunch of great (and tangible) suggestions! I look forward to working together again.",
    name: "Maria N.",
    designation: "Outreach Coordinator",
    company: "San Geronimo Valley Affordable Housing Association",
    image:
      "https://d20xup02wxfuga.cloudfront.net/images/profiles/a1956e454c7b441380dec89025002b52_175x175_cropped.png",
  },
];

const projects = [
  {
    name: "Target Location Search",
    description:
      "This is a web application that allows users to search for Target property/store locations and obtain the address, city, state, and zip code of the location. In addition, the application embeds a Google map into the page for each location searched. The application also contains sign up, sign in, log out, and guest functions to enhance user experience.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "Node JS",
        color: "red-text-gradient",
      },
      {
        name: "Express JS",
        color: "pink-text-gradient",
      },
    ],
    image: target,
    source_code_link: "https://github.com/Bright-Verdant/Target-Application",
  },
  {
    name: "DnD Encounter Creator",
    description:
      "A Dungeons and Dragons (DnD) 5th Edition encounter builder for Dungeon Masters (DMs). The application allows DMs to create and track combat encounters for their DnD campaigns, giving them the ability to add monsters for their players to fight using a DnD 5e API linked to a database for monster stat sheets, while being able to track player character and enemy stats such as health and armour class. The application also allows the user to create an encounter for future use, and has a link to an external Spotify API to add background music to the fight.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: dnd,
    source_code_link: "https://github.com/tanvirkhon/dnd-encounter-creator",
  },
  {
    name: "Sumz",
    description:
      "A AI text article summarizer that uses OPENAI's GPT-3 API to generate summaries of text articles. The application uses a state-of-the-art neural network to generate summaries of text articles.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: sum,
    source_code_link: "https://github.com/tanvirkhon/ai-website",
  },
  {
    name: "Archie AI Bot",
    description:
      "A AI conversational bot that uses OpenAI's GPT-3 API to generate a conversation with an AI. The application uses a state-of-the-art neural network to generate a conversation with an AI.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: archie,
    source_code_link: "https://kauaihistoricalsociety.org/",
  },
  {
    name: "Kauai Historical Society",
    description:
      "A website dedicated to the history of Kauai, a community of people who share their love for the land. The site was created using Wordpress and with high-quality HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: khs,
    source_code_link: "https://github.com/",
  },
  {
    name: "Call for Humanity",
    description:
      "A non-profit organization dedicated to support the Call for Humanity mission to help people in Bangladesh. The website was created using Wordpress and with high-quality HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: cfh,
    source_code_link: "https://callforhumanity.org/",
  },
];

export { services, technologies, experiences, testimonials, projects };
