import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/Hero";
import ServicesSection from "../components/Services";
import About from "../components/About";
import Footer from "../components/Footer";
import About3 from "../components/About3";
import About4 from "../components/About4";
import Pricing3 from "../components/Pricing3";
import Gallery2 from "../components/Gallery";
import BannerSection from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <About />
      <About3 />
      <About4 />
      <Pricing3 />
      <BannerSection />
      <Gallery2 />
      <Footer />
    </div>
  );
};

export default Home;
