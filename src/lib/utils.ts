export function buildImgShieldLink(
  techName: string,
  bgColor: string,
  logoColor: string,
  logoName?: string,
): string {
  /**
   * Builds a shields.io badge image URL for a given technology.
   * @param techName - The name of the technology (e.g., 'JavaScript').
   * @param bgColor - The background color for the badge (hex or color name).
   * @param logoColor - The color of the logo (hex or color name).
   * @param logoName - (Optional) The logo name for shields.io. Defaults to a sanitized version of techName.
   * @returns The shields.io badge image URL.
   */
  const logo = logoName
    ? logoName
    : techName
        .toLowerCase()
        .replace(/[^a-zA-Z0-9\s.]/g, "")
        .split(" ")
        .join("");
  return `https://img.shields.io/badge/-${techName}-${bgColor}?logo=${logo}&logoColor=${logoColor}&style=for-the-badge&logoWidth=30`;
}
