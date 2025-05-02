import FireworkHero from "@/components/FireworkHero";
import ActionButtons from "@/components/ActionButtons";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <FireworkHero />
        <ActionButtons />
        <About />
      </main>
    </div>
  );
}
