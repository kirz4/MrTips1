"use client";
import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            ref={videoRef}
            className="min-w-full min-h-full absolute object-cover"
            src="https://i.imgur.com/18DgsKr.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
        <div className="video-content space-y-2 z-10">
          <h1 className="font-bold text-5xl text-[#a6d232] drop-shadow-[0_1.8px_1.8px_rgba(139,69,19,1)]">Mr.Tips</h1>
          <h3 className="lg:text-xl text-[#a6d232] drop-shadow-[0_1.8px_1.8px_rgba(139,69,19,1)]">Piteiras de Vidro</h3>
        </div>
      </section>
    </>
  );
};
export default HeroSection;