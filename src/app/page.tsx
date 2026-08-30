import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShootingStars from "@/components/ShootingStars";
import CodePopup from "@/components/CodePopup";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <ShootingStars />
      <CodePopup />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
