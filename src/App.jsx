import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Hero from "./components/Hero";


import Mobiles from "./components/Mobiles";
import Sports from "./components/Sports";
import Allbrands from "./components/Allbrands";
import Section from "./components/Section";
import {
  beachEssentials,
  recommendedProducts,
  techEssentials,
  washingMachines,
} from "./data";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Category />
      <Hero />
      
      <Mobiles />
      <Sports />
      <Allbrands />
      <div className="lg:px-52">
        <Section title="Tech Emergency Essentials" products={techEssentials} />
        <Section
          title="Beach Essentials in 6 Payments"
          products={beachEssentials}
        />
        <Section
          title="Washing Machine Deals up to 6 installments"
          products={washingMachines}
        />
        <Section title="Recommended Products" products={recommendedProducts} />
      </div>
      <Footer />
    </>
  );
};

export default App;
