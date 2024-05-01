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
import { Instagram, Github, Mail, Linkedin } from "lucide-react";

const About = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const Yprog = useTransform(scrollYProgress, [0, 1], [0, 500]);
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
      className="h-[500vh] w-[100vw] bg-black relative"
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
            className="text-3xl absolute top-12 left-20 font-semibold text-amber-100"
          >
            {"   "}
            Hi there! I{"'"}m <br />
            <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-100">
              Roushan
            </span>
            <p className="text-white text-[15px] w-[28%] font-light leading-4 pt-4 p-2">
              A web developer with a knack for solving problems with creative
              code. {"I'm"} particularly excited in Backend Frameworks and{" "}
              {"I'm"} confident my experience in using Frontend frameworks like
              ReactJs and Tailwind Css.
            </p>
          </motion.span>
          <motion.div
            variants={outerIcons}
            initial="hidden"
            animate={text ? "visible" : "hidden"}
            className="absolute bottom-20 left-48 flex justify-center items-center gap-5 h-fit w-fit [transform:translate(-50%,-50%)]"
          >
            <motion.span
              variants={innerIcons}
              className="h-fit w-fit aspect-square"
              whileHover={{ scale: 1.5, marginLeft: 10, marginRight: 10 }}
            >
              <a href="https://www.instagram.com/roushan_p.15?igsh=NGh6bGZ5eXNlOXBk">
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
              <a href="https://github.com/Roushan1512">
                <Github
                  size={40}
                  strokeWidth={1.5}
                  className="rounded-full bg-black text-white p-1"
                />
              </a>
            </motion.span>
            <motion.span
              variants={innerIcons}
              className="h-fit w-fit aspect-square"
              whileHover={{ scale: 1.5, marginLeft: 10, marginRight: 10 }}
            >
              <a href="https://www.linkedin.com/in/roushan-poddar-8531a327a/">
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
        </div>
      </div>
    </div>
  );
};

export default About;
