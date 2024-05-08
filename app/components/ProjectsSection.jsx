"use client";
import React, { useState, useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://i.imgur.com/S2dSGJs.png",
    caption: "Slide 1",
  },
  {
    url: "https://i.imgur.com/JdZsDhV.jpeg",
    caption: "Slide 2",
  },
  {
    url: "https://i.imgur.com/CZOGhWx.jpeg",
    caption: "Slide 3",
  },
];

const divStyle = {
  backgroundSize: "cover",
  height: "320px",
  width: "100%",
  backgroundPosition: "center",
  borderRadius: "10px 10px 0 0",
  zIndex: 1,
};

const ProjectsSection = () => {
  return (
    <>
      <section
        id="projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {/* Produto 1 inicio :) */}
        <div class="group w-72 bg-[#A4D434] shadow-xl scale-100 rounded-xl duration-500 hover:scale-105 ">
          <Slide className="rounded-xl slide-container overflow-hidden">
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                ></div>
              </div>
            ))}
          </Slide>
          <div class="px-4 py-3 w-72">
            <span class="text-[#572d15b6] mr-3 uppercase text-xs font-bold">
              Mr.Tips
            </span>
            <p class="text-lg font-bold text-[#572d15] truncate block capitalize">
              Piteira bob esponja
            </p>
            <ul>
              <li className="text-[#572d15] font-bold text-[1px] invisible group-hover:visible group-hover:text-xs duration-300">
                Tecnica: Sopro
                <br />
                Material: Vidro <br />
                Milimetro: 3mm <br />
                Tamanho: 2cm <br />
                Cor: Amarelo <br />
              </li>
            </ul>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-[#572d15] cursor-auto my-3">
                R$149
              </p>
              <del className="text-[#572d15]">
                <p class="text-sm text-[#572d15] cursor-auto ml-2">R$199</p>
              </del>
            </div>
          </div>
        </div>
        {/* Produto 1 final :) */}

        {/* Produto 2 inicio :) */}
        <div class="group w-72 bg-[#A4D434] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://i.imgur.com/JdZsDhV.jpeg"
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-[#572d15b6] mr-3 uppercase text-xs font-bold">
                Mr.Tips
              </span>
              <p class="text-lg font-bold text-[#572d15] truncate block capitalize">
                Piteira bob esponja
              </p>
              <ul>
                <li className="text-[#572d15] font-bold text-[1px] invisible group-hover:visible group-hover:text-xs duration-300">
                  Tecnica: Sopro
                  <br />
                  Material: Vidro <br />
                  Milimetro: 3mm <br />
                  Tamanho: 2cm <br />
                  Cor: Amarelo <br />
                </li>
              </ul>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-[#572d15] cursor-auto my-3">
                  R$149
                </p>
                <del className="text-[#572d15]">
                  <p class="text-sm text-[#572d15] cursor-auto ml-2">R$199</p>
                </del>
              </div>
            </div>
          </a>
        </div>
        {/* Produto 2 final :) */}

        {/* Produto 3 inicio :) */}
        <div class="group w-72 bg-[#A4D434] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://i.imgur.com/CZOGhWx.jpeg"
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-[#572d15b6] mr-3 uppercase text-xs font-bold">
                Mr.Tips
              </span>
              <p class="text-lg font-bold text-[#572d15] truncate block capitalize">
                Piteira bob esponja
              </p>
              <ul>
                <li className="text-[#572d15] font-bold text-[1px] invisible group-hover:visible group-hover:text-xs duration-300">
                  Tecnica: Sopro
                  <br />
                  Material: Vidro <br />
                  Milimetro: 3mm <br />
                  Tamanho: 2cm <br />
                  Cor: Amarelo <br />
                </li>
              </ul>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-[#572d15] cursor-auto my-3">
                  R$149
                </p>
                <del className="text-[#572d15]">
                  <p class="text-sm text-[#572d15] cursor-auto ml-2">R$199</p>
                </del>
              </div>
            </div>
          </a>
        </div>
        {/* Produto 3 final :) */}

        {/* Produto 4 inicio :) */}
        <div class="group w-72 bg-[#A4D434] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://i.imgur.com/S2dSGJs.png"
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-[#572d15b6] mr-3 uppercase text-xs font-bold">
                Mr.Tips
              </span>
              <p class="text-lg font-bold text-[#572d15] truncate block capitalize">
                Piteira bob esponja
              </p>
              <ul>
                <li className="text-[#572d15] font-bold text-[1px] invisible group-hover:visible group-hover:text-xs duration-300">
                  Tecnica: Sopro
                  <br />
                  Material: Vidro <br />
                  Milimetro: 3mm <br />
                  Tamanho: 2cm <br />
                  Cor: Amarelo <br />
                </li>
              </ul>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-[#572d15] cursor-auto my-3">
                  R$149
                </p>
                <del className="text-[#572d15]">
                  <p class="text-sm text-[#572d15] cursor-auto ml-2">R$199</p>
                </del>
              </div>
            </div>
          </a>
        </div>
        {/* Produto 4 final :) */}

        {/* Produto 5 inicio :) */}
        <div class="group w-72 bg-[#A4D434] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://i.imgur.com/S2dSGJs.png"
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-[#572d15b6] mr-3 uppercase text-xs font-bold">
                Mr.Tips
              </span>
              <p class="text-lg font-bold text-[#572d15] truncate block capitalize">
                Piteira bob esponja
              </p>
              <ul>
                <li className="text-[#572d15] font-bold text-[1px] invisible group-hover:visible group-hover:text-xs duration-300">
                  Tecnica: Sopro
                  <br />
                  Material: Vidro <br />
                  Milimetro: 3mm <br />
                  Tamanho: 2cm <br />
                  Cor: Amarelo <br />
                </li>
              </ul>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-[#572d15] cursor-auto my-3">
                  R$149
                </p>
                <del className="text-[#572d15]">
                  <p class="text-sm text-[#572d15] cursor-auto ml-2">R$199</p>
                </del>
              </div>
            </div>
          </a>
        </div>
        {/* Produto 5 final :) */}

        {/* Produto 6 inicio :) */}
        <div class="group w-72 bg-[#A4D434] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://i.imgur.com/S2dSGJs.png"
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-[#572d15b6] mr-3 uppercase text-xs font-bold">
                Mr.Tips
              </span>
              <p class="text-lg font-bold text-[#572d15] truncate block capitalize">
                Piteira bob esponja
              </p>
              <ul>
                <li className="text-[#572d15] font-bold text-[1px] invisible group-hover:visible group-hover:text-xs duration-300">
                  Tecnica: Sopro
                  <br />
                  Material: Vidro <br />
                  Milimetro: 3mm <br />
                  Tamanho: 2cm <br />
                  Cor: Amarelo <br />
                </li>
              </ul>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-[#572d15] cursor-auto my-3">
                  R$149
                </p>
                <del className="text-[#572d15]">
                  <p class="text-sm text-[#572d15] cursor-auto ml-2">R$199</p>
                </del>
              </div>
            </div>
          </a>
        </div>
         {/* Produto 3 inicio :) */}
         <div class="group w-72 bg-[#A4D434] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://i.imgur.com/CZOGhWx.jpeg"
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-[#572d15b6] mr-3 uppercase text-xs font-bold">
                Mr.Tips
              </span>
              <p class="text-lg font-bold text-[#572d15] truncate block capitalize">
                Piteira bob esponja
              </p>
              <ul>
                <li className="text-[#572d15] font-bold text-[1px] invisible group-hover:visible group-hover:text-xs duration-300">
                  Tecnica: Sopro
                  <br />
                  Material: Vidro <br />
                  Milimetro: 3mm <br />
                  Tamanho: 2cm <br />
                  Cor: Amarelo <br />
                </li>
              </ul>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-[#572d15] cursor-auto my-3">
                  R$149
                </p>
                <del className="text-[#572d15]">
                  <p class="text-sm text-[#572d15] cursor-auto ml-2">R$199</p>
                </del>
              </div>
            </div>
          </a>
        </div>
        {/* Produto 3 final :) */}

        {/* Produto 4 inicio :) */}
        <div class="group w-72 bg-[#A4D434] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://i.imgur.com/S2dSGJs.png"
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-[#572d15b6] mr-3 uppercase text-xs font-bold">
                Mr.Tips
              </span>
              <p class="text-lg font-bold text-[#572d15] truncate block capitalize">
                Piteira bob esponja
              </p>
              <ul>
                <li className="text-[#572d15] font-bold text-[1px] invisible group-hover:visible group-hover:text-xs duration-300">
                  Tecnica: Sopro
                  <br />
                  Material: Vidro <br />
                  Milimetro: 3mm <br />
                  Tamanho: 2cm <br />
                  Cor: Amarelo <br />
                </li>
              </ul>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-[#572d15] cursor-auto my-3">
                  R$149
                </p>
                <del className="text-[#572d15]">
                  <p class="text-sm text-[#572d15] cursor-auto ml-2">R$199</p>
                </del>
              </div>
            </div>
          </a>
        </div>
        {/* Produto 4 final :) */}

        {/* Produto 5 inicio :) */}
        <div class="group w-72 bg-[#A4D434] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://i.imgur.com/S2dSGJs.png"
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <span class="text-[#572d15b6] mr-3 uppercase text-xs font-bold">
                Mr.Tips
              </span>
              <p class="text-lg font-bold text-[#572d15] truncate block capitalize">
                Piteira bob esponja
              </p>
              <ul>
                <li className="text-[#572d15] font-bold text-[1px] invisible group-hover:visible group-hover:text-xs duration-300">
                  Tecnica: Sopro
                  <br />
                  Material: Vidro <br />
                  Milimetro: 3mm <br />
                  Tamanho: 2cm <br />
                  Cor: Amarelo <br />
                </li>
              </ul>
              <div class="flex items-center">
                <p class="text-lg font-semibold text-[#572d15] cursor-auto my-3">
                  R$149
                </p>
                <del className="text-[#572d15]">
                  <p class="text-sm text-[#572d15] cursor-auto ml-2">R$199</p>
                </del>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};
export default ProjectsSection;
