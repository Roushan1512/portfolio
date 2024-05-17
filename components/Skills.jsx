"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import React, { useRef, useState } from "react";
import Blacktex from "@/public/images/blacktex.jpg";
import Image from "next/image";
import { Alegreya, Solway } from "next/font/google";
import { MoveUp, SquareMousePointer } from "lucide-react";

const alegreya = Alegreya({ subsets: ["latin"] });
const solway = Solway({ subsets: ["latin"], weight: "400" });

const Skills = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const [screen, setScreen] = useState(false);

  const Yprog = useTransform(scrollYProgress, [0, 1], [1, 150]);
  useMotionValueEvent(Yprog, "change", (i) => {
    //console.log(i);
    if (i > 1) {
      setScreen(true);
    } else {
      setScreen(false);
    }
  });

  const [langs, setLangs] = useState([
    { id: "https://www.java.com/en/", src: "/logos/java.svg", hov: false },
    {
      id: "https://www.w3schools.com/c/c_intro.php",
      src: "/logos/c.svg",
      hov: false,
    },
    { id: "https://www.python.org/", src: "/logos/python.svg", hov: false },
    {
      id: "https://www.w3schools.com/js/default.asp",
      src: "/logos/javascript.svg",
      hov: false,
    },
  ]);

  const [webdev, setWebdev] = useState([
    {
      id: "https://www.w3schools.com/html/html_intro.asp",
      src: "/logos/html.svg",
      hov: false,
    },
    {
      id: "https://www.w3schools.com/css/css_intro.asp",
      src: "/logos/css.svg",
      hov: false,
    },
    { id: "https://tailwindcss.com/", src: "/logos/tailwind.svg", hov: false },
    { id: "https://nodejs.org/en", src: "/logos/nodejs.svg", hov: false },
    { id: "https://react.dev/", src: "/logos/react.svg", hov: false },
    { id: "https://expressjs.com/", src: "/logos/express.svg", hov: false },
    { id: "https://nextjs.org/", src: "/logos/next.svg", hov: false },
    { id: "https://www.mongodb.com/", src: "/logos/mongo.svg", hov: false },
    {
      id: "https://flask.palletsprojects.com/en/3.0.x/",
      src: "/logos/flask.svg",
      hov: false,
    },
  ]);

  const [tools, setTools] = useState([
    {
      id: "https://git-scm.com/docs/git-tools",
      src: "/logos/git.svg",
      hov: false,
    },
    { id: "https://www.figma.com/", src: "/logos/figma.svg", hov: false },
    {
      id: "https://www.adobe.com/in/products/photoshop.html",
      src: "/logos/photoshop.svg",
      hov: false,
    },
    {
      id: "https://www.microsoft.com/en-in/microsoft-365/microsoft-office",
      src: "/logos/office.svg",
      hov: false,
    },
  ]);

  const outerIcons = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const innerIcons = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

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
        <div className="relative h-screen">
          <h1
            className={`font-bold text-center pt-20 pb-10 text-white text-5xl ${alegreya.className} cursor-default`}
          >
            - Skills -
          </h1>
          <div className="w-[100vw] h-fit py-4 flex md:flex-row flex-col justify-center md:items-start items-center">
            <div
              className={`md:w-[50vw] w-full flex flex-col justify-center items-center px-8 md:text-3xl text-2xl md:my-0 my-2 ${solway.className}`}
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{
                  opacity: screen ? 1 : 0,
                  transition: { delay: 0.1 },
                }}
                className="text-center mb-2"
              >
                Programmming Languages
              </motion.h1>
              <motion.div
                className="flex md:flex-wrap md:gap-8 md:p-8 md:py-0 py-1 mt-2"
                variants={outerIcons}
                initial="hidden"
                animate={screen ? "visible" : "hidden"}
              >
                {langs.map((i, index) => (
                  <motion.span
                    key={index}
                    className="flex justify-center items-center cursor-pointer"
                    variants={innerIcons}
                    whileHover={{
                      scale: 1.5,
                      marginLeft: 20,
                      marginRight: 20,
                    }}
                  >
                    <a href={i.id} target="_blank">
                      <img
                        src={i.src}
                        className="md:h-16 h-12 aspect-square rounded-full"
                      />
                    </a>
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <div
              className={`md:w-[50vw] w-full flex flex-col justify-center items-center px-8 md:text-3xl text-2xl md:my-0 my-2 ${solway.className}`}
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{
                  opacity: screen ? 1 : 0,
                  transition: { delay: 0.1 },
                }}
                className="text-center mb-2"
              >
                Tools
              </motion.h1>
              <motion.div
                className="flex md:flex-wrap md:gap-8 md:p-8 md:py-0 py-1 mt-2"
                variants={outerIcons}
                initial="hidden"
                animate={screen ? "visible" : "hidden"}
              >
                {tools.map((i, index) => (
                  <motion.span
                    key={index}
                    className="flex justify-center items-center cursor-pointer"
                    variants={innerIcons}
                    whileHover={{
                      scale: 1.5,
                      marginLeft: 20,
                      marginRight: 20,
                    }}
                  >
                    <a href={i.id} target="_blank">
                      <img src={i.src} className="md:h-16 h-12 aspect-square" />
                    </a>
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>

          <div
            className={`w-[100vw] flex flex-col justify-center items-center px-8 md:text-3xl text-2xl my-2 ${solway.className}`}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{
                opacity: screen ? 1 : 0,
                transition: { delay: 0.1 },
              }}
              className="text-center"
            >
              Web Development
            </motion.h1>
            <motion.div
              className="flex flex-wrap gap-6 p-8 items-center justify-center"
              variants={outerIcons}
              initial="hidden"
              animate={screen ? "visible" : "hidden"}
            >
              {webdev.map((i, index) => (
                <motion.span
                  key={index}
                  className="flex justify-center items-center cursor-pointer"
                  variants={innerIcons}
                  whileHover={{
                    scale: 1.5,
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                >
                  <a href={i.id} target="_blank">
                    <img src={i.src} className="md:h-16 h-12 aspect-square" />
                  </a>
                </motion.span>
              ))}
            </motion.div>
          </div>
          <motion.div
            className="absolute bottom-8 right-8 text-white"
            initial={{ scale: 0 }}
            animate={{
              scale: screen ? 1 : 0,
              transition: { delay: 1 },
            }}
          >
            {/* <SquareMousePointer size={25} /> */}
            <img src="/images/iconr4.png" className="h-8 w-8" />
          </motion.div>
          <motion.div
            className="absolute bottom-8 left-8 text-white text-md flex gap-4 justify-center items-center"
            initial={{ scale: 0 }}
            animate={{
              scale: screen ? 1 : 0,
              transition: { delay: 1 },
            }}
          >
            <span
              className="text-black bg-[#ffffffe1] rounded-full py-2 px-[2px] cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behaviour: "smooth" })}
            >
              <MoveUp />
            </span>
            Thank You
          </motion.div>
        </div>
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
