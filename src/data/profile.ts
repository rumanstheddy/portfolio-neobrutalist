// Type definitions
export interface MainInfo {
  name: string;
  email: string;
  logo: string;
}

export interface SocialLinks {
  twitter: string;
  github: string;
  linkedin: string;
  instagram: string;
  stackoverflow: string;
  facebook: string;
}

export interface HomepageInfo {
  title: string;
  description: string;
  greetings: string[];
}

export interface ExperiencePosition {
  title: string;
  company: string;
  companyLogo: string;
  duration: string;
  bullets: string[];
}

export interface EducationItem {
  university: string;
  logo: string;
  degree: string;
  duration: string;
}

export interface AboutInfo {
  title: string;
  description: string;
  download: {
    link: string;
    text: string;
  };
  experience?: ExperiencePosition[];
  education?: EducationItem[];
}

export interface ArticlesInfo {
  title: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  linkText: string;
  link: string;
}

export interface ProjectsInfo {
  title: string;
  description: string;
  list: ProjectItem[];
}

export interface ProfileInfo {
  main: MainInfo;
  socials: SocialLinks;
  homepage: HomepageInfo;
  about: AboutInfo;
  articles: ArticlesInfo;
  projects: ProjectsInfo;
}

// Utility function
export const buildImgShieldLink = (
  techName: string,
  bgColor: string,
  logoColor: string,
  logoName?: string,
): string => {
  const logo = logoName
    ? logoName
    : techName
        .toLowerCase()
        .replace(/[^a-zA-Z0-9\s.]/g, "")
        .split(" ")
        .join("");
  return `https://img.shields.io/badge/-${techName}-${bgColor}?logo=${logo}&logoColor=${logoColor}&style=for-the-badge&logoWidth=30`;
};

const defaultBgColor = "141414";

const profileInfo: ProfileInfo = {
  main: {
    name: "Sumanth",
    email: "sumanthcob@gmail.com",
    logo: "../logo.png",
  },
  socials: {
    twitter: "https://twitter.com/",
    github: "https://github.com/rumanstheddy",
    linkedin: "https://www.linkedin.com/in/sumanthcob/",
    instagram: "https://instagram.com/",
    stackoverflow: "https://stackoverflow.com/",
    facebook: "https://facebook.com/",
  },
  homepage: {
    title: "I'm Sumanth 👋",
    description:
      "A Full-Stack Engineer with a specialized focus on Frontend Development. Based in Raleigh NC, I build high-performance, accessible web applications using React, TypeScript, and Node. I'm passionate about open-source, web technologies, and building cool stuff.",
    greetings: ["Hey", "Namaste", "नमस्ते", "నమస్కారం"],
  },
  about: {
    title: "About",
    description:
      "Dive into my journey – from academic milestones to professional endeavours. Discover my story in a resumé format.",
    download: {
      link: "https://dl.dropboxusercontent.com/scl/fi/m3ejqbey5pj1pedrzwztl/Sumanth-Reddy-Resume.pdf?rlkey=yw6uhdxolu8xhfsgcmflvb0b6&st=g6va213b&dl=0",
      text: "My Resumé",
    },
    education: [
      {
        university: "Northeastern University",
        logo: "/NEU.png",
        degree: "Master of Science - Computer Science",
        duration: "Sept 2019 - May 2021",
      },
      {
        university: "BML Munjal University",
        logo: "/bmu.jpg",
        degree: "Bachelor of Technology - Computer Science and Engineering",
        duration: "Jan 2015 - July 2019",
      },
    ],
    experience: [
      {
        title: "Front-end Software Engineer",
        company: "U.S. Bank",
        companyLogo: "/usbank.jpg",
        duration: "Jun 2021 - Present",
        bullets: [
          "Piloted front-end development of the treasury portal's cash-ordering module utilizing React and TypeScript, integrating accessible features that enhanced adoption by approximately 25% based on A/B testing.",
          "Collaborated with designers and backend engineers to build pixel-perfect, responsive UIs for desktop and mobile using React.js, HTML, CSS, and SASS.",
          "Optimized front-end performance by ~10% via techniques like code splitting, image optimization for enhanced UX.",
          "Utilized AWS S3 for static asset hosting and CloudFront for global content delivery of the front-end application, ensuring high performance and availability.",
          "Designed and implemented scalable React components utilizing the company's UI framework, which accelerated feature deployment cycles by 30% enhancing cash-ordering module adoption.",
          "Refactored existing state logic from local component state to Redux store, improving state traceability and debugging efficiency across the app.",
          "Leveraged Redux middleware (Thunk) for managing asynchronous API calls, enhancing performance and error handling in user interactions.",
          "Designed a REST API wrapper with Java Spring Boot, improving code maintainability ratings from 2/4 to 4/4 among engineers.",
          "Advanced application security by composing 100+ Jest suites, elevating test coverage to address critical vulnerabilities and securing a personal achievement of running tests in under 3 minutes.",
          "Mentored two offshore developers, ensuring seamless onboarding and faster project delivery.",
          "Facilitated Agile practices including sprint planning, daily stand-ups, and retrospectives to ensure timely product releases.",
        ],
      },
      {
        title: "Software Engineer Intern",
        company: "Cyient",
        companyLogo: "/cyient.jpg",
        duration: "Jan 2019 - Jul 2019",
        bullets: [
          "Built an employee performance dashboard using Angular, TypeScript, HTML, and CSS; displayed productivity KPIs and resolved the top three causes of workflow bottlenecks, boosting team efficiency by 15%.",
          "Integrated real-time data feeds into the dashboard using REST APIs, displaying user engagement metrics with an average latency of under 300ms.",
          "Collaborated with two other interns to improve the overall functionality and user experience of the dashboard.",
        ],
      },
    ],
  },
  articles: {
    title:
      "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
    description:
      "Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
  },
  projects: {
    title: "My Projects",
    description:
      "I've been involved in diverse projects throughout my career, and I take pride in the strides we've made. If any of these projects catch your interest, explore the code and share any suggestions for improvements or enhancements. Collaboration is a fantastic opportunity for learning and development, and I welcome new ideas and feedback with open arms. Feel free to connect and share your insights!",
    list: [
      {
        title: "SeizureCare",
        description:
          "Designed and developed SeizureCare, a responsive website with React, Material UI, and SCSS, enabling EEG test requests and customer service enquiries while optimizing performance to a 90+ score on Lighthouse.",
        tech: [
          buildImgShieldLink("JavaScript", defaultBgColor, "F7DF1E"),
          buildImgShieldLink("React", defaultBgColor, "61DAFB"),
          buildImgShieldLink("Sass", defaultBgColor, "CC6699"),
          buildImgShieldLink("AWS Amplify", defaultBgColor, "8C6FE6"),
          buildImgShieldLink("Lighthouse", defaultBgColor, "E34F26"),
          buildImgShieldLink("NodeJS", defaultBgColor, "339933", "node.js"),
        ],
        linkText: "View Project",
        link: "https://seizurecarenet.com/",
      },
      {
        title: "Playscore Pal",
        description:
          "Playscore Pal is a web-based platform built with Next.js, Node.js, Express, GraphQL, and MongoDB, utilizing the IGDB API. It empowers users to rate, review, and recommend games.",
        tech: [
          buildImgShieldLink("Typescript", defaultBgColor, "3178C6"),
          buildImgShieldLink("Next.js", defaultBgColor, "FFFFFF", "next.js"),
          buildImgShieldLink("MongoDB", defaultBgColor, "47A248"),
          buildImgShieldLink("GraphQL", defaultBgColor, "DA0393"),
          buildImgShieldLink("Tailwind CSS", defaultBgColor, "06B6D4"),
          buildImgShieldLink("NodeJS", defaultBgColor, "339933", "node.js"),
        ],
        linkText: "View Project",
        link: "https://github.com/rumanstheddy/ss-play-score-pal",
      },
      {
        title: "Textful",
        description:
          "Textful is a web-based application, made using React, Node.js and MongoDb that enables its users to exchange text messages directly.",
        tech: [
          buildImgShieldLink("JavaScript", defaultBgColor, "F7DF1E"),
          buildImgShieldLink("React", defaultBgColor, "61DAFB"),
          buildImgShieldLink("MongoDB", defaultBgColor, "47A248"),
          buildImgShieldLink("CSS3", defaultBgColor, "1572B6"),
          buildImgShieldLink("NodeJS", defaultBgColor, "339933", "node.js"),
          buildImgShieldLink("Express", defaultBgColor, "FFFFFF"),
        ],
        linkText: "View Project",
        link: "https://github.com/rumanstheddy/project-textful",
      },
      {
        title: "Meteoscope",
        description:
          "Meteoscope is a weather forecast app I made using React, Chakra UI and Open Meteo API.",
        tech: [
          buildImgShieldLink("JavaScript", defaultBgColor, "F7DF1E"),
          buildImgShieldLink("React", defaultBgColor, "61DAFB"),
          buildImgShieldLink("chakra--ui", defaultBgColor, "67C9CB"),
          buildImgShieldLink("NodeJS", defaultBgColor, "339933", "node.js"),
        ],
        linkText: "View Project",
        link: "https://github.com/rumanstheddy/meteoscope",
      },
      {
        title: "AngularChrono",
        description:
          "Exploring Angular basics and SASS, I built a hands-on mobile-responsive Stop Watch web app.",
        tech: [
          buildImgShieldLink("Angular", defaultBgColor, "D70230"),
          buildImgShieldLink("Typescript", defaultBgColor, "3178C6"),
          buildImgShieldLink("Sass", defaultBgColor, "CC6699"),
          buildImgShieldLink("NodeJS", defaultBgColor, "339933", "node.js"),
        ],
        linkText: "View Project",
        link: "https://github.com/rumanstheddy/Ang-Stop-Watch",
      },
    ],
  },
};

export default profileInfo;
