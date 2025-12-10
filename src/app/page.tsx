import profileInfo from "@/data/profile";
import Image from "next/image";

function Title({ text }: { text: string }) {
  const [first, ...rest] = text.split(" ");
  return (
    <h1 className="text-center text-4xl text-wrap whitespace-pre-line md:text-6xl lg:text-left lg:text-5xl">
      {first + (rest.length ? "\n" + rest.join(" ") : "")}
    </h1>
  );
}

function ProfileImage() {
  return (
    <div className="h-56 w-56 rotate-[4deg] overflow-hidden rounded-2xl shadow-lg md:h-80 md:w-80 xl:h-64 xl:w-64">
      <Image
        src="/me3.jpg"
        alt="Sumanth Chinnaobireddy"
        width={320}
        height={320}
        className="h-full w-full object-cover"
        priority
      />
    </div>
  );
}

export default function Home() {
  const { title, description } = profileInfo.homepage;

  return (
    <main className="bg-background relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-size-[70px_70px] px-5 py-[50px]">
      {/* // TODO: change the py values above to adjust the content */}
      <div className="w-[80%] max-w-full">
        <div className="flex flex-col items-center sm:justify-between md:gap-12 lg:flex-row lg:gap-16">
          {/* //? Profile image first on mobile, second on desktop */}
          <div className="mb-8 block lg:mb-0 lg:hidden">
            <ProfileImage />
          </div>
          <div className="flex flex-1 flex-col gap-8">
            <Title text={title} />
            <p className="text-md text-center md:text-xl lg:text-left">
              {description}
            </p>
          </div>
          <div className="ml-8 hidden lg:block">
            <ProfileImage />
          </div>
        </div>
      </div>
    </main>
  );
}