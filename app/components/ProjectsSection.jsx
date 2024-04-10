"use client";
import React, { useState, useRef } from "react";

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  return (
    <>
      <section
        id="projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {/* Produto 1 inicio :) */}
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
      </section>
    </>
  );
};
export default ProjectsSection;
