"use client";

import React, { useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

const Mainpage = () => {
  const { scrollYProgress } = useScroll();
  // useMotionValueEvent(scrollYProgress, "change", (progress) => {
  //   console.log(progress);
  // });

  return (
    <div>
      <Home scrollYProgress={scrollYProgress} />
      <Projects scrollYProgress={scrollYProgress} />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default Mainpage;
