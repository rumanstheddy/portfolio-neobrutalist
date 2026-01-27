import profileInfo from "@/data/profile";
import IconButton from "./IconButton";
import Image from "next/image";

export default function ProjectsSection() {
  const { title, description, list } = profileInfo.projects;
  return (
    // TODO: Change background color
    <section className="flex flex-col gap-12">
      <div className="flex flex-1 flex-col gap-10">
        <h2 className="lg:text-4xl">{title}</h2>
        <p className="text-md text-center md:text-xl lg:text-left">
          {description}
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {list.map((project, idx) => (
          <div
            key={idx}
            className={
              "rounded-base sm:shadow-shadow border-border shadow-shadow bg-secondary-background flex flex-col gap-4 border-x border-y-2 p-4 sm:border-x-2 sm:p-8"
            }
          >
            <span className="text-2xl font-bold">{project.title}</span>
            <p className="text-muted-foreground text-base">
              {project.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((tech, tIdx) => (
                <Image
                  key={tIdx}
                  src={tech}
                  alt="tech badge"
                  width={100}
                  height={32}
                  className="rounded-base h-8 w-auto"
                  unoptimized
                />
              ))}
            </div>
            <div className="mt-4">
              <IconButton
                href={project.link}
                svgPath="M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z"
                ariaLabel={project.linkText}
                className="bg-main"
                svgSize="size-8"
                svgViewBox="0 0 640 640"
              >
                {project.linkText}
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z"/></svg> */}