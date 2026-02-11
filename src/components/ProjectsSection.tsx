import profileInfo from "@/data/profile";
import IconButton from "./IconButton";
import Image from "next/image";
import {
  EXTERNAL_LINK_SVG_PATH,
  EXTERNAL_LINK_SVG_VIEWBOX,
  GITHUB_SVG_PATH,
  GITHUB_SVG_VIEWBOX,
} from "@/lib/constants";

export default function ProjectsSection() {
  const { title, description, contributionsNote, contributionsLink, list } =
    profileInfo.projects;
  return (
    // Change background color
    <div className="flex flex-col gap-10">
      <div className="flex flex-1 flex-col gap-8 md:gap-10">
        <h2 className="text-center text-3xl text-wrap lg:text-left">{title}</h2>
        <div className="flex flex-col gap-2">
          {contributionsNote && contributionsLink && (
            <p className="text-md text-center md:text-xl lg:text-left">
              {contributionsNote} See my{" "}
              <a
                href={contributionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-blue-600 underline dark:text-blue-400"
              >
                contributions
              </a>
              .
            </p>
          )}
          <p className="text-md text-center md:text-xl lg:text-left">
            {description}
          </p>
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {list.map((project, idx) => (
          <div
            key={idx}
            className={
              "rounded-base border-border shadow-shadow bg-background flex flex-col justify-between gap-4 border-x border-y-2 px-4 py-8 sm:border-x-2 sm:p-8 sm:shadow-sm"
            }
          >
            <h3 className="text-center text-xl font-bold md:text-left">
              {project.title}
            </h3>
            <p className="text-center text-base md:text-left">
              {project.description}
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
              {project.tech.map(({ name, link }, tIdx) => (
                <Image
                  key={tIdx}
                  src={link}
                  alt={`${name} badge`}
                  width={100}
                  height={32}
                  className="rounded-base h-8 w-auto"
                  unoptimized
                />
              ))}
            </div>
            <div className="mt-4">
              {(() => {
                const isGithub =
                  typeof project.link === "string" &&
                  project.link.toLowerCase().includes("github.com");
                return (
                  <IconButton
                    href={project.link}
                    svgPath={
                      isGithub ? GITHUB_SVG_PATH : EXTERNAL_LINK_SVG_PATH
                    }
                    ariaLabel={project.linkText}
                    className="bg-(--accent-secondary)"
                    svgSize="size-8"
                    svgViewBox={
                      isGithub ? GITHUB_SVG_VIEWBOX : EXTERNAL_LINK_SVG_VIEWBOX
                    }
                  >
                    {project.linkText}
                  </IconButton>
                );
              })()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
