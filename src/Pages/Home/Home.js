import React, { Fragment } from "react";
//App components
import Header from "../../Components/Header/Header";
import BannerSection from "../../Components/BannerSection/BannerSection";
import AboutSection from "../../Components/AboutSection/AboutSection";
import DoSection from "../../Components/DoSection/DoSection";
import ServicesSection from "../../Components/ServicesSection/ServicesSection";
import ContactSection from "../../Components/ContactSection/ContactSection";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <BannerSection />
      <AboutSection />
      <DoSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </Fragment>
  );
};

export default Home;
