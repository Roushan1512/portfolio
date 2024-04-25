"use client";

import React from "react";
import { motion } from "framer-motion";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

const page = () => {
  return (
    <div>
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default page;
