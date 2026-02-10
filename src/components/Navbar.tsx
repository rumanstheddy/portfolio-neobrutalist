"use client";
import Link from "next/link";
import IconButton from "./IconButton";
import profileInfo from "@/data/profile";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const { link: downloadLink } = profileInfo.about.download;
  const [activeSection, setActiveSection] = useState<string>("profile");

  useEffect(() => {
    // Match navLinks IDs to actual section IDs in the DOM
    const sectionIds = ["profile", "resume", "projects"];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) return;

    // Dynamically adjust rootMargin for mobile screens
    const isMobile = window.innerWidth < 768;
    const navHeight = isMobile ? 96 : 96; // 24 * 4 = 96px (h-24)
    const rootMargin = isMobile
      ? `-${navHeight - 10}px 0px -60% 0px` // more negative top margin for mobile
      : "0px 0px -40% 0px";

    let observer: IntersectionObserver | null = null;
    let scrollHandler: (() => void) | null = null;

    // IntersectionObserver for all screens
    observer = new window.IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisible: string | null = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisible = entry.target.id;
          }
        });
        if (mostVisible) setActiveSection(mostVisible);
      },
      {
        root: null,
        rootMargin,
        threshold: [0.2, 0.5, 0.8],
      },
    );
    sectionElements.forEach((el) => observer!.observe(el));

    // Fallback: On mobile, also listen to scroll events for reliability
    if (isMobile) {
      scrollHandler = () => {
        const scrollY = window.scrollY;
        let currentSection = sectionIds[0];
        for (let i = 0; i < sectionElements.length; i++) {
          const el = sectionElements[i];
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY - navHeight;
          if (scrollY >= top - 10) {
            currentSection = el.id;
          }
        }
        setActiveSection(currentSection);
      };
      window.addEventListener("scroll", scrollHandler, { passive: true });
    }

    return () => {
      sectionElements.forEach((el) => observer && observer.unobserve(el));
      if (scrollHandler) window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const navLinks = [
    { href: "#profile", label: "Profile", id: "profile" },
    { href: "#resume", label: "Resumé", id: "resume" },
    { href: "#projects", label: "Projects", id: "projects" },
  ];

  return (
    <nav className="border-border bg-main fixed top-0 left-0 z-20 mx-auto flex h-24 w-full items-center border-b-4">
      <div className="text-foreground mx-auto flex w-[80%] max-w-full items-center justify-between 2xl:p-14">
        {/* Logo left */}
        <Link
          className="shadow-shadow dark:shadow-shadow rounded-base text-main-foreground font-heading hidden size-12 items-center justify-center border-2 border-black bg-(--accent-secondary) text-[22px] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:flex"
          href={"#profile"}
        >
          <Image
            src="/avatar.png"
            alt="Avatar"
            className="rounded-base h-10 w-10 object-cover"
            width={40}
            height={40}
          />
        </Link>
        {/* Centered nav links */}
        <div className="flex flex-1 justify-center">
          <div className="flex items-center gap-8 md:gap-12 lg:gap-16">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "group relative px-1 text-lg transition-colors duration-300 ease-in-out md:px-2",
                  activeSection === link.id
                    ? "text-accent font-bold"
                    : "text-foreground/80",
                ].join(" ")}
              >
                <span
                  className={[
                    "relative inline-block after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-current after:transition-transform after:duration-300 after:ease-in-out",
                    activeSection === link.id
                      ? "after:scale-x-100"
                      : "after:scale-x-0 group-hover:after:scale-x-100",
                  ].join(" ")}
                  style={{ display: "inline-block", position: "relative" }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
        {/* Resume download button right */}
        <IconButton
          href={downloadLink}
          svgPath="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
          ariaLabel="Download Resume"
          className="border-border hidden border-2 bg-(--accent) px-3 py-2 md:flex"
          svgSize="w-5 h-5"
          svgViewBox="0 0 496 512"
        >
          <span className="text-sm font-semibold">My Resumé</span>
        </IconButton>
      </div>
    </nav>
  );
}
