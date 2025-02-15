import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import "./globals.css";
import SectionTwo from "./components/SectionTwo";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <SectionTwo />
    {/* <Footer /> */}
    </>
  );
}
