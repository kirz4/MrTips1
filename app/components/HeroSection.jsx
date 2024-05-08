"use client";
import React from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section id="about" className="lg:py-16 mb-[128px] mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-text-green-500 to-amber-400">
              Somos{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Mr.Tips", 1000, "Piteiras", 1000, "Exclusivas", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl mb-6">
            "Soprador de vidro que vai revolucionar sua sesh!"
          </p>
          <div className="align-items flex justify-start container">
            <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-lime-400 via-text-green-500 to-amber-600 hover:bg-slate-20 w-full sm:w-fit text-white flex justify-center items-center text-[30px]">
              <FaWhatsapp />
            </button>
            <a href="https://www.instagram.com/mrtipsbr/">
              <button className="px-1 py-1 rounded-full bg-gradient-to-br from-lime-400 via-text-green-500 to-amber-600 hover:bg-slate-700 text-white w-full sm:w-fit mr-4 justify-center items-center text-[30px]">
                <span className=" bg-[#854b25] hover:bg-[#b1734a] rounded-full px-14 py-3 xl:px-5 md:px-5 lg:px-5 flex block justify-center items-center">
                  <FaInstagram />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
          <div className="w-[400px] 2xl:w-[700px] xl:w-[600px] lg:w-[475px] sm:w-[300px] md:w-[400px] mr-50 h-[550px]">
            <Spline scene="https://prod.spline.design/vYtn1tG2JQTFQfst/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
