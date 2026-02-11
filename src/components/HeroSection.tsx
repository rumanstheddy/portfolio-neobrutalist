"use client";
import profileInfo from "@/data/profile";
import Image from "next/image";
import IconButton from "./IconButton";
import {
  LINKEDIN_SVG_PATH,
  GITHUB_SVG_PATH,
  EMAIL_SVG_PATH,
} from "@/lib/constants";
import { useEffect, useState } from "react";
import Star9 from "./stars/Star9";

const { title, description, greetings } = profileInfo.homepage;
const { github, linkedin, email } = profileInfo.socials;

function TypewriterSalutation() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const current = greetings[index] + "!";
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 2500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setTyping(true);
          setIndex((prev) => (prev + 1) % greetings.length);
        }, 200);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, index]);

  return (
    <span className="text-center text-2xl font-bold text-wrap whitespace-pre-line md:text-3xl lg:text-left">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function ProfileImage() {
  return (
    <div className="rounded-base h-72 w-72 overflow-hidden border shadow-sm md:h-80 md:w-80 xl:h-96 xl:w-96">
      <Image
        src="/me3.jpg"
        alt="Sumanth Chinnaobireddy"
        width={448}
        height={448}
        className="border-border h-full w-full border-2 object-cover"
        priority
      />
    </div>
  );
}

export default function HeroSection() {
  const fullDescription = (
    <>
      A <b>Full-Stack Engineer</b> {description}
    </>
  );

  return (
    //? Intro + social buttons + profile image */
    <div className="flex flex-col items-center sm:justify-between md:gap-12 lg:flex-row lg:gap-16">
      {/* //? Profile image first on mobile, second on desktop */}
      <div className="mb-8 md:mb-0 block lg:mb-0 lg:hidden">
        {/* //TODO: add the glittery border effect around profile image */}
        <ProfileImage />
      </div>
      <div className="flex flex-1 flex-col gap-8 lg:gap-10">

        <TypewriterSalutation />
        <h1 className="text-center text-4xl text-wrap whitespace-pre-line sm:mt-1 lg:text-left xl:text-5xl">
          {"I'm "}
          <span className="bg-main/30 rounded-base border-border/40 dark:border-border/70 relative mx-1 mr-0 border-2 px-2 py-1 sm:mx-2 [&_svg]:size-8 md:[&_svg]:size-10">
            <Star9
              className="absolute -right-3 -bottom-2.5 block md:-right-4 md:-bottom-4"
              color="var(--main)"
              pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
            />
            <Star9
              className="absolute -top-2.5 -left-3 block md:-top-4 md:-left-4"
              color="var(--main)"
              pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
            />
            {title}
          </span>
        </h1>
        <p className="text-md text-center md:text-xl lg:text-left">
          {fullDescription}
        </p>
        <div className="flex items-center justify-center gap-4 lg:justify-start">
          <IconButton
            href={linkedin}
            svgPath={LINKEDIN_SVG_PATH}
            ariaLabel="LinkedIn profile"
            className="bg-(--accent)"
          />
          <IconButton
            href={github}
            svgPath={GITHUB_SVG_PATH}
            ariaLabel="GitHub repository"
            className="bg-(--accent)"
          />
          <IconButton
            href={email}
            svgPath={EMAIL_SVG_PATH}
            ariaLabel="Send email"
            className="bg-(--accent)"
          />
        </div>
      </div>
      <div className="ml-8 hidden lg:block">
        <ProfileImage />
      </div>
    </div>
  );
}
