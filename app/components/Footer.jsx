"use client";
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="bg-[#be703f]">
      <div class="mx-auto max-w-7xl py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <nav
          class="-mx-5 -my-2 flex flex-wrap justify-center order-2"
          aria-label="Footer"
        >
          <div class="px-5">
            <a href="#" class="text-base text-[#c5ff3f] hover:text-[#add64b]">
              Todos direitos reservados.
            </a>
          </div>
        </nav>
        <div class="mt-8 md:mb-8 flex justify-center space-x-6 md:order-3  ">
          <a href="#" class="text-[#c5ff3f] hover:text-[#add64b]">
            <FaWhatsapp />
          </a>

          <a href="#" class="text-[#c5ff3f] hover:text-[#add64b]">
            <FaInstagram />
          </a>
        </div>
        <div class="mt-8  md:order-1 md:mt-0 ">
          <p class="text-center text-base text-[#c5ff3f]">
            &copy; Mr. Tips Website.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
