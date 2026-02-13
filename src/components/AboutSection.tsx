import profileInfo from "@/data/profile";
import IconButton from "./IconButton";

import { ReactNode } from "react";
import Image from "next/image";
import {
  DOWNLOAD_SVG_PATH,
  EDU_SVG_PATH,
  EDU_SVG_VIEWBOX,
  EXP_SVG_PATH,
  EXP_SVG_VIEWBOX,
} from "@/lib/constants";

type SectionTitleProps = {
  icon: ReactNode;
  title: string;
  styling?: string;
};

function SectionTitle({ icon, title, styling }: SectionTitleProps) {
  return (
    <h3 className="mb-2 flex items-center gap-2">
      {icon}
      <span className={`text-lg font-semibold md:text-xl ${styling}`}>
        {title}
      </span>
    </h3>
  );
}

type LogoWithTextProps = {
  src: string;
  alt: string;
  name: string;
};

function LogoWithText({ src, alt, name }: LogoWithTextProps) {
  return (
    <div className="mb-1 flex items-center gap-4">
      <Image
        src={src}
        alt={alt}
        className="h-8 w-8 rounded-full object-contain aspect-square"
        width={32}
        height={32}

      />
      <span className="font-medium">{name}</span>
    </div>
  );
}

export default function AboutSection() {
  const {
    title: aboutTitle,
    description,
    download,
    education,
    experience,
  } = profileInfo.about;
  const { link: downloadLink, text: buttonText } = download;

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center gap-8 sm:justify-between md:gap-12 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col gap-8 lg:gap-10">
          <h2 className="text-center text-3xl text-wrap lg:text-left">
            {/* <span className="bg-main/30 rounded-base border-border/40 dark:border-border/70 relative mr-0 border-2 px-2 py-1 sm:mr-2">
              {aboutTitle}
            </span> */}
            {aboutTitle}
          </h2>
          <p className="text-md text-center md:text-xl lg:text-left">
            {description}
          </p>
        </div>
        <IconButton
          href={downloadLink}
          svgPath={DOWNLOAD_SVG_PATH}
          ariaLabel="Resume Download"
          className="bg-(--accent)"
        >
          {buttonText}
        </IconButton>
      </div>

      {/* //? Education Section */}
      <div className="rounded-base border-border flex flex-col items-center gap-4 border-x-1 border-y-2 px-4 py-8 shadow-sm sm:border-x-2 sm:p-8 sm:shadow-sm md:items-start">
        <SectionTitle
          icon={
            <svg
              className="h-8 w-8 text-black"
              fill="currentColor"
              viewBox={EDU_SVG_VIEWBOX}
            >
              <path d={EDU_SVG_PATH} />
            </svg>
          }
          title="Education"
        />
        {education && education.length > 0 && (
          <div className="flex w-full flex-col gap-8">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 md:items-start"
              >
                <LogoWithText
                  src={edu.logo}
                  alt={edu.university}
                  name={edu.university}
                />
                <div className="flex w-full flex-col items-center gap-4 px-1 md:flex-row md:justify-between md:gap-0">
                  <span className="text-center font-semibold md:text-left">
                    {edu.degree}
                  </span>
                  <span className="text-muted-foreground text-sm md:ml-4">
                    {edu.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* //? Professional Experience Section */}
      <div className="rounded-base border-border flex flex-col items-center gap-4 border-x-1 border-y-2 px-4 py-8 shadow-sm sm:border-x-2 sm:p-8 sm:shadow-sm md:items-start">
        <SectionTitle
          icon={
            <svg
              className="h-8 w-8 text-black"
              fill="currentColor"
              viewBox={EXP_SVG_VIEWBOX}
            >
              <path d={EXP_SVG_PATH} />
            </svg>
          }
          title="Professional Experience"
          styling="pt-2"
        />
        {/* // ? Render all experience positions dynamically with company logo, role, and duration */}
        {experience && experience.length > 0 && (
          <div className="flex flex-col gap-10">
            {experience.map((position, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 md:items-start"
              >
                <LogoWithText
                  src={position.companyLogo}
                  alt={position.company}
                  name={position.company}
                />
                <div className="flex w-full flex-col items-center gap-4 px-1 md:flex-row md:justify-between md:gap-0">
                  <span className="font-semibold">{position.title}</span>
                  <span className="text-muted-foreground text-sm md:ml-4">
                    {position.duration}
                  </span>
                </div>
                <ul className="mt-4 list-disc space-y-3 pr-1 pl-3 text-justify text-base md:pr-0 md:pl-6 md:text-left">
                  {position.bullets.map((bullet, bidx) => (
                    <li key={bidx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
