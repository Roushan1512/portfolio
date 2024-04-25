"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const outerVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const innerVariants = {
    hidden: { y: -100 },
    visible: { y: 0 },
  };
  return (
    <motion.div
      className="fixed top-0 flex justify-end items-center gap-10 h-fit py-2 px-16 w-[100%] z-10 bg-[#ffffff60]"
      variants={outerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.span variants={innerVariants}>
        <Link href="#home">Home</Link>
      </motion.span>
      <motion.span variants={innerVariants}>
        <Link href="#skills">Skills</Link>
      </motion.span>
      <motion.span variants={innerVariants}>
        <Link href="#projects">Projects</Link>
      </motion.span>
      <motion.span variants={innerVariants}>
        <Link href="#about">About</Link>
      </motion.span>
      <motion.span variants={innerVariants}>
        <Link href="#contact">Contact</Link>
      </motion.span>
    </motion.div>
  );
};

export default Nav;
