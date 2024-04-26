"use client";

import React, { useState } from "react";


const Coleções = () => {
  return (
    <section id="colecoes">
      <div class="py-6 sm:py-8 lg:py-12">
        <h1 className=" flex justify-center items-center text-5xl font-bold text-white">
          Coleções
        </h1>
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12" />

          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {/*<!-- image - start -->*/}
            <a
              href="#"
              class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              
              <img
                src="https://i.imgur.com/IiwhNN3.jpeg"
                loading="lazy"
                alt="Mr.Tips"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
            </a>
            {/*<!-- image - end -->*/}

            {/*<!-- image - start -->*/}
            <a
              href="#"
              class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://i.imgur.com/pcGmVnv.jpeg"
                loading="lazy"
                alt="Mr.Tips2"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
            </a>
            {/*<!-- image - end -->*/}

            {/*<!-- image - start -->*/}
            <a
              href="#"
              class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://i.imgur.com/HniLAbW.jpeg"
                loading="lazy"
                alt="Mr.Tips3"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
            </a>
            {/*<!-- image - end -->*/}

            {/*<!-- image - start -->*/}
            <a
              href="#"
              class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://i.imgur.com/HkluYHa.jpeg"
                loading="lazy"
                alt="Mr.Tips4"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
            </a>
            {/*<!-- image - end -->*/}
          </div>
        </div>
        <h1 className=" flex justify-center items-center text-5xl font-bold text-white mt-24">
          Estoque
        </h1>
      </div>
    </section>
  );
};

export default Coleções;
