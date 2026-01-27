import Link from "next/link";
import IconButton from "./IconButton";
import profileInfo from "@/data/profile";

export default function Navbar() {
  const { link: downloadLink, text: buttonText } = profileInfo.about.download;
  //   TODO: adjust styling
  //   TODO: replace logo with other image or text
  // TODO: use a different font - https://fonts.google.com/specimen/Archivo
  return (
    <nav className="border-border bg-main fixed top-0 left-0 z-20 mx-auto flex h-[70px] w-full items-center border-b-4 px-5">
      <div className="text-foreground mx-auto flex w-[1300px] max-w-full items-center justify-between">
        {/* Logo left */}
        <Link
          className="rounded-base bg-secondary-background text-main-foreground font-heading flex size-8 items-center justify-center border-2 border-black text-[22px]"
          href={"#profile"}
        >
          S
        </Link>
        {/* Centered nav links */}
        <div className="flex flex-1 justify-center">
          <div className="font-base flex items-center gap-16 text-base">
            <Link href="#profile" className="hover:underline">
              Profile
            </Link>
            <Link href="#about" className="hover:underline">
              About
            </Link>
            <Link href="#projects" className="hover:underline">
              Projects
            </Link>
          </div>
        </div>
        {/* Resume download button right */}
        <div className="flex items-center gap-4">
          <IconButton
            href={downloadLink}
            svgPath="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
            ariaLabel="Download Resume"
            className="bg-secondary-background border-border border-2 px-3 py-2"
            svgSize="w-5 h-5"
            svgViewBox="0 0 496 512"
          >
            <span className="hidden text-sm font-semibold md:inline">
              {buttonText}
            </span>
          </IconButton>
        </div>
      </div>
    </nav>
  );
}
