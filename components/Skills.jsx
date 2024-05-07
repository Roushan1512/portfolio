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
    { id: "Java", src: "/logos/java.svg", hov: false },
    { id: "C Prog.", src: "/logos/c.svg", hov: false },
    { id: "Python", src: "/logos/python.svg", hov: false },
    { id: "JavaScript", src: "/logos/javascript.svg", hov: false },
  ]);

  const [webdev, setWebdev] = useState([
    { id: "HTML", src: "/logos/html.svg", hov: false },
    { id: "Css", src: "/logos/css.svg", hov: false },
    { id: "Tailwind Css", src: "/logos/tailwind.svg", hov: false },
    { id: "Node Js", src: "/logos/nodejs.svg", hov: false },
    { id: "React Js", src: "/logos/react.svg", hov: false },
    { id: "Express Js", src: "/logos/express.svg", hov: false },
    { id: "Next Js", src: "/logos/next.svg", hov: false },
    { id: "Mongo DB", src: "/logos/mongo.svg", hov: false },
    { id: "Flask", src: "/logos/flask.svg", hov: false },
  ]);

  const [tools, setTools] = useState([
    { id: "Git Toolkit", src: "/logos/git.svg", hov: false },
    { id: "Figma", src: "/logos/figma.svg", hov: false },
    { id: "Adobe Photoshop", src: "/logos/photoshop.svg", hov: false },
    { id: "Ms Office", src: "/logos/office.svg", hov: false },
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
                className="text-center"
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
                    className="flex justify-center items-center"
                    variants={innerIcons}
                    whileHover={{
                      scale: 1.2,
                      marginLeft: 10,
                      marginRight: 10,
                    }}
                    onHoverStart={() =>
                      setLangs(
                        langs.map((j) =>
                          j.id === i.id ? { ...j, hov: true } : j
                        )
                      )
                    }
                    onHoverEnd={() =>
                      setLangs(
                        langs.map((j) =>
                          j.id === i.id ? { ...j, hov: false } : j
                        )
                      )
                    }
                  >
                    {i.hov ? (
                      <motion.span className="text-black text-base font-bold bg-[#ffffffe1] rounded-full px-4 py-2">
                        {i.id}
                      </motion.span>
                    ) : (
                      <motion.span>
                        <img
                          src={i.src}
                          className="md:h-16 h-12 aspect-square"
                        />
                      </motion.span>
                    )}
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
                    className="flex justify-center items-center"
                    variants={innerIcons}
                    whileHover={{ scale: 1.2, marginLeft: 10, marginRight: 10 }}
                    onHoverStart={() =>
                      setTools(
                        tools.map((j) =>
                          j.id === i.id ? { ...j, hov: true } : j
                        )
                      )
                    }
                    onHoverEnd={() =>
                      setTools(
                        tools.map((j) =>
                          j.id === i.id ? { ...j, hov: false } : j
                        )
                      )
                    }
                  >
                    {i.hov ? (
                      <motion.span className="text-black text-base font-bold bg-[#ffffffe1] rounded-full px-4 py-2">
                        {i.id}
                      </motion.span>
                    ) : (
                      <motion.span>
                        <img
                          src={i.src}
                          className="md:h-16 h-12 aspect-square"
                        />
                      </motion.span>
                    )}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>

          <div
            className={`w-[100vw] flex flex-col justify-center items-center px-8 md:text-3xl text-2xl md:my-0 my-2 ${solway.className}`}
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
                  className="flex justify-center items-center"
                  variants={innerIcons}
                  whileHover={{ scale: 1.2, marginLeft: 10, marginRight: 10 }}
                  onHoverStart={() =>
                    setWebdev(
                      webdev.map((j) =>
                        j.id === i.id ? { ...j, hov: true } : j
                      )
                    )
                  }
                  onHoverEnd={() =>
                    setWebdev(
                      webdev.map((j) =>
                        j.id === i.id ? { ...j, hov: false } : j
                      )
                    )
                  }
                >
                  {i.hov ? (
                    <motion.span className="text-black text-base font-bold bg-[#ffffffe1] rounded-full px-4 py-2">
                      {i.id}
                    </motion.span>
                  ) : (
                    <motion.span>
                      <img src={i.src} className="md:h-16 h-12 aspect-square" />
                    </motion.span>
                  )}
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
            <SquareMousePointer size={25} />
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
