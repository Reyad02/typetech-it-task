import Hero from "@/components/Hero/Hero";
import Miami_Accordion from "@/components/Miami_Accordion/Miami_Accordion";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero></Hero>
      <section className="max-w-7xl mx-auto py-20 flex flex-col gap-6">
        <Miami_Accordion heading={"Miami Dade County"} />
        <Miami_Accordion heading={"Miami Dade County"} />
      </section>
    </main>
  );
}
