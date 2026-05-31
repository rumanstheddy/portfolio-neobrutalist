import { buildImgShieldLink } from "@/lib/utils";

// Type definitions
export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
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

type TechItem = {
  name: string;
  link: string;
};

export interface ProjectItem {
  title: string;
  description: string;
  tech: TechItem[];
  linkText: string;
  link: string;
}

export interface ProjectsInfo {
  title: string;
  description: string;
  contributionsNote?: string;
  contributionsLink?: string;
  list: ProjectItem[];
}

export interface ProfileInfo {
  socials: SocialLinks;
  homepage: HomepageInfo;
  about: AboutInfo;
  articles: ArticlesInfo;
  projects: ProjectsInfo;
}

const defaultBgColor = "141414";

const profileInfo: ProfileInfo = {
  socials: {
    github: "https://github.com/rumanstheddy",
    linkedin: "https://www.linkedin.com/in/sumanthcob/",
    email: "mailto:sumanthcob@gmail.com",
  },
  homepage: {
    title: "Sumanth",
    description:
      "with a specialized focus on Frontend Development. Based in Raleigh NC, I build high-performance, accessible web applications using React, TypeScript, and Node. I'm passionate about open-source, web technologies, and building cool stuff.",
    greetings: ["Hey", "Namaste", "नमस्ते", "నమస్కారం"],
  },
  about: {
    title: "Resumé",
    description: "My background, and experience in a resumé snapshot.",
    download: {
      link: "https://www.dropbox.com/scl/fi/m3ejqbey5pj1pedrzwztl/Sumanth-Reddy-Resume.pdf?rlkey=yw6uhdxolu8xhfsgcmflvb0b6&st=zznnpkn7&dl=0",
      text: "Download",
    },
    education: [
      {
        university: "Northeastern University",
        logo: "/NEU.png",
        degree: "Master of Science - Computer Science",
        duration: "Sep 2019 - May 2021",
      },
      {
        university: "BML Munjal University",
        logo: "/bmu.jpg",
        degree: "Bachelor of Technology - Computer Science and Engineering",
        duration: "Jan 2015 - Jul 2019",
      },
    ],
    experience: [
      {
        title: "Software Engineer",
        company: "U.S. Bank",
        companyLogo: "/usbank.jpg",
        duration: "Jun 2021 - Present",
          bullets: [
            "Engineered Treasury Portal’s cash-ordering module using React/TS, increasing user adoption 25% via A/B tested accessibility features.",
            "Utilized the enterprise React UI framework to build 10+ complex, accessible features, accelerating deployment cycles by 30% and ensuring adherence to brand standards.",
            "Implemented code-splitting and lazy-loading strategies across Treasury modules, reducing initial bundle size and improving Time to Interactive (TTI) by ~15%.",
            "Architected front-end data-fetching patterns for REST API integrations, leveraging Redux caching to minimize UI latency and maintain state synchronization across financial modules.",
            "Developed Spring Boot REST wrappers, increasing system maintainability ratings from 2/5 to 4/5.",
            "Maintained consistent development workflows by utilizing Docker to manage legacy dependencies, ensuring stable local testing cycles and reducing environment-specific bugs by approximately 15%.",
            "Automated CI/CD deployment workflows via Jenkins, achieving 100% release consistency across UAT/Production environments.",
            "Hardened app security with 100+ Jest suites, achieving 90%+ coverage and <3min CI execution.",
            "Coordinated technical onboarding and code reviews for 2 offshore developers, reducing their time-to-first-commit and ensuring adherence to enterprise quality standards.",
            "Spearheaded Agile ceremonies (Sprint Planning, Retrospectives) for a cross-functional team, optimizing task estimation accuracy and ensuring 100% on-time delivery for quarterly milestones."
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
    description: "I welcome your feedback and ideas for improvement!",
    contributionsNote: "Alongside these, see my open source",
    contributionsLink:
      "https://github.com/pulls?q=is%3Apr+author%3Arumanstheddy+archived%3Afalse+is%3Amerged",
    list: [
      {
        title: "Playscore Pal",
        description:
          "Playscore Pal is a web-based platform built with Next.js, Node.js, Express, GraphQL, and MongoDB, utilizing the IGDB API. It empowers users to rate, review, and recommend games.",
        tech: [
          {
            name: "Typescript",
            link: buildImgShieldLink("Typescript", defaultBgColor, "3178C6"),
          },
          {
            name: "Next.js",
            link: buildImgShieldLink(
              "Next.js",
              defaultBgColor,
              "FFFFFF",
              "next.js",
            ),
          },
          {
            name: "MongoDB",
            link: buildImgShieldLink("MongoDB", defaultBgColor, "47A248"),
          },
          {
            name: "GraphQL",
            link: buildImgShieldLink("GraphQL", defaultBgColor, "DA0393"),
          },
          {
            name: "Tailwind CSS",
            link: buildImgShieldLink("Tailwind CSS", defaultBgColor, "06B6D4"),
          },
          {
            name: "NodeJS",
            link: buildImgShieldLink(
              "NodeJS",
              defaultBgColor,
              "339933",
              "node.js",
            ),
          },
        ],
        linkText: "View Project",
        link: "https://github.com/rumanstheddy/ss-play-score-pal",
      },
      {
        title: "Textful",
        description:
          "Textful is a web-based application, made using React, Node.js and MongoDb that enables its users to exchange text messages directly.",
        tech: [
          {
            name: "JavaScript",
            link: buildImgShieldLink("JavaScript", defaultBgColor, "F7DF1E"),
          },
          {
            name: "React",
            link: buildImgShieldLink("React", defaultBgColor, "61DAFB"),
          },
          {
            name: "MongoDB",
            link: buildImgShieldLink("MongoDB", defaultBgColor, "47A248"),
          },
          {
            name: "CSS3",
            link: buildImgShieldLink("CSS3", defaultBgColor, "1572B6", "css"),
          },
          {
            name: "NodeJS",
            link: buildImgShieldLink(
              "NodeJS",
              defaultBgColor,
              "339933",
              "node.js",
            ),
          },
          {
            name: "Express",
            link: buildImgShieldLink("Express", defaultBgColor, "FFFFFF"),
          },
        ],
        linkText: "View Project",
        link: "https://github.com/rumanstheddy/project-textful",
      },
      {
        title: "Meteoscope",
        description:
          "Meteoscope is a weather forecast app I made using React, Chakra UI and Open Meteo API.",
        tech: [
          {
            name: "JavaScript",
            link: buildImgShieldLink("JavaScript", defaultBgColor, "F7DF1E"),
          },
          {
            name: "React",
            link: buildImgShieldLink("React", defaultBgColor, "61DAFB"),
          },
          {
            name: "chakra--ui",
            link: buildImgShieldLink("chakra--ui", defaultBgColor, "67C9CB"),
          },
          {
            name: "NodeJS",
            link: buildImgShieldLink(
              "NodeJS",
              defaultBgColor,
              "339933",
              "node.js",
            ),
          },
        ],
        linkText: "View Project",
        link: "https://github.com/rumanstheddy/meteoscope",
      },
      {
        title: "AngularChrono",
        description:
          "Exploring Angular basics and SASS, I built a hands-on mobile-responsive Stop Watch web app.",
        tech: [
          {
            name: "Angular",
            link: buildImgShieldLink("Angular", defaultBgColor, "D70230"),
          },
          {
            name: "Typescript",
            link: buildImgShieldLink("Typescript", defaultBgColor, "3178C6"),
          },
          {
            name: "Sass",
            link: buildImgShieldLink("Sass", defaultBgColor, "CC6699"),
          },
          {
            name: "NodeJS",
            link: buildImgShieldLink(
              "NodeJS",
              defaultBgColor,
              "339933",
              "node.js",
            ),
          },
        ],
        linkText: "View Project",
        link: "https://github.com/rumanstheddy/Ang-Stop-Watch",
      },
      {
        title: "SeizureCare",
        description:
          "Designed and developed SeizureCare, a responsive website with React, Material UI, and SCSS, enabling EEG test requests and customer service enquiries while optimizing performance to a 90+ score on Lighthouse.",
        tech: [
          {
            name: "JavaScript",
            link: buildImgShieldLink("JavaScript", defaultBgColor, "F7DF1E"),
          },
          {
            name: "React",
            link: buildImgShieldLink("React", defaultBgColor, "61DAFB"),
          },
          {
            name: "Sass",
            link: buildImgShieldLink("Sass", defaultBgColor, "CC6699"),
          },
          {
            name: "AWS Amplify",
            link: buildImgShieldLink("AWS Amplify", defaultBgColor, "8C6FE6"),
          },
          {
            name: "Lighthouse",
            link: buildImgShieldLink("Lighthouse", defaultBgColor, "E34F26"),
          },
          {
            name: "NodeJS",
            link: buildImgShieldLink(
              "NodeJS",
              defaultBgColor,
              "339933",
              "node.js",
            ),
          },
        ],
        linkText: "View Project",
        link: "https://seizurecarenet.com/",
      },
    ],
  },
};

export default profileInfo;
