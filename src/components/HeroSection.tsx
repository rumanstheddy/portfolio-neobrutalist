import profileInfo from "@/data/profile";
import Image from "next/image";
import IconButton from "./IconButton";
import Star9 from "./stars/Star9";

const { title: homepageTitle, description } = profileInfo.homepage;

function Title({ text }: { text: string }) {
  // const [first, ...rest] = text.split(" ");
  return (
    // TODO: verify size for smaller screen sizes
    <h1 className="text-center text-4xl text-wrap whitespace-pre-line md:text-5xl lg:text-left">
      {/* // TODO: optimize for smaller screens */}
      <span className="bg-main/50 rounded-base border-border/40 dark:border-border/70 relative mr-0 border-2 px-2 sm:mr-2 sm:[&_svg]:size-7 md:[&_svg]:size-[45px]">
        {/* {first + (rest.length ? "\n" + rest.join(" ") : "")} */}
        {text}
        <Star9
          className="absolute -right-2.5 -bottom-2.5 hidden sm:block md:-right-5 md:-bottom-4"
          color="var(--main)"
          pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
        />
        <Star9
          className="absolute -top-2.5 -left-2.5 hidden sm:block md:-top-4 md:-left-5"
          color="var(--main)"
          pathClassName="stroke-5 dark:stroke-3.5 stroke-black dark:stroke-black/70"
        />
      </span>
    </h1>
  );
}

function ProfileImage() {
  return (
    // TODO: adjust size according to screen sizes
    <div className="rounded-base h-72 w-72 overflow-hidden border-1 shadow-lg md:h-80 md:w-80 xl:h-96 xl:w-96">
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
  return (
    //? Intro + social buttons + profile image */}
    <div className="flex flex-col items-center sm:justify-between md:gap-12 lg:flex-row lg:gap-16">
      {/* //? Profile image first on mobile, second on desktop */}
      <div className="mb-8 block lg:mb-0 lg:hidden">
        <ProfileImage />
      </div>
      <div className="flex flex-1 flex-col gap-10">
        {/* // TODO: add the glittery border effect around name or profile image */}
        {/* // TODO: Change image size according to window */}
        <Title text={homepageTitle} />
        <p className="text-md text-center md:text-xl lg:text-left">
          {description}
        </p>
        <div className="flex items-center justify-center gap-4 lg:justify-start">
          <IconButton
            href="https://linkedin.com/in/sumanthcob"
            svgPath="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0c29.6 0 53.6 24.09 53.6 53.6 0 29.6-24.09 53.7-53.6 53.7zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.5s1.2-242.1 0-267.1h92.4v37.9c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z"
            ariaLabel="LinkedIn profile"
            className="bg-(--accent)"
          />
          <IconButton
            href="https://github.com/rumanstheddy"
            svgPath="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            ariaLabel="GitHub repository"
            className="bg-(--accent)"
          />
          <IconButton
            href="mailto:sumanthcob@gmail.com"
            svgPath="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
            ariaLabel="Send email"
            className="bg-(--accent)"
          />
        </div>
        {/* //TODO: add technologies marquee */}
      </div>
      <div className="ml-8 hidden lg:block">
        <ProfileImage />
      </div>
    </div>
  );
}
