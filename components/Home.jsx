import { Exo_2 } from "next/font/google";
import React from "react";

const garamond = Exo_2({ subsets: ["latin"] });

const Home = () => {
  return (
    <div
      id="home"
      className="h-[100vh] w-[100vw] flex flex-col justify-center items-center relative -z-10"
    >
      <img
        src="/images/milky.jpg"
        alt=""
        className="object-cover block absolute w-[100%] h-[100%] -z-10 brightness-[0.5]"
      />
      <h1
        className={`text-[100px]  bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-orange-400 to-amber-200 font-semibold text-center ${garamond.className}`}
      >
        Roushan Poddar
      </h1>

      <p
        className={`text-5xl font-light text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-200 to-orange-400 ${garamond.className}`}
      >
        Full Stack Developer
      </p>
      {/* <span className="h-32" /> */}
    </div>
  );
};

export default Home;
