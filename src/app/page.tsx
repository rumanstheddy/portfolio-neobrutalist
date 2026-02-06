import HeroSection from "@/components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import Navbar from "../components/Navbar";
import Star20 from "@/components/stars/Star20";
import Star14 from "@/components/stars/Star14";
import Star15 from "@/components/stars/Star15";
import Star3 from "@/components/stars/Star3";
import Marquee from "../components/Marquee";
// Skills array for Marquee
const skills = {
  tech: [
    // Technologies
    { text: "JavaScript", svg: "javascript.svg" },
    { text: "TypeScript", svg: "typescript.svg" },
    { text: "C#", svg: "csharp.svg" },
    { text: "Python", svg: "python.svg" },
    { text: "Java", svg: "java.svg" },
    { text: "GraphQL", svg: "graphql.svg" },
    { text: "HTML", svg: "html5.svg" },
    { text: "CSS", svg: "css.svg" },
    { text: "SQL", svg: "database.svg" },
    { text: "Docker", svg: "docker.svg" },
    { text: "AWS", svg: "aws.svg" },
    { text: "Azure", svg: "azure.svg" },
  ],
  frameworksLibraries: [
    // Frameworks & Libraries
    { text: "React", svg: "react.svg" },
    { text: "Next.js", svg: "next.svg" },
    { text: "Angular", svg: "angular.svg" },
    { text: ".NET" },
    // { text: ".NET", svg: "dotnet.svg" },
    { text: "MongoDB", svg: "mongodb.svg" },
    { text: "MySQL", svg: "mysql.svg" },
    { text: "PostgreSQL", svg: "postgresql.svg" },
    { text: "SQLite", svg: "sqlite.svg" },
    { text: "Node", svg: "node.svg" },
    // Databases & Management tools
    // Platforms & AI Tools
  ],
};

export default function Home() {
  return (
    <>
      {/* // TODO: change the py values to adjust the content */}
      {/* // TODO: add stars wherever relevant for more neobrutalism flair - refer to 'stars' link in neobrutalism components */}
      <Navbar />
      <main className="bg-background relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-size-[70px_70px] py-[65px]">
        <div className="flex max-w-full flex-col items-center">
          <Star20
            color="var(--main)"
            stroke="black"
            strokeWidth={3}
            size={250}
            className="absolute top-[480px] -left-[125px] hidden lg:block"
          />
          <Star15
            color="var(--accent)"
            stroke="black"
            strokeWidth={3}
            size={250}
            className="absolute bottom-[1248px] -left-[125px] hidden lg:block"
          />
          <Star3
            color="var(--accent-secondary)"
            stroke="black"
            strokeWidth={3}
            size={250}
            className="absolute top-[1440px] -right-[125px] hidden lg:block"
          />
          <Star14
            color="var(--image-background)"
            stroke="black"
            strokeWidth={3}
            size={250}
            className="absolute -right-[125px] bottom-[480px] hidden lg:block"
          />
          {/* //? Hero section - name, profile photo, social buttons */}
          <section
            className="border-border md:bg-background bg-main md:text-foreground text-main-foreground w-[80%] p-5 py-7 md:border-x-4 lg:p-8 lg:py-10 xl:p-10 xl:py-10 2xl:mt-4 2xl:p-14 2xl:pt-16 2xl:pb-14"
            id="profile"
          >
            <HeroSection />
          </section>

          <div className="w-[80%]">
            {/* // TODO: change the bg styling and filled icons */}
            <Marquee items={skills.tech} />
          </div>
          {/* //? About section - resume */}
          <section
            className="border-border md:bg-background bg-main md:text-foreground text-main-foreground w-[80%] border-r-0 p-5 py-7 md:border-x-4 lg:p-8 lg:py-10 xl:p-10 xl:py-10 2xl:px-14 2xl:pt-14 2xl:pb-16"
            id="about"
          >
            <AboutSection />
          </section>
          <div className="w-[80%]">
            {/* // TODO: change the bg styling and filled icons */}
            <Marquee items={skills.frameworksLibraries} />
          </div>
          {/* //? Projects section */}
          <section
            className="border-border rounded-b-base md:bg-background bg-main md:text-foreground text-main-foreground w-[80%] border-r-0 border-b-4 p-5 py-7 md:border-x-4 lg:p-8 lg:py-10 xl:p-10 xl:py-10 2xl:px-14 2xl:pt-14 2xl:pb-16"
            id="projects"
          >
            <ProjectsSection />
          </section>
        </div>
      </main>
    </>
  );
}
