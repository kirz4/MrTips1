"use client";
import React from "react";

const AboutUs = () => {
  return (
    <div class="sm:flex items-center max-w-screen-xl">
      <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
          <img
            src="https://kingbong.com.br/media/wysiwyg/BongsFeitos3.webp"
            alt="Mr.Tips"
            className="rounded-xl shadow-lg w-full h-full object-cover object-center transition duration-200 hover:scale-110"
          />
        </div>
      </div>
      <div class="sm:w-1/2 p-5">
        <div class="text">
          <span class="text-white border-b-2 border-[#a6d232] font-bold">
            Um pouco da nossa História
          </span>
          <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
            Sobre{" "}
            <span class="text-[#a6d232] drop-shadow-[0_1.8px_1.8px_rgba(139,69,19,1)]">
              a Mr. Tips
            </span>
          </h2>
          <p class="text-gray-200">
            A Mr. Tips nasceu da paixão por piteiras de vidro. Desde então, nos
            tornamos referência em designs únicos e qualidade excepcional. De
            artesãos locais a entusiastas internacionais, nossa loja une uma
            comunidade de apreciadores de arte em vidro. Com variedade de
            piteiras clássicas a criações personalizadas, oferecemos
            sofisticação e estilo para todos os gostos. Nossa história é marcada
            pela dedicação à excelência e ao serviço excepcional, conectando
            amantes de piteiras em todo o mundo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
