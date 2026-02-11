import HeroSection from "@/components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Star20 from "@/components/stars/Star20";
import Star14 from "@/components/stars/Star14";
import Star15 from "@/components/stars/Star15";
import Star3 from "@/components/stars/Star3";
import Marquee from "../components/Marquee";
import { SKILLS_MARQUEE as skills } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* // change the py values to adjust the content */}
      {/* // add stars wherever relevant for more neobrutalism flair - refer to 'stars' link in neobrutalism components */}
      <Navbar />
      <main className="bg-background relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-size-[70px_70px] py-[65px]">
        <div className="flex max-w-full flex-col items-center gap-4 md:gap-0">
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
            className="border-border bg-background md:text-foreground text-main-foreground mt-4 p-5 py-10 md:w-[80%] md:border-x-4 lg:px-8 xl:px-10 2xl:p-14 2xl:pt-16 2xl:pb-14"
            id="profile"
          >
            <HeroSection />
          </section>

          <div className="md:w-[80%]">
            {/* // TODO: MAYBE change the bg styling and filled icons */}
            <Marquee items={skills.tech} />
          </div>
          {/* //? About section - resume */}
          <section
            className="border-border bg-background md:text-foreground text-main-foreground border-r-0 p-5 py-10 md:w-[80%] md:border-x-4 lg:px-8 xl:px-10 2xl:px-14 2xl:pt-14 2xl:pb-16"
            id="resume"
          >
            <AboutSection />
          </section>
          <div className="md:w-[80%]">
            {/* // TODO: MAYBE change the bg styling and filled icons */}
            <Marquee items={skills.frameworksLibraries} />
          </div>
          {/* //? Projects section */}
          <section
            className="border-border rounded-b-base bg-background md:text-foreground text-main-foreground border-r-0 p-5 py-10 md:w-[80%] md:border-x-4 md:border-b-4 lg:px-8 xl:px-10 2xl:px-14 2xl:pt-14 2xl:pb-16"
            id="projects"
          >
            <ProjectsSection />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
