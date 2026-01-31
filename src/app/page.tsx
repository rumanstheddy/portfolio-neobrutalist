import HeroSection from "@/components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import Navbar from "../components/Navbar";
import Star20 from "@/components/stars/Star20";
import Star14 from "@/components/stars/Star14";

export default function Home() {
  return (
    <>
      {/* // TODO: change the py values to adjust the content */}
      {/* // TODO: add stars wherever relevant for more neobrutalism flair - refer to 'stars' link in neobrutalism components */}
      <Navbar />
      <main className="bg-background relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-size-[70px_70px] py-[65px]">
        <div className="flex w-[80%] max-w-full flex-col gap-16">
          <Star20
            color="var(--main)"
            stroke="black"
            strokeWidth={3}
            size={250}
            className="absolute top-[480px] -left-[125px] hidden lg:block"
          />
          <Star14
            color="var(--main)"
            stroke="black"
            strokeWidth={3}
            size={250}
            className="absolute -right-[125px] bottom-[1248px] hidden lg:block"
          />
          {/* // TODO: use another star at the bottom of the page with **GREEN** colour */}
          {/* //? Hero section - name, profile photo, social buttons */}
          <section
            className="border-border rounded-base md:bg-background bg-main md:text-foreground text-main-foreground p-5 py-7 md:border-x-4 md:border-b-4 lg:p-8 lg:py-10 xl:p-10 xl:py-10 2xl:p-14 2xl:py-16"
            id="profile"
          >
            <HeroSection />
          </section>
          {/* //? About section - resume */}
          <section
            className="border-border rounded-base md:bg-background bg-main md:text-foreground text-main-foreground border-t-4 border-r-0 border-b-4 p-5 py-7 md:border-x-4 md:border-b-4 lg:p-8 lg:py-10 xl:p-10 xl:py-10 2xl:p-14 2xl:py-16"
            id="about"
          >
            <AboutSection />
          </section>
          {/* //? Projects section */}
          <section
            className="border-border rounded-base md:bg-background bg-main md:text-foreground text-main-foreground border-t-4 border-r-0 border-b-4 p-5 py-7 md:border-x-4 lg:p-8 lg:py-10 xl:p-10 xl:py-10 2xl:p-14 2xl:py-16"
            id="projects"
          >
            <ProjectsSection />
          </section>
        </div>
      </main>
    </>
  );
}
