"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  useEffect(() => {
    // Initialize AOS
    import("aos").then((AOS) => {
      AOS.init();
    });
  }, []);

  return (
    <div id="profil" className="mt-24 px-4 safe-area-top">
      <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center items-center gap-6 lg:gap-24 mt-12 md:mt-36 mobile-safe-margin hero-mobile-compact">
        <div className="bg-[#b69b43] w-80 h-80 lg:w-96 lg:h-96 rounded-full border-4 border-[#b69b43] shadow-[0px_0px_133px_20px_rgba(182,155,67,0.8)] overflow-hidden">
          <Image
            src="/assets/ghani1.jpg"
            alt="Ghani Profile Picture"
            width={400}
            height={400}
            className="w-full h-full object-cover object-[0px_-40px]"
          />
        </div>

        <div
          className="flex flex-col justify-center font-['Poppins'] mb-20 mt-20 relative text-center lg:text-left lg:min-h-[300px] lg:items-start items-center hero-text-compact hero-mobile-bottom hero-mobile-top"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p className="text-white text-base font-light">Hello i&apos;m a</p>
          <h1 className="text-white text-4xl lg:text-6xl font-bold mt-3">
            Fullstack Developer
          </h1>
          <p className="text-white font-medium mb-4 lg:mb-5 mt-3">
            Ghani Zulhusni Bahri
          </p>
          <a
            href="https://drive.google.com/drive/folders/18hIC6QdO7AWl-EgSawnfVbc8bqxY8uUk?usp=sharing"
            target="_blank"
            className="mt-5 bg-[#b69b43] text-white font-bold px-6 py-3 rounded-lg w-fit transition-all duration-300 hover:bg-white hover:text-[#b69b43] cursor-pointer self-center lg:self-end hero-button-compact"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
