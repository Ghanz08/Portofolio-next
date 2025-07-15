"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    {
      src: "/assets/ghani1.jpg",
      alt: "Ghani Picture 1",
      position: "object-[0_-80px]",
    },
    {
      src: "/assets/ghani2.jpg",
      alt: "Ghani Picture 2",
      position: "object-[0_-80px]",
    },
    {
      src: "/assets/Ghani3.jpg",
      alt: "Ghani Picture 3",
      position: "object-[0_-80px]",
    },
    {
      src: "/assets/Ghani4.jpg",
      alt: "Ghani Picture 4",
      position: "object-[0_-80px]",
    },
    {
      src: "/assets/ghani5.jpeg",
      alt: "Ghani Picture 5",
      position: "object-center",
    },
    {
      src: "/assets/ghani6.jpeg",
      alt: "Ghani Picture 6",
      position: "object-[-70px_0px]",
    },
  ];

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init();
    });
  }, []);

  useEffect(() => {
    // Auto-rotate carousel - berjalan terus menerus
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        // Hanya ganti jika tidak sedang di-hover
        if (isHovered) return prevIndex;
        return (prevIndex + 1) % 6; // Cycle through all images
      });
    }, 3000); // Ganti foto setiap 3 detik

    return () => clearInterval(interval);
  }, [isHovered, images.length]); // Depend pada isHovered dan images.length

  return (
    <div
      id="about-me"
      className="mt-24 pt-48 px-4 about-mobile-spacing"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="bg-[#b69121] w-full max-w-6xl h-auto lg:h-[500px] rounded-3xl mx-auto px-8 lg:px-20 py-12 lg:py-0 flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 shadow-[0px_0px_26px_10px_#b69b4350]">
        <div
          className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden flex-shrink-0 relative about-photo-carousel about-photo-border"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 carousel-image-fade ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={350}
                height={350}
                className={`w-full h-full object-cover ${image.position}`}
                priority={index === 0} // Prioritas untuk gambar pertama
              />
            </div>
          ))}

          {/* Indikator carousel */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full carousel-dot ${
                  index === currentImageIndex
                    ? "bg-white scale-125 active"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="font-['Poppins'] text-white w-full lg:w-[55%] flex flex-col gap-2 text-center lg:text-left">
          <h2 className="text-2xl lg:text-3xl font-bold">
            Software Engineering Student
          </h2>
          <p className="leading-relaxed">
            Hello, I&apos;m a software engineering student at Universitas Gadjah
            Mada. My major is Software Engineering Technology, and I&apos;ve
            been pursuing this field since vocational high school. So yes, you
            could say that I have been involved a lot in the world of IT
          </p>

          <div className="mt-5 w-full flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button
              onClick={() => {
                const section = document.getElementById("contact-me");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-white text-[#b69121] border border-white px-0 py-2 rounded-md text-base font-bold w-36 cursor-pointer transition-all duration-100 hover:bg-[#b69121] hover:text-white hover:border-white"
            >
              Contact Me
            </button>

            <div className="flex gap-4">
              <a
                target="_blank"
                href="http://www.linkedin.com/in/ghanizulhusni"
                className="w-10 h-10 rounded-lg flex items-center justify-center hover:scale-110 transition-colors"
              >
                <Image
                  src="/assets/linkedin.png"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </a>
              <a
                target="_blank"
                href="https://github.com/Ghanz08"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-white hover:scale-110 transition-colors"
              >
                <Image
                  src="/assets/github.png"
                  alt="GitHub"
                  width={30}
                  height={30}
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/zulhusnibahri_06"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-white hover:scale-110 transition-colors"
              >
                <Image
                  src="/assets/instagram.png"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
