import Image from "next/image";

/**
 * Represents a skill item for the marquee.
 * @property text - The display text for the skill (e.g., 'JavaScript', '.NET').
 * @property svg - (Optional) The SVG filename for the skill icon.
 */
type Skill = {
  text: string;
  svg?: string;
};

/**
 * Renders a list of skill items for the marquee animation.
 * @param items - Array of skill objects to display.
 * @param keySuffix - (Optional) Suffix to append to React keys for uniqueness.
 */
function MarqueeItems({
  items,
  keySuffix = "",
}: {
  items: Skill[];
  keySuffix?: string;
}) {
  return (
    <>
      {items.map((item) => {
        // SVG with text
        return (
          <span
            key={item.text + keySuffix}
            className="text-md mx-12 flex items-center gap-2 font-semibold transition-transform duration-200 hover:scale-110 md:text-xl"
          >
            {item.svg && (
              <Image
                src={"/svgs/" + item.svg}
                alt={item.text + " icon"}
                width={32}
                height={32}
                className="inline-block h-8 w-8 align-middle"
                loading="lazy"
                unoptimized
              />
            )}
            <span
              style={
                item.text.toLowerCase() === ".net"
                  ? { color: "#512ad5" }
                  : undefined
              }
            >
              {item.text}
            </span>
          </span>
        );
      })}
    </>
  );
}

/**
 * Marquee component that displays a horizontally scrolling list of skills.
 * @param items - Array of skill objects to display in the marquee.
 */
export default function Marquee({ items }: { items: Skill[] }) {
  return (
    <div className="border-border bg-background font-base relative flex w-full overflow-x-hidden border-x-4 border-y-2">
      <div className="animate-marquee flex flex-row items-center py-8 whitespace-nowrap">
        <MarqueeItems items={items} />
      </div>
      <div className="animate-marquee2 absolute top-0 flex flex-row items-center py-8 whitespace-nowrap">
        <MarqueeItems items={items} keySuffix="-2" />
      </div>
      {/* must have both of these in order to work */}
    </div>
  );
}
