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
    <div className="bg-zinc-950 select-none w-screen">
      <Home scrollYProgress={scrollYProgress} />
      <Projects />
      <About />
      <Skills />
    </div>
  );
};

export default Mainpage;
