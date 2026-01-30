import profileInfo from "@/data/profile";
import IconButton from "./IconButton";

import { ReactNode } from "react";
import Image from "next/image";

type SectionTitleProps = {
  icon: ReactNode;
  title: string;
};

function SectionTitle({ icon, title }: SectionTitleProps) {
  return (
    <div className="mb-2 flex items-center gap-2">
      {icon}
      <span className="text-lg font-semibold">{title}</span>
    </div>
  );
}

type LogoWithTextProps = {
  src: string;
  alt: string;
  name: string;
};

function LogoWithText({ src, alt, name }: LogoWithTextProps) {
  return (
    <div className="mb-1 flex items-center gap-2">
      <Image
        src={src}
        alt={alt}
        className="h-8 w-8 rounded-full"
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
    experience,
  } = profileInfo.about;
  const { link: downloadLink, text: buttonText } = download;

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center sm:justify-between md:gap-12 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col gap-10">
          <h2 className="text-3xl md:text-4xl">{aboutTitle}</h2>
          <p className="text-md text-center md:text-xl lg:text-left">
            {description}
          </p>
        </div>
        <IconButton
          href={downloadLink}
          svgPath="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
          ariaLabel="Resume Download"
          className="bg-(--secondary)"
        >
          {buttonText}
        </IconButton>
      </div>

      {/* //? Education Section */}
      <div
        className={`rounded-base sm:shadow-shadow border-border shadow-shadow flex flex-col gap-4 border-x-1 border-y-2 p-4 sm:border-x-2 sm:p-8`}
      >
        <SectionTitle
          icon={
            <svg
              className="h-8 w-8 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3.33 8L10 12l10-6-10-6L0 6h10v2H3.33zM0 8v8l2-2.22V9.2L0 8zm10 12l-5-3-2-1.2v-6l7 4.2 7-4.2v6L10 20z" />
            </svg>
          }
          title="Education"
        />
        {profileInfo.about.education &&
          profileInfo.about.education.length > 0 && (
            <div className="flex flex-col gap-8">
              {profileInfo.about.education.map((edu, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <LogoWithText
                    src={edu.logo}
                    alt={edu.university}
                    name={edu.university}
                  />
                  <div className="flex flex-col px-1 md:flex-row md:items-center md:justify-between">
                    <span className="font-semibold">{edu.degree}</span>
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
      <div
        className={`rounded-base sm:shadow-shadow border-border shadow-shadow flex flex-col gap-4 border-x-1 border-y-2 p-4 sm:border-x-2 sm:p-8`}
      >
        <SectionTitle
          icon={
            <svg
              className="h-8 w-8 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M15 3c.552 0 1 .448 1 1v2h5c.552 0 1 .448 1 1v13c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V7c0-.552.448-1 1-1h5V4c0-.552.448-1 1-1h6zM8 8H6v11h2V8zm10 0h-2v11h2V8zm-4-3h-4v1h4V5z" />
            </svg>
          }
          title="Professional Experience"
        />
        {/* // ? Render all experience positions dynamically with company logo, role, and duration */}
        {experience && experience.length > 0 && (
          <div className="flex flex-col gap-10">
            {experience.map((position, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <LogoWithText
                  src={position.companyLogo}
                  alt={position.company}
                  name={position.company}
                />
                <div className="flex flex-col px-1 md:flex-row md:items-center md:justify-between">
                  <span className="font-semibold">{position.title}</span>
                  <span className="text-muted-foreground text-sm md:ml-4">
                    {position.duration}
                  </span>
                </div>
                <ul className="mt-4 list-disc space-y-3 pl-6 text-left text-base">
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
