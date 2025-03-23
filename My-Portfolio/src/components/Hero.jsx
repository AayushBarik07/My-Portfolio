import React from "react";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center text-white">
      <img src="compnents/profile.jpg"/>
      <h1 className="text-5xl font-bold">Hi, I'm Aayush Barik</h1>
      <p className="mt-4 text-xl">I am a Web Developer | React Enthusiast</p>
      <a href="#projects" className="mt-6 bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-700">View My Work</a>
    </section>
  );
};

export default Hero;
