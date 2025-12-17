import React from "react";

interface SocialButtonProps {
  href: string;
  svgPath: string;
  aSize?: string;
  svgSize?: string;
  className?: string;
  svgClassName?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
}

/**
 * Reusable icon button for social/profile links.
 * @param href - The link URL
 * @param svgPath - The SVG path 'd' attribute
 * @param aSize - Tailwind size class for the <a> element
 * @param svgSize - Tailwind size class for the <svg> element
 * @param children - Optional children (e.g. text)
 * @param ariaLabel - Optional aria-label for accessibility
 */
const SocialButton: React.FC<SocialButtonProps> = ({
  href,
  svgPath,
  aSize = "size-16",
  svgSize = "size-8",
  className = "",
  svgClassName = "",
  children,
  ariaLabel,
}) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    className={`rounded-base border-border shadow-nav dark:shadow-navDark dark:border-darkBorder flex items-center justify-center border-2 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:hover:shadow-none ${aSize} ${className}`}
    aria-label={ariaLabel}
  >
    {children && (
      <span className="hidden font-semibold sm:inline">{children}</span>
    )}
    <svg
      className={`fill-foreground ${svgSize} ${svgClassName}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      aria-hidden="true"
      focusable="false"
    >
      <path d={svgPath} />
    </svg>
  </a>
);

export default SocialButton;
