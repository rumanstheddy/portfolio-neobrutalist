import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildImgShieldLink(
  techName: string,
  bgColor: string,
  logoColor: string,
  logoName?: string,
): string {
  const logo = logoName
    ? logoName
    : techName
        .toLowerCase()
        .replace(/[^a-zA-Z0-9\s.]/g, "")
        .split(" ")
        .join("");
  return `https://img.shields.io/badge/-${techName}-${bgColor}?logo=${logo}&logoColor=${logoColor}&style=for-the-badge&logoWidth=30`;
}
