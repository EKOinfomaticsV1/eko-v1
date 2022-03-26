import React from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Landing from "../landing/Landing";
import Team from "../team/Team";
import ToTop from "../global/ToTop";
import Expertise from "../expertise/Expertise";
import Industries from "../industries/Industries";
import Solutions from "../solutions/Solutions";
import Capabilities from "../capabilities/Capabilities";
import Header from "../header/Header";

const Home = () => {
  return (
    <div id="top" className="relative cursor-default ">
      <Header />
      <Landing />
      <About />
      <Expertise />
      <Team />
      <Solutions />
      <Industries />
      <Capabilities />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <ToTop />
    </div>
  );
};

export default Home;
