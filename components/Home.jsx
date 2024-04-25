import React from "react";

const Home = () => {
  return (
    <div id="home" className="h-[100vh] w-[100vw]">
      <img
        src="/images/hexes.jpg"
        alt=""
        className="object-cover block absolute w-[100%] h-[100%] -z-10 brightness-[0.25]"
      />
      <span className="h-12 w-[100vw]"></span>
      <h1 className="text-white text-4xl font-bold text-center pt-16">HOME</h1>
    </div>
  );
};

export default Home;
