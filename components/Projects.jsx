"use client";

import { useMotionValueEvent, useTransform } from "framer-motion";
import React, { useState } from "react";

const Projects = ({ scrollYProgress }) => {
  const [head, setHead] = useState("sticky");
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    console.log(progress);
    if (progress > 0.125 && progress < 0.7) {
      setHead("fixed top-12");
    } else {
      setHead("sticky");
    }
  });
  return (
    <div
      id="projects"
      className="h-[500vh] w-[100vw] bg-black flex flex-col justify-start items-center pt-12 relative"
    >
      <h1 className={`text-white text-6xl ${head} `}>My Projects</h1>
    </div>
  );
};

export default Projects;
