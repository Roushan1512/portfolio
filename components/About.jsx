"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef, useState } from "react";

const About = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const Yprog = useTransform(scrollYProgress, [0, 1], [0, 600]);
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
      className="h-[600vh] w-[100vw] bg-black relative"
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
            <img src="/images/MyPic4.jpg" className="object-contain" />
          </motion.div>
          <motion.span
            variants={head}
            initial="hidden"
            animate={text ? "visible" : "hidden"}
            className="text-3xl absolute top-20 left-20 font-semibold text-amber-100"
          >
            {"   "}
            Hi there! I{"'"}m <br />
            <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-100">
              Roushan
            </span>
            <p className="text-white text-[15px] w-[28%] font-light leading-4 pt-4 p-2">
              A web developer with a knack for solving complex problems with
              creative code. {"I'm"} particularly excited about Backend
              Frameworks and {"I'm"} confident my experience in using Frontend
              frameworks like ReactJs and Tailwind Css.
            </p>
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default About;
