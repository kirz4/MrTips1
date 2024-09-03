"use client";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { products } from "./data"; // Importe os dados dos produtos

const divStyle = {
  backgroundSize: "cover",
  height: "320px",
  width: "100%",
  backgroundPosition: "center",
  borderRadius: "10px 10px 0 0",
};

const ProjectsSection = () => {
  return (
    <>
      <h1 className="flex justify-center items-center text-5xl font-bold text-[#a6d232] drop-shadow-[0_1.8px_1.8px_rgba(139,69,19,1)] mt-24" id="projects">
        Estoque
      </h1>
      <section
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-32 mb-5"
      >
        {products.map((product) => (
          <div key={product.id} className="group w-72 bg-[#A4D434] shadow-xl scale-100 rounded-xl duration-500 hover:scale-105">
            <Slide className="rounded-xl" autoplay={false}>
              {product.images.map((slideImage, index) => (
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
            <div className="px-4 py-3 w-72">
              <span className="text-[#572d15b6] mr-3 uppercase text-xs font-bold">
                Mr.Tips
              </span>
              <p className="text-lg font-bold text-[#572d15] truncate block capitalize">
                {product.title}
              </p>
              <ul>
                <li className="text-[#572d15] font-bold text-[1px] invisible group-hover:visible group-hover:text-xs duration-300">
                  Técnica: {product.techniques}
                  <br />
                  {product.bodyColor} <br />
                  {product.thickness} <br />
                </li>
              </ul>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-[#572d15] cursor-auto my-3">
                  R${product.price}
                </p>
                <del className="text-[#572d15]">
                  <p className="text-sm text-[#572d15] cursor-auto ml-2">R${product.oldPrice}</p>
                </del>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProjectsSection;