"use client";

import { useEffect } from "react";
import { initializeExperience } from "../lib/experience";
import Hall from "./Hall";
import Header from "./Header";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Manifesto from "./Manifesto";
import Rules from "./Rules";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Network from "./Network";
import Quest from "./Quest";
import Bonus from "./Bonus";
import Contact from "./Contact";
import Footer from "./Footer";
import Mascot from "./Mascot";

export default function DikariWebsite() {
  useEffect(() => initializeExperience(), []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Rules />
        <Services />
        <Portfolio />
        <Network />
        <Quest />
        <Bonus />
        <Hall />
        <Contact />
      </main>
      <Footer />
      <Mascot />
    </>
  );
}
