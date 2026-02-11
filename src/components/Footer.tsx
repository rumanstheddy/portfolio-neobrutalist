import { GITHUB_REPO_URL } from "@/lib/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-main border-border flex w-full flex-col items-center gap-2 border-t-4 py-6 text-center text-sm">
      <span className="flex items-center justify-center gap-2">
        Made with <span className="text-red-500">❤️</span>
        <Image
          src={"/svgs/next.svg"}
          alt={"Next.js icon"}
          width={16}
          height={16}
          className="inline-block align-middle"
          loading="lazy"
          unoptimized
        />
        &amp;
        <span role="img" aria-label="coffee">
          ☕
        </span>
      </span>
      <span>
        {`Like this template? Grab the `}
        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          repo
        </a>
      </span>
    </footer>
  );
}
