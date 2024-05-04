"use client";

import {
  AnimatePresence,
  motion,
  stagger,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { Alegreya, Allura } from "next/font/google";

const alegreya = Alegreya({ subsets: ["latin"] });
const allura = Allura({ subsets: ["latin"], weight: "400" });

const Nav = () => {
  const outerVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 2 },
    },
  };

  const innerVariants = {
    hidden: { y: -100 },
    visible: { y: 0 },
  };

  const outerNameVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
        staggerDirection: -1,
      },
    },
  };

  const nameVariants = {
    hidden: { x: -1000 },
    visible: { x: 0 },
  };

  const [homehover, setHomehover] = useState(false);
  const [projects, setProjects] = useState(false);
  const [about, setAbout] = useState(false);
  const [skills, setSkills] = useState(false);

  const { scrollYProgress } = useScroll();

  // useMotionValueEvent(scrollYProgress, "change", (i) => {
  //   console.log(i);
  // });

  return (
    <div className="fixed top-0 flex justify-center items-center pt-1 h-fit w-[100%] bg-white-500 z-10">
      {/* Name Component  */}

      <motion.div
        className={`flex justify-start items-center h-fit py-2 px-16 w-[50%] ${allura.className} text-white text-5xl cursor-pointer`}
        variants={outerNameVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={nameVariants}
          transition={{ type: "spring", bounce: 0 }}
        >
          R
        </motion.span>
        <motion.span
          variants={nameVariants}
          transition={{ type: "spring", bounce: 0 }}
        >
          o
        </motion.span>
        <motion.span
          variants={nameVariants}
          transition={{ type: "spring", bounce: 0 }}
        >
          u
        </motion.span>
        <motion.span
          variants={nameVariants}
          transition={{ type: "spring", bounce: 0 }}
        >
          s
        </motion.span>
        <motion.span
          variants={nameVariants}
          transition={{ type: "spring", bounce: 0 }}
        >
          h
        </motion.span>
        <motion.span
          variants={nameVariants}
          transition={{ type: "spring", bounce: 0 }}
        >
          a
        </motion.span>
        <motion.span
          variants={nameVariants}
          transition={{ type: "spring", bounce: 0 }}
        >
          n
        </motion.span>
      </motion.div>

      {/* Links Component  */}

      <motion.div
        className={`flex justify-end items-center gap-10 h-fit px-16 w-[50%] text-white text-lg font-semibold ${alegreya.className}`}
        variants={outerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={innerVariants}
          transition={{ type: "spring", bounce: 0.25 }}
          className="cursor-pointer relative"
          onHoverStart={() => setHomehover(true)}
          onHoverEnd={() => setHomehover(false)}
        >
          <span
            onClick={() => {
              window.scrollTo({
                top: document.getElementById("home").offsetTop,
                behaviour: "smooth",
              });
            }}
          >
            Home
          </span>
          <motion.span
            className="absolute h-full w-full top-1 left-0 border-b-2 border-y-white -z-10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: homehover ? 1 : 0 }}
            style={{ originX: homehover ? 0 : 1 }}
          />
        </motion.span>
        <motion.span
          variants={innerVariants}
          transition={{ type: "spring", bounce: 0.25 }}
          className="cursor-pointer relative"
          onHoverStart={() => setProjects(true)}
          onHoverEnd={() => setProjects(false)}
        >
          <span
            onClick={() => {
              window.scrollTo({
                top:
                  document.getElementById("projects").offsetTop +
                  window.innerHeight * 1.3,
                behaviour: "smooth",
              });
            }}
          >
            Projects
          </span>
          <motion.span
            className="absolute h-full w-full top-1 left-0 border-b-2 border-y-white -z-10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: projects ? 1 : 0 }}
            style={{ originX: projects ? 0 : 1 }}
          />
        </motion.span>
        <motion.span
          variants={innerVariants}
          transition={{ type: "spring", bounce: 0.25 }}
          className="cursor-pointer relative"
          onHoverStart={() => setAbout(true)}
          onHoverEnd={() => setAbout(false)}
        >
          <span
            onClick={() => {
              window.scrollTo({
                top:
                  document.getElementById("about").offsetTop +
                  window.innerHeight * 1.5,
                behaviour: "smooth",
              });
            }}
          >
            About Me
          </span>
          <motion.span
            className="absolute h-full w-full top-1 left-0 border-b-2 border-y-white -z-10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: about ? 1 : 0 }}
            style={{ originX: about ? 0 : 1 }}
          />
        </motion.span>
        <motion.span
          variants={innerVariants}
          transition={{ type: "spring", bounce: 0.25 }}
          className="cursor-pointer relative"
          onHoverStart={() => setSkills(true)}
          onHoverEnd={() => setSkills(false)}
        >
          <span
            onClick={() => {
              window.scrollTo({
                top:
                  document.getElementById("skills").offsetTop +
                  window.innerHeight * 0.1,
                behaviour: "smooth",
              });
            }}
          >
            Skills
          </span>
          <motion.span
            className="absolute h-full w-full top-1 left-0 border-b-2 border-y-white -z-10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: skills ? 1 : 0 }}
            style={{ originX: skills ? 0 : 1 }}
          />
        </motion.span>
        {/* <motion.span
          variants={innerVariants}
          transition={{ type: "spring", bounce: 0.25 }}
          className="cursor-pointer"
        >
          <span
            onClick={() => {
              window.scrollTo({
                top: document.getElementById("contact").offsetTop,
                behaviour: "smooth",
              });
            }}
          >
            Contact
          </span>
        </motion.span> */}
      </motion.div>
    </div>
  );
};

export default Nav;
