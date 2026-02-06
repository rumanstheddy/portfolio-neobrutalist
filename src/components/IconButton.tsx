import React from "react";

interface IconButtonProps {
  href: string;
  svgPath: string;
  aSize?: string;
  svgSize?: string;
  className?: string;
  svgClassName?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
  svgViewBox?: string;
}

/**
 * Reusable icon button for social/profile links.
 * @param href - The link URL
 * @param svgPath - The SVG path 'd' attribute
 * @param aSize - Tailwind size class for the <a> element
 * @param svgSize - Tailwind size class for the <svg> element
 * @param className - Additional Tailwind classes for the <a> element
 * @param svgClassName - Additional Tailwind classes for the <svg> element
 * @param children - Optional children (e.g. text)
 * @param ariaLabel - Optional aria-label for accessibility
 * @param svgViewBox - SVG viewBox attribute (default: "0 0 640 640"). Use to control icon scaling and cropping.
 */
export default function IconButton({
  href,
  svgPath,
  svgSize = "size-8",
  className = "",
  svgClassName = "",
  children,
  ariaLabel,
  svgViewBox = "0 0 496 512",
}: IconButtonProps) {
  // ? If text is provided, allow width to expand with padding; otherwise, keep a fixed size
  const baseClasses =
    "rounded-base border-border shadow-shadow dark:shadow-shadow dark:border-darkBorder flex items-center justify-center border-2 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:hover:shadow-none gap-4";
  const textClasses = children ? "p-4 w-auto" : "w-16 h-16";
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={`${baseClasses} ${textClasses} ${className}`}
      aria-label={ariaLabel}
    >
      <svg
        className={`fill-foreground ${svgSize} ${svgClassName}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={svgViewBox}
        aria-hidden="true"
        focusable="false"
      >
        <path d={svgPath} />
      </svg>
      {children && <span className="font-semibold">{children}</span>}
    </a>
  );
}
