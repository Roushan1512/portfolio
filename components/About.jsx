"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Pic4 from "@/public/images/MyPic4.jpg";
import {
  Instagram,
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  MapPin,
  GraduationCap,
  BadgeCheck,
  Bot,
  UserRoundCheck,
} from "lucide-react";
import { Ruluko, Grenze, Alegreya } from "next/font/google";

const ruluko = Ruluko({ subsets: ["latin"], weight: "400" });
const grenze = Grenze({ subsets: ["latin"], weight: "600" });
const alegreya = Alegreya({ subsets: ["latin"] });

const About = () => {
  const [rhover, setRhover] = useState(false);
  const [l1hover, setL1hover] = useState(false);
  const [l2hover, setL2hover] = useState(false);
  const [l3hover, setL3hover] = useState(false);
  const [l4hover, setL4hover] = useState(false);
  const [l5hover, setL5hover] = useState(false);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const Yprog = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const scalePic = useTransform(Yprog, [25, 250], [0.5, 5]);
  const opacityPic = useTransform(Yprog, [25, 250], [0, 1]);

  const [text, setText] = useState(false);

  useMotionValueEvent(Yprog, "change", (i) => {
    if (i > 250) {
      setText(true);
    } else {
      setText(false);
    }
    //console.log(i);
  });

  const outerIcons = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.25,
      },
    },
  };

  const innerIcons = {
    hidden: { y: 100 },
    visible: { y: 0 },
  };
  const outerStatus = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 1,
      },
    },
  };

  const innerStatus = {
    hidden: { x: 300 },
    visible: { x: 0 },
  };

  const head = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.25,
      },
    },
  };

  return (
    <div
      ref={container}
      id="about"
      className="h-[400vh] w-[100vw] bg-black relative"
    >
      <div className="sticky top-[11vh] flex justify-center items-center h-[100vh] w-[100vw]">
        <div className="relative h-[100vh] w-[100vw] flex justify-center items-center">
          <motion.div
            className="h-[20vh] w-[20vw] brightness-[0.75]"
            style={{
              scale: scalePic,
              opacity: opacityPic,
            }}
          >
            <Image
              src={Pic4}
              alt="Photo"
              fill="responsive"
              className="object-cover rounded-sm"
            />
          </motion.div>
          <motion.span
            variants={head}
            initial="hidden"
            animate={text ? "visible" : "hidden"}
            className={`${ruluko.className} text-3xl absolute top-12 left-20 font-semibold text-white cursor-default`}
          >
            {"   "}
            Hi there! {"I'm"} <br />
            <span
              className={`${grenze.className} text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-100`}
            >
              Roushan
            </span>
            <p
              className={`${ruluko.className} text-white text-[15px] w-[28%] font-light leading-4 pt-4 p-2`}
            >
              A full-stack web developer with a knack for solving problems with
              creative code. From the user - friendly design to the data
              crunching behind the scenes, bringing ideas to life is what I do
              best.
            </p>
          </motion.span>
          <motion.div
            variants={outerIcons}
            initial="hidden"
            animate={text ? "visible" : "hidden"}
            className="absolute bottom-[12.5vh] left-48 flex justify-center items-center gap-5 h-fit w-fit [transform:translate(-50%,-50%)]"
          >
            <motion.span
              variants={innerIcons}
              className="h-fit w-fit aspect-square"
              whileHover={{ scale: 1.5, marginLeft: 10, marginRight: 10 }}
            >
              <a
                href="https://www.instagram.com/roushan_p.15?igsh=NGh6bGZ5eXNlOXBk"
                target="_blank"
              >
                <Instagram
                  size={40}
                  strokeWidth={1.75}
                  className="text-white bg-gradient-to-bl from-[#470175] via-[#96109b] to-[#a34608] rounded-xl p-[2px]"
                />
              </a>
            </motion.span>
            <motion.span
              variants={innerIcons}
              className="h-fit w-fit aspect-square"
              whileHover={{ scale: 1.5, marginLeft: 10, marginRight: 10 }}
            >
              <a href="https://github.com/Roushan1512" target="_blank">
                <Github
                  size={40}
                  strokeWidth={1.5}
                  className="rounded-xl bg-black text-white p-1"
                />
              </a>
            </motion.span>
            <motion.span
              variants={innerIcons}
              className="h-fit w-fit aspect-square"
              whileHover={{ scale: 1.5, marginLeft: 10, marginRight: 10 }}
            >
              <a
                href="https://www.linkedin.com/in/roushan-poddar-8531a327a/"
                target="_blank"
              >
                <Linkedin
                  size={40}
                  strokeWidth={0.25}
                  fill="white"
                  className="bg-blue-600 text-white p-1 rounded-xl"
                />
              </a>
            </motion.span>
            <motion.span
              variants={innerIcons}
              className="h-fit w-fit aspect-square"
              whileHover={{ scale: 1.5, marginLeft: 10, marginRight: 10 }}
            >
              <a href="mailto:roushanp2003@gmail.com">
                <Mail
                  size={40}
                  strokeWidth={1.5}
                  fill="#c9c9c9"
                  className="text-red-600 bg-white rounded-lg p-1"
                />
              </a>
            </motion.span>
          </motion.div>
          <motion.div
            className="absolute bottom-[15vh] right-24 h-fit w-fit flex justify-center items-center gap-2 cursor-pointer"
            onHoverStart={() => setRhover(true)}
            onHoverEnd={() => setRhover(false)}
            initial={{ x: 500 }}
            animate={{ x: text ? 0 : 500 }}
            transition={{ delay: 0.25 }}
          >
            <a href="/docs/RoushanResume.pdf" target="_blank">
              <motion.span className="relative">
                <motion.h1
                  className={`${alegreya.className} text-white text-2xl z-20 relative px-3 py-1`}
                >
                  My Resume
                </motion.h1>
                <motion.span
                  className="absolute top-0 left-0 h-full w-full bg-[#061606] z-10 opacity-50 rounded-xl"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: rhover ? 1 : 0 }}
                  style={{ originX: rhover ? 0 : 1 }}
                ></motion.span>
              </motion.span>
            </a>

            <motion.span
              className="text-white"
              initial={{ rotate: 0, scale: 1 }}
              animate={{
                rotate: rhover ? [0, 20, -20, 0] : 0,
                scale: rhover ? [1, 1, 1.25, 1.5] : 1,
                transition: { duration: 0.25 },
              }}
            >
              <a href="/docs/RoushanResume.pdf" target="_blank">
                <ExternalLink />
              </a>
            </motion.span>
          </motion.div>

          <motion.div
            className="absolute top-12 right-10 flex flex-col justify-center items-start gap-2"
            variants={outerStatus}
            initial="hidden"
            animate={text ? "visible" : "hidden"}
          >
            <motion.div
              className="relative flex justify-start items-center gap-2 cursor-default"
              onHoverStart={() => setL1hover(true)}
              onHoverEnd={() => setL1hover(false)}
              variants={innerStatus}
            >
              <motion.span
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: l1hover ? [0, 20, -20, 0] : 0,
                  scale: l1hover ? [1, 1, 1.25, 1.5] : 1,
                  transition: { duration: 0.25 },
                }}
              >
                <MapPin className="text-white" />
              </motion.span>
              <motion.span className="relative">
                <motion.h1
                  className={`${alegreya.className} text-white text-lg z-20 relative px-2 py-1`}
                >
                  Living in India
                </motion.h1>
                <motion.span
                  className="absolute h-full w-full bg-[#061606] opacity-50 rounded-xl top-0 left-0"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: l1hover ? 1 : 0,
                    transition: {
                      duration: 0.25,
                      type: "spring",
                      bounce: 0.1,
                    },
                  }}
                  style={{ originX: l1hover ? 1 : 0 }}
                />
              </motion.span>
            </motion.div>

            <motion.div
              className="relative flex justify-start items-center gap-2 cursor-default"
              onHoverStart={() => setL2hover(true)}
              onHoverEnd={() => setL2hover(false)}
              variants={innerStatus}
            >
              <motion.span
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: l2hover ? [0, 20, -20, 0] : 0,
                  scale: l2hover ? [1, 1, 1.25, 1.5] : 1,
                  transition: { duration: 0.25 },
                }}
              >
                <GraduationCap className="text-white" />
              </motion.span>
              <motion.span className="relative">
                <motion.h1
                  className={`${alegreya.className} text-white text-lg z-20 relative px-2 py-1`}
                >
                  Studying CS Engineering
                </motion.h1>
                <motion.span
                  className="absolute h-full w-full bg-[#061606] opacity-50 rounded-xl top-0 left-0"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: l2hover ? 1 : 0,
                    transition: {
                      duration: 0.25,
                      type: "spring",
                      bounce: 0.1,
                    },
                  }}
                  style={{ originX: l2hover ? 1 : 0 }}
                />
              </motion.span>
            </motion.div>

            <motion.div
              className="relative flex justify-start items-center gap-2 cursor-default"
              onHoverStart={() => setL3hover(true)}
              onHoverEnd={() => setL3hover(false)}
              variants={innerStatus}
            >
              <motion.span
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: l3hover ? [0, 20, -20, 0] : 0,
                  scale: l3hover ? [1, 1, 1.25, 1.5] : 1,
                  transition: { duration: 0.25 },
                }}
              >
                <BadgeCheck className="text-white" />
              </motion.span>
              <motion.span className="relative">
                <motion.h1
                  className={`${alegreya.className} text-white text-lg z-20 relative px-2 py-1`}
                >
                  Learning Web Dev & ML
                </motion.h1>
                <motion.span
                  className="absolute h-full w-full bg-[#061606] opacity-50 rounded-xl top-0 left-0"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: l3hover ? 1 : 0,
                    transition: {
                      duration: 0.25,
                      type: "spring",
                      bounce: 0.1,
                    },
                  }}
                  style={{ originX: l3hover ? 1 : 0 }}
                />
              </motion.span>
            </motion.div>

            <motion.div
              className="relative flex justify-start items-center gap-2 cursor-default"
              onHoverStart={() => setL4hover(true)}
              onHoverEnd={() => setL4hover(false)}
              variants={innerStatus}
            >
              <motion.span
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: l4hover ? [0, 20, -20, 0] : 0,
                  scale: l4hover ? [1, 1, 1.25, 1.5] : 1,
                  transition: { duration: 0.25 },
                }}
              >
                <Bot className="text-white" />
              </motion.span>
              <motion.span className="relative">
                <motion.h1
                  className={`${alegreya.className} text-white text-lg z-20 relative px-2 py-1`}
                >
                  Member @ CSI Kolkata
                </motion.h1>
                <motion.span
                  className="absolute h-full w-full bg-[#061606] opacity-50 rounded-xl top-0 left-0"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: l4hover ? 1 : 0,
                    transition: {
                      duration: 0.25,
                      type: "spring",
                      bounce: 0.1,
                    },
                  }}
                  style={{ originX: l4hover ? 1 : 0 }}
                />
              </motion.span>
            </motion.div>

            <motion.div
              className="relative flex justify-start items-center gap-2 cursor-default"
              onHoverStart={() => setL5hover(true)}
              onHoverEnd={() => setL5hover(false)}
              variants={innerStatus}
            >
              <motion.span
                initial={{ rotate: 0, scale: 1 }}
                animate={{
                  rotate: l5hover ? [0, 20, -20, 0] : 0,
                  scale: l5hover ? [1, 1, 1.25, 1.5] : 1,
                  transition: { duration: 0.25 },
                }}
              >
                <UserRoundCheck className="text-white" />
              </motion.span>
              <motion.span className="relative">
                <motion.h1
                  className={`${alegreya.className} text-white text-lg z-20 relative px-2 py-1`}
                >
                  Member @ GDSC UEMK
                </motion.h1>
                <motion.span
                  className="absolute h-full w-full bg-[#061606] opacity-50 rounded-xl top-0 left-0"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: l5hover ? 1 : 0,
                    transition: {
                      duration: 0.25,
                      type: "spring",
                      bounce: 0.1,
                    },
                  }}
                  style={{ originX: l5hover ? 1 : 0 }}
                />
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

// Studying CS Engineering
// Learning Web Dev & ML
// Member @ CSI Kolkata
// Member @ GDSC UEMK
