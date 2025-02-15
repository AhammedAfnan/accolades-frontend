import "./globals.css";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    {/* <Footer /> */}
    </>
  );
}
