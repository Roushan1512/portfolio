"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { ExternalLink, Github, Award } from "lucide-react";
import { Alegreya, Solway, Scope_One } from "next/font/google";
import React, { useState } from "react";

const alegreya = Alegreya({ subsets: ["latin"] });
const solway = Solway({ subsets: ["latin"], weight: "400" });
const slabo = Scope_One({ subsets: ["latin"], weight: "400" });

const Projects = () => {
  const container = React.useRef(null);
  const [opac, setOpac] = React.useState(0);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const Yprog = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const bar = useTransform(Yprog, [105, 1000], [0, 45]);
  const headopac = useTransform(Yprog, [950, 1000], [1, -0]);

  const cypher = useTransform(Yprog, [220, 300], [1, -1]);
  const agrico = useTransform(Yprog, [390, 470], [1, -1]);
  const reddit = useTransform(Yprog, [560, 640], [1, -1]);
  const cookbook = useTransform(Yprog, [730, 810], [1, -1]);
  const robinfood = useTransform(Yprog, [870, 950], [1, -1]);

  // useMotionValueEvent(cypher, "change", (progress) => {
  //   console.log(progress);
  // });

  return (
    <div
      id="projects"
      ref={container}
      className="h-[1000vh] w-[100vw] flex flex-col justify-start items-center relative bg-black"
    >
      <div className="sticky top-0 bg-blue-500 h-[100vh] w-[100vw]">
        <img
          src="/images/Blueback.jpg"
          className="h-[100vh] w-[100vw] brightness-[0.25] object-cover"
        />
      </div>
      <motion.div
        style={{ opacity: headopac }}
        className="sticky top-16 flex flex-col justify-start items-center h-[50vh]"
      >
        <h1
          className={`text-white text-5xl ${alegreya.className} cursor-default`}
        >
          - Projects -
        </h1>
        <motion.span
          style={{ scaleX: bar }}
          className="mt-3 h-[2px] w-8 bg-white"
        ></motion.span>
      </motion.div>

      {/* CYPHER */}

      <motion.div
        style={{ opacity: cypher }}
        className="sticky top-48 flex justify-start items-center h-[50vh] w-[80vw] mb-[100vh] bg-[#31032f3d] rounded-[20px] border-[1px] border-white"
      >
        <video
          src="/videos/CypherPromo.mp4"
          className="h-[35vh] w-[35vw] rounded-3xl ml-[5vw] relative"
          loop
          controls={true}
        ></video>
        <div className="flex flex-col justify-start items-center h-[35vh] w-[35vw] relative">
          <h1
            className={`${solway.className} text-white text-3xl border-b-[1px] border-b-white w-[30vw] text-center pb-4 cursor-default`}
          >
            Cypher
          </h1>
          <p
            className={`text-white text-sm text-wrap px-10 pt-8 text-center font-thin cursor-default`}
          >
            This payment fraud application employs machine learning algorithms
            to detect suspicious transactions, flagging potential fraudulent
            activity in real-time by analyzing various data points such as
            transaction history, user behavior and geographical patterns.
          </p>
          <motion.span
            className="absolute bottom-0 right-24 text-white cursor-pointer"
            initial={{ rotate: 0, scale: 1 }}
            whileHover={{
              rotate: [0, 20, -20, 0],
              scale: [1, 1.125, 1.25],
              transition: { duration: 0.25 },
            }}
            onHoverStart={() => setOpac(1)}
            onHoverEnd={() => setOpac(0)}
          >
            <a href="/docs/Cypher.pdf" target="_blank">
              <Award />
            </a>
          </motion.span>
          <motion.span
            className="absolute -bottom-8 right-0 text-white cursor-pointer text-[12px]"
            style={{ opacity: opac, transition: { ease: "easeInOut" } }}
          >
            Secured 1st place at Mercer - Limitless Hackathon
          </motion.span>
          <motion.span
            className="absolute bottom-0 right-12 text-white cursor-pointer"
            initial={{ rotate: 0, scale: 1 }}
            whileHover={{
              rotate: [0, 20, -20, 0],
              scale: [1, 1.125, 1.25],
              transition: { duration: 0.25 },
            }}
          >
            <a
              href="https://github.com/Roushan1512/Payments-Fraud-Detection"
              target="_blank"
            >
              <Github />
            </a>
          </motion.span>
          <motion.span
            className="absolute bottom-0 right-0 text-white cursor-pointer"
            initial={{ rotate: 0, scale: 1 }}
            whileHover={{
              rotate: [0, 20, -20, 0],
              scale: [1, 1.125, 1.25],
              transition: { duration: 0.25 },
            }}
          >
            <a href="https://cypher-theta.vercel.app/" target="_blank">
              <ExternalLink />
            </a>
          </motion.span>
        </div>
      </motion.div>

      {/* AGRICO */}

      <motion.div
        style={{ opacity: agrico }}
        className="sticky top-48 flex justify-start items-center h-[50vh] w-[80vw] mb-[100vh] bg-[#3f3e063d] rounded-[20px] border-[1px] border-white"
      >
        <video
          src="/videos/AgricoPromo.mp4"
          className="h-[35vh] w-[35vw] rounded-3xl ml-[5vw]"
          loop
          controls={true}
        ></video>
        <div className="flex flex-col justify-start items-center h-[35vh] w-[35vw] relative">
          <h1
            className={`${solway.className} text-white text-3xl border-b-[1px] border-b-white w-[30vw] text-center pb-4 cursor-default`}
          >
            AgriCo
          </h1>
          <p
            className={`text-white text-sm text-wrap px-10 pt-8 text-center font-thin cursor-default`}
          >
            Agrico is an innovative EdTech platform empowering individuals and
            communities to learn modern farming practices and cultivate
            sustainable agricultural success through interactive tools and
            collaborative learning spaces.
          </p>
          <motion.span
            className="absolute bottom-0 right-12 text-white cursor-pointer"
            initial={{ rotate: 0, scale: 1 }}
            whileHover={{
              rotate: [0, 20, -20, 0],
              scale: [1, 1.125, 1.25],
              transition: { duration: 0.25 },
            }}
          >
            <a
              href="https://github.com/Not-Sahil-Raja/Agrico_?tab=readme-ov-file"
              target="_blank"
            >
              <Github />
            </a>
          </motion.span>
          <motion.span
            className="absolute bottom-0 right-0 text-white cursor-pointer"
            initial={{ rotate: 0, scale: 1 }}
            whileHover={{
              rotate: [0, 20, -20, 0],
              scale: [1, 1.125, 1.25],
              transition: { duration: 0.25 },
            }}
          >
            <a href="https://agrico.vercel.app/" target="_blank">
              <ExternalLink />
            </a>
          </motion.span>
        </div>
      </motion.div>

      {/* REDDIT */}

      <motion.div
        style={{ opacity: reddit }}
        className="sticky top-48 flex justify-start items-center h-[50vh] w-[80vw] mb-[100vh] bg-[#ffae0025] rounded-[20px] border-[1px] border-white"
      >
        <img
          src="/images/reddit.png"
          className="h-[35vh] w-[35vw] rounded-md ml-[5vw]"
        />
        <div className="flex flex-col justify-start items-center h-[35vh] w-[35vw] relative">
          <h1
            className={`${solway.className} text-white text-3xl border-b-[1px] border-b-white w-[30vw] text-center pb-4 cursor-default`}
          >
            Reddit Rip Off
          </h1>
          <p
            className={`text-white text-sm text-wrap px-10 pt-8 text-center font-thin cursor-default`}
          >
            As the name suggests, this website is a side hustle I made inspired
            by the reddit community. It is a simple forum where all users can
            share new ideas and discuss them with other users.
          </p>
          <motion.span
            className="absolute bottom-0 right-0 text-white cursor-pointer"
            initial={{ rotate: 0, scale: 1 }}
            whileHover={{
              rotate: [0, 20, -20, 0],
              scale: [1, 1.125, 1.25],
              transition: { duration: 0.25 },
            }}
          >
            <a
              href="https://github.com/Roushan1512/Reddit-Rip-off"
              target="_blank"
            >
              <Github />
            </a>
          </motion.span>
        </div>
      </motion.div>

      {/* COOKBOOK */}

      <motion.div
        style={{ opacity: cookbook }}
        className="sticky top-48 flex justify-start items-center h-[50vh] w-[80vw] mb-[100vh] bg-[#2b23033d] rounded-[20px] border-[1px] border-white"
      >
        <video
          src="/videos/CooksBookPromo.mp4"
          className="h-[35vh] w-[35vw] rounded-3xl ml-[5vw]"
          loop
          controls={true}
        ></video>
        <div className="flex flex-col justify-start items-center h-[35vh] w-[35vw] relative">
          <h1
            className={`${solway.className} text-white text-3xl border-b-[1px] border-b-white w-[30vw] text-center pb-4 cursor-default`}
          >
            Cook{"'"}s Book
          </h1>
          <p
            className={`text-white text-sm text-wrap px-10 pt-8 text-center font-thin cursor-default`}
          >
            Cook{"'"}s Book is a recipe generator with a twist. Unlike
            traditional recipe sites, it doesn{"'"}t require a specific shopping
            list. Instead, you tell Cook{"'"}s Book your ingredients, and it
            creates recipes based on those.
          </p>
          <motion.span
            className="absolute bottom-0 right-0 text-white cursor-pointer"
            initial={{ rotate: 0, scale: 1 }}
            whileHover={{
              rotate: [0, 20, -20, 0],
              scale: [1, 1.125, 1.25],
              transition: { duration: 0.25 },
            }}
          >
            <a href="https://github.com/AvirupRay/CookBook" target="_blank">
              <Github />
            </a>
          </motion.span>
        </div>
      </motion.div>

      {/* ROBINFOOD  */}

      <motion.div
        style={{ opacity: robinfood }}
        className="sticky top-48 flex justify-start items-center h-[50vh] w-[80vw] mb-[100vh] bg-[#0779112c] rounded-[20px] border-[1px] border-white"
      >
        <video
          src="/videos/RobinFoodPromo.mp4"
          className="h-[35vh] w-[35vw] rounded-3xl ml-[5vw]"
          loop
          controls={true}
        ></video>
        <div className="flex flex-col justify-start items-center h-[35vh] w-[35vw] relative">
          <h1
            className={`${solway.className} text-white text-3xl border-b-[1px] border-b-white w-[30vw] text-center pb-4 cursor-default`}
          >
            RobinFood
          </h1>
          <p
            className={`text-white text-sm text-wrap px-10 pt-8 text-center font-thin cursor-default`}
          >
            RobinFood is a web platform that bridges the gap between restaurants
            with surplus food and NGOs, food banks, dedicated to distributing
            food to those in need by facilitating the efficient and timely
            donation of excess food from restaurants to organizations that can
            redirect it to individuals facing food insecurity.
          </p>
          <motion.span
            className="absolute bottom-0 right-0 text-white cursor-pointer"
            initial={{ rotate: 0, scale: 1 }}
            whileHover={{
              rotate: [0, 20, -20, 0],
              scale: [1, 1.125, 1.25],
              transition: { duration: 0.25 },
            }}
          >
            <a href="https://github.com/AvirupRay/reckon_5.0" target="_blank">
              <Github />
            </a>
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
