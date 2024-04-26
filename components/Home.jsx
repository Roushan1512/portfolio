import { Exo_2 } from "next/font/google";
import React from "react";

const garamond = Exo_2({ subsets: ["latin"] });

const Home = () => {
  return (
    <div
      id="home"
      className="h-[100vh] w-[100vw] flex flex-col justify-center items-center gap-16 relative"
    >
      <img
        src="/images/milky.jpg"
        alt=""
        className="object-cover block absolute w-[100%] h-[100%] -z-10 brightness-[0.75]"
      />
      <h1
        className={`text-[80px] bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-orange-400 to-amber-200 font-medium text-center ${garamond.className}`}
      >
        Roushan Poddar
      </h1>
      {/* <span className="h-12" /> */}
      <p className="text-white text-4xl font-semibold text-center">
        Full Stack Developer
      </p>
    </div>
  );
};

export default Home;
