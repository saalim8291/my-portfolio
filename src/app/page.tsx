import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import CareerTimeline from "@/components/CareerTimeline/CareerTimeline";
import Stats from "@/components/Stats/Stats";
import Articles from "@/components/Articles/Articles";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <CareerTimeline />
        {/* <Stats /> */}
        {/* <Articles /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
