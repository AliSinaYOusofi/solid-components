import React from "react";
import Image from "next/image";
import { RiBootstrapFill, RiTailwindCssFill } from "react-icons/ri";

export default function HeroSection() {
    return (
        <div className="mt-40 flex flex-col items-center justify-center w-full h-full text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase text-white drop-shadow-lg">
                Components You Need
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-white drop-shadow-lg mt-4">
                For Your Projects
            </h2>
            <p className="text-xl text-gray-300 mt-6 max-w-xl">
                Download high-quality components for React, crafted with Tailwind CSS
                and Bootstrap, to enhance your projects with ready-to-use designs.
            </p>

            <div className="flex  gap-10">
                
                <button className="flex gap-3 items-center justify-center mt-8 px-8 py-4 bg-[#2C2C2C] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-white/40 transition duration-300 ease-in-out">
                    <RiTailwindCssFill />
                    Tailwind Components
                </button>

                <button className="flex gap-3 items-center justify-center mt-8 px-8 py-4 bg-white text-black text-lg font-semibold rounded-full shadow-lg hover:bg-white/60 transition duration-300 ease-in-out">
                    <RiBootstrapFill />
                    Bootstrap Components
                </button>
            </div>
        </div>
  );
}
