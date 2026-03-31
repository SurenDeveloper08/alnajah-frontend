import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import LandingPage from "@/app/components/LandingPage";
import AboutSection from "./components/AboutSection";
import ProcessImage from "./components/ProcessImage";
import ProductionWorkflow from "./components/ProductionWorkflow";
import CategoriesSection from "./components/CategoriesSection";
import Footer from "./components/Footer";
import ProductCategories from "./components/ProductCategories";
import ServiceGrid from "./components/ServiceGrid";
import ContactSection from "./components/Contact";
export default function Home() {
  return (
    <>
      {/* MOBILE & TABLET VIEW: Hidden on large screens (lg and up) */}
      {/* <div className="block lg:hidden">
        <Header />
        <Hero />
      </div> */}

      {/* DESKTOP VIEW: Hidden on everything below 'lg' breakpoint */}
      <div className="hidden lg:block">
        <LandingPage />
      </div>
      <AboutSection />
      <ProcessImage />
      <ServiceGrid/>
      <ProductionWorkflow />
      <ProductCategories />
      <ContactSection />
      <Footer />
    </>
  );
}