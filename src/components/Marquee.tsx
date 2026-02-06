import Image from "next/image";
type Skill = { text: string; svg: string };

function MarqueeItems({
  items,
  keySuffix = "",
}: {
  items: Skill[];
  keySuffix?: string;
}) {
  return (
    <>
      {items.map((item) => (
        <span
          key={item.text + keySuffix}
          className="text-md mx-8 flex items-center gap-4 md:text-xl"
        >
          <Image
            src={"/svgs/" + item.svg}
            alt={item.text + " icon"}
            width={32}
            height={32}
            className="inline-block h-8 w-8 align-middle"
            loading="lazy"
            unoptimized
          />
          <span>{item.text}</span>
        </span>
      ))}
    </>
  );
}

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
