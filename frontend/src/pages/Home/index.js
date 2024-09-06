import React from "react";
import Header from "../../components/Header";
import Intro from "./intro";
import About from "./about";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";
import LeftSider from "../../components/LeftSider";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-primary px-40 sm:px-5">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <LeftSider />
      </div>
    </div>
  );
};

export default Home;
