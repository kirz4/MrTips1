"use client";

import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function App() {
  return (
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
              src="https://i.imgur.com/u7B8sRi.jpeg"
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
              src="https://i.imgur.com/WXuJE6q.jpeg"
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
              src="https://i.imgur.com/b7eUkUB.png"
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
              src="https://i.imgur.com/spM9Vwf.jpeg"
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
  );
}

export default App;
