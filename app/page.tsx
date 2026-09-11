import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import Manifesto from "@/components/portfolio/Manifesto";
import Work from "@/components/portfolio/Work";
import About from "@/components/portfolio/About";
import Capabilities from "@/components/portfolio/Capabilities";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Manifesto />
        <Work />
        <About />
        <Capabilities />
        <Contact />
      </main>

      <Footer />
    </>
  );
}