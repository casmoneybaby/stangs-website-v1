import Navbar from "./components/Navbar";
import StickyMobileCTA from "./components/StickyMobileCTA";
import Hero from "./sections/Hero";
import MenuHighlights from "./sections/MenuHighlights";
import BuildYourDog from "./sections/BuildYourDog";
import WhyStangs from "./sections/WhyStangs";
import Location from "./sections/Location";
import Reviews from "./sections/Reviews";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MenuHighlights />
        <BuildYourDog />
        <WhyStangs />
        <Location />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
