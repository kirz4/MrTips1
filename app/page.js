import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Colecoes from "./components/Colecoes";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[url('/images/fundo_teste.png')]">
      <Navbar />
      <div className="container mx-auto px-12 py-4 mt-24 ">
        <HeroSection />
        <AboutUs />
        <Colecoes />
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
