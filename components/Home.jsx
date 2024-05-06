import { motion, useMotionValueEvent, useTransform } from "framer-motion";
import { Mouse } from "lucide-react";
import { Exo_2, Alegreya } from "next/font/google";
import React, { useEffect } from "react";

const garamond = Exo_2({ subsets: ["latin"] });
const alegreya = Alegreya({ subsets: ["latin"] });

const Home = ({ scrollYProgress }) => {
  const [img, setImg] = React.useState("visible");
  const Yprog = useTransform(scrollYProgress, [0, 0.075], [1, 0]);
  const Yopac = useTransform(scrollYProgress, [0, 1], [1, -30]);
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress > 0.25) {
      setImg("hidden");
    } else {
      setImg("visible");
    }
  });
  return (
    <div
      id="home"
      className="h-[100vh] w-[100vw] flex flex-col justify-center items-center relative bg-transparent"
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src="/images/milky.jpg"
        alt=""
        className={`object-cover fixed w-screen h-screen brightness-[0.5] ${img} `}
      />
      <motion.h1
        initial={{ opacity: 0.25, filter: "blur(10px)", y: 1000, scale: 0.5 }}
        animate={{
          opacity: [0.25, 0.25, 1],
          filter: ["blur(10px)", "blur(10px)", "blur(0px)"],
          y: [1000, 0, 0],
          scale: [0.5, 0.5, 1],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          delay: 0.5,
        }}
        style={{ scale: Yprog }}
        className={`md:text-[100px] text-5xl text-orange-300 font-semibold ${garamond.className} cursor-default`}
      >
        Roushan Poddar
      </motion.h1>

      <motion.h3
        initial={{ opacity: 0.25, filter: "blur(10px)", y: 1000, scale: 0.5 }}
        animate={{
          opacity: [0.25, 0.25, 1],
          filter: ["blur(10px)", "blur(0px)", "blur(0px)"],
          y: [1000, 0, 0],
          scale: [0.5, 0.5, 1],
        }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 1.5 }}
        style={{ scale: Yprog }}
        className={`md:text-5xl text-2xl font-medium text-orange-100 to-orange-400 ${garamond.className} cursor-default`}
      >
        Full Stack Developer
      </motion.h3>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        style={{ opacity: Yopac }}
        className="absolute bottom-6 right-6 flex justify-center items-center text-white gap-2 text-sm cursor-default"
      >
        <Mouse size={24} />
        More to Explore
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        style={{ opacity: Yopac }}
        className={`absolute bottom-6 left-6 flex justify-center items-center z-10 text-white gap-2 text-lg font-extralight ${alegreya.className} cursor-default`}
      >
        Building the Web . . .
        <br />
        From Pixels to Connections
      </motion.span>
    </div>
  );
};

export default Home;
