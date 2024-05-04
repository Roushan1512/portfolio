import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useRef } from "react";
import Blacktex from "@/public/images/blacktex.jpg";
import Image from "next/image";

const Skills = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const Yprog = useTransform(scrollYProgress, [0, 1], [1, 150]);
  useMotionValueEvent(Yprog, "change", (i) => console.log(i));
  return (
    <div
      id="skills"
      ref={container}
      className="relative h-[150vh] w-[100vw] bg-zinc-800 text-white"
    >
      <div className="sticky top-0 h-[100vh] w-[100vw]">
        <Image
          src={Blacktex}
          layout="fill"
          className="object-cover absolute object-center top-0 left-0 brightness-[0.25]"
        />
        <div className="relative"></div>
      </div>
    </div>
  );
};

export default Skills;

// Programming Languages:
// Java
// C
// Python
// Javascript

// WebDev:
// HTML
// CSS
// NodeJs
// ReactJs
// NextJs
// ExpressJs
// MongoDB
// Flask
// Tailwind Css

// Tools:
// Git
// Figma
// Adobe Photoshop
// Microsoft Office
// Google Workspace
