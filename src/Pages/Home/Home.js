import React, { Fragment } from 'react';
//App components
import ServicesSection from '../../Components/ServicesSection/ServicesSection';
import ContactSection from '../../Components/ContactSection/ContactSection';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <Fragment>
      <ServicesSection />
      <ContactSection />
      <Footer />
    </Fragment>
  )
}

export default Home;