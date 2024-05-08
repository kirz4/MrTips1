"use client";
import React, { useState, useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://i.imgur.com/SvGyHs1.jpeg",
    caption: "01-Pretas Artisticas Reto.jpg",
  },
  {
    url: "https://i.imgur.com/X1eB5mW.jpeg",
    caption: "01.1 - Pretas Wig e Implosion.jpg",
  },
];
const slideImages2 = [
  {
    url: "https://i.imgur.com/Fq4jG2I.jpeg",
    caption: "03 - Artisticas Verdes Reto.jpg",
  },
  {
    url: "https://i.imgur.com/UWSwWUI.jpeg",
    caption: "03.1 - Artisticas Verde Varias",
  },
];
const slideImages3 = [
  {
    url: "https://i.imgur.com/DGXgF1b.jpeg",
    caption: "05 - Donuts Wig-Wag e Reverse Reto",
  },
  {
    url: "https://i.imgur.com/QkWgoHr.jpeg",
    caption: "05.1 - Donuts Wig Varios",
  },
];
const slideImages4 = [
  {
    url: "https://i.imgur.com/2JIHNOy.jpeg",
    caption: "06 - Implosion Snake Reta",
  },
  {
    url: "https://i.imgur.com/yiMyIJP.jpeg",
    caption: "06.1 - Implosion Snake Varias",
  },
];
const slideImages5 = [
  {
    url: "https://i.imgur.com/AY6jv2F.jpeg",
    caption: "07 - Wig-Wag e Reverse Snake",
  },
  {
    url: "https://i.imgur.com/T6N7CMC.jpeg",
    caption: "07.1 - Wig-Wag Snake Varios",
  },
];
const slideImages6 = [
  {
    url: "https://i.imgur.com/moYJIjx.jpeg",
    caption: "08 - Waves Snake Reto",
  },
  {
    url: "https://i.imgur.com/viT6Yt5.jpeg",
    caption: "08.1 - Waves Snake varias",
  },
];

const divStyle = {
  backgroundSize: "cover",
  height: "320px",
  width: "100%",
  backgroundPosition: "center",
  borderRadius: "10px 10px 0 0",
};
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
        <div class="group w-72 bg-[#A4D434] shadow-xl scale-100 rounded-xl duration-500 hover:scale-105">
          <Slide className="rounded-xl">
            {slideImages.map((slideImage, index) => (
              <div key={index} className="h-80 w-72 object-cover rounded-t-xl">
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
        <div class="group w-72 bg-[#A4D434] shadow-xl scale-100 rounded-xl duration-500 hover:scale-105">
          <Slide className="rounded-xl">
            {slideImages2.map((slideImage, index) => (
              <div key={index} className="h-80 w-72 object-cover rounded-t-xl">
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
        {/* Produto 2 final :) */}

        {/* Produto 3 inicio :) */}
        <div class="group w-72 bg-[#A4D434] shadow-xl scale-100 rounded-xl duration-500 hover:scale-105">
          <Slide className="rounded-xl">
            {slideImages3.map((slideImage, index) => (
              <div key={index} className="h-80 w-72 object-cover rounded-t-xl">
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
        {/* Produto 3 final :) */}

        {/* Produto 4 inicio :) */}
        <div class="group w-72 bg-[#A4D434] shadow-xl scale-100 rounded-xl duration-500 hover:scale-105">
          <Slide className="rounded-xl">
            {slideImages4.map((slideImage, index) => (
              <div key={index} className="h-80 w-72 object-cover rounded-t-xl">
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
        {/* Produto 4 final :) */}

        {/* Produto 5 inicio :) */}
        <div class="group w-72 bg-[#A4D434] shadow-xl scale-100 rounded-xl duration-500 hover:scale-105">
          <Slide className="rounded-xl">
            {slideImages5.map((slideImage, index) => (
              <div key={index} className="h-80 w-72 object-cover rounded-t-xl">
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
        {/* Produto 5 final :) */}

        {/* Produto 6 inicio :) */}
        <div class="group w-72 bg-[#A4D434] shadow-xl scale-100 rounded-xl duration-500 hover:scale-105">
          <Slide className="rounded-xl">
            {slideImages6.map((slideImage, index) => (
              <div key={index} className="h-80 w-72 object-cover rounded-t-xl">
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
