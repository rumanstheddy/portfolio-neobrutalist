import HeroSection from "@/components/HeroSection";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    // TODO: change the py values to adjust the content
    <main className="bg-background relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-size-[70px_70px] px-5 py-[50px]">
      <div className="flex w-[80%] max-w-full flex-col gap-16">
        {/* //? Hero section - name, profile photo, social buttons */}
        <HeroSection />
        {/* //? About section - resume */}
        <AboutSection />
      </div>
    </main>
  );
}
