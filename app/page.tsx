import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen px-8 pt-16 pb-10">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Process />
      <Contact />
      <Footer />
      <section id="projects" className="mx-auto mt-24 w-full max-w-6xl" />
      <section id="services" className="mx-auto mt-24 w-full max-w-6xl" />
      <section id="process" className="mx-auto mt-24 w-full max-w-6xl" />
      <section id="contact" className="mx-auto mt-24 w-full max-w-6xl" />
    </main>
  );
}