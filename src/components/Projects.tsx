"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
  FreeMode,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init();
    });

    // Custom horizontal scroll handler for trackpad
    const handleWheel = (e: Event) => {
      const wheelEvent = e as WheelEvent;
      if (swiperRef.current && swiperRef.current.swiper) {
        // Detect horizontal scroll (shift+scroll or trackpad horizontal)
        if (Math.abs(wheelEvent.deltaX) > Math.abs(wheelEvent.deltaY)) {
          e.preventDefault();
          if (wheelEvent.deltaX > 0) {
            swiperRef.current.swiper.slideNext();
          } else {
            swiperRef.current.swiper.slidePrev();
          }
        }
        // Also handle vertical scroll as horizontal for carousel
        else if (Math.abs(wheelEvent.deltaY) > 0) {
          e.preventDefault();
          if (wheelEvent.deltaY > 0) {
            swiperRef.current.swiper.slideNext();
          } else {
            swiperRef.current.swiper.slidePrev();
          }
        }
      }
    };

    const swiperElement = document.querySelector(".project-swiper");
    if (swiperElement) {
      swiperElement.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (swiperElement) {
        swiperElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "PicEase",
      description:
        "PicEase adalah aplikasi galeri berbasis web yang dirancang untuk memudahkan pengguna dalam menyimpan, mengatur, dan menampilkan koleksi gambar mereka. Aplikasi ini menawarkan antarmuka yang intuitif dan responsif, memungkinkan pengguna untuk mengunggah, mengelompokkan, serta mencari gambar dengan cepat.",
      image: "/assets/PicEase.png",
      github: "https://github.com/Ghanz08/PicEase",
      delay: 0,
    },
    {
      id: 2,
      title: "Lapor Saja!",
      description:
        "Lapor Saja! adalah website pengaduan masyarakat yang memudahkan pengguna untuk melaporkan masalah publik secara online, melacak status laporan, dan berinteraksi dengan pihak terkait untuk penanganan yang efektif.",
      image: "/assets/Pengaduan Masyarakat.png",
      github: "https://github.com/Ghanz08/pengaduan_masyarakat",
      delay: 200,
    },
    {
      id: 3,
      title: "Plant Shop",
      description:
        "Plant Shop adalah proyek website e-commerce berbasis pengguna dan admin yang menjual berbagai tanaman. Platform ini memungkinkan transaksi online menggunakan integrasi Midtrans (dummy) untuk pembayaran, serta menyediakan fitur manajemen produk dan pesanan untuk admin.",
      image: "/assets/Plant-shop.png",
      github: "https://github.com/Ghanz08/Plant-Shop",
      delay: 0,
    },
    {
      id: 4,
      title: "CuanTrack",
      description:
        "CuanTrack adalah aplikasi pencatat keuangan yang dibuat menggunakan PHP Native dan Bootstrap. Aplikasi ini membantu pengguna dalam mencatat pemasukan dan pengeluaran secara sederhana dan efisien.",
      image: "/assets/CuanTrack.png",
      github: "https://github.com/Ghanz08/CuanTrack",
      delay: 0,
    },
    {
      id: 5,
      title: "NetrAI",
      description:
        "NetrAI adalah aplikasi mobile berbasis Flutter yang membantu tunanetra menjalani aktivitas sehari-hari dengan dukungan Gemini API, Firebase, dan Google Cloud API.",
      image: "/assets/NetrAI.png",
      github: "Forbidden",
      delay: 0,
    },
    {
      id: 6,
      title: "Portofolio Next.js",
      description:
        "Portofolio Next.js adalah proyek website portofolio yang dibangun menggunakan Next.js. Website ini menampilkan berbagai proyek dan pengalaman saya sebagai pengembang, serta dilengkapi dengan fitur responsif dan performa yang optimal.",
      image: "/assets/Portofolio.png",
      github: "https://github.com/Ghanz08/Portofolio-next",
      delay: 0,
    },
  ];

  return (
    <div id="project" className="py-24 overflow-visible">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-white text-4xl font-bold text-center mb-16 font-['Poppins']">
          Latest Project
        </h2>

        <div className="py-8 px-2 sm:px-4 md:px-6">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Mousewheel, FreeMode]}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            centerInsufficientSlides={true}
            mousewheel={{
              enabled: true,
              forceToAxis: true,
              invert: false,
              sensitivity: 1,
              releaseOnEdges: true,
              eventsTarget: "container",
              thresholdDelta: 20,
              thresholdTime: 300,
            }}
            touchEventsTarget="container"
            simulateTouch={true}
            touchRatio={1.2}
            touchAngle={25}
            shortSwipes={true}
            longSwipes={true}
            longSwipesRatio={0.3}
            longSwipesMs={200}
            followFinger={true}
            threshold={10}
            freeMode={{
              enabled: false,
              sticky: true,
            }}
            grabCursor={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                centeredSlides: true,
              },
            }}
            navigation={false}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            className="project-swiper !overflow-visible !pb-12"
            style={{ overflow: "visible" }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div
                  className="bg-[#0b090a] border-2 border-[#b69b43] rounded-2xl overflow-hidden w-full h-[500px] cursor-pointer group mx-auto max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[450px]"
                  style={{
                    transition: "all 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1.05) translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 25px 50px -12px rgba(182, 155, 67, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={project.delay}
                >
                  <div className="h-48 lg:h-56 bg-white flex items-center justify-center p-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={280}
                      height={160}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  <div className="p-6 h-[250px] lg:h-[300px] flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-[#b69b43] text-xl font-bold mb-3 font-['Poppins']">
                        {project.title}
                      </h3>
                      <p className="text-white text-sm leading-relaxed font-['Poppins'] line-clamp-4">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex justify-end mt-4 mb-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#b69b4393] text-white px-4 py-2 rounded-md font-bold text-sm w-fit transition-all duration-300 hover:bg-[#a08539] flex items-center gap-2 font-['Poppins'] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                      >
                        View Project
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style jsx global>{`
          .project-swiper {
            overflow: visible !important;
            padding: 20px 20px 50px 20px;
          }

          @media (min-width: 640px) {
            .project-swiper {
              padding: 20px 30px 50px 30px;
            }
          }

          @media (min-width: 1024px) {
            .project-swiper {
              padding: 20px 50px 50px 50px;
            }
          }

          .project-swiper .swiper-wrapper {
            overflow: visible !important;
          }
          .project-swiper .swiper-slide {
            overflow: visible !important;
            transition: all 0.3s ease-in-out;
            cursor: grab;
          }

          .project-swiper .swiper-slide:active {
            cursor: grabbing;
          }

          /* Desktop styles (3 cards) */
          @media (min-width: 1024px) {
            .project-swiper .swiper-slide {
              opacity: 0.4;
              transform: scale(0.85);
            }
            .project-swiper .swiper-slide-active {
              opacity: 1;
              transform: scale(1);
              z-index: 2;
            }
            .project-swiper .swiper-slide-next,
            .project-swiper .swiper-slide-prev {
              opacity: 0.6;
              transform: scale(0.92);
            }
          }

          /* Mobile and tablet styles (1 card) */
          @media (max-width: 1023px) {
            .project-swiper .swiper-slide {
              opacity: 1;
              transform: scale(1);
            }
            .project-swiper .swiper-slide-active {
              opacity: 1;
              transform: scale(1);
              z-index: 1;
            }
          }

          .project-swiper .swiper-pagination-bullet {
            background: #b69b43;
            opacity: 0.5;
            transition: all 0.3s ease;
          }
          .project-swiper .swiper-pagination-bullet-active {
            background: #b69b43;
            opacity: 1;
            transform: scale(1.2);
          }
          .project-swiper .swiper-pagination {
            bottom: 0 !important;
          }

          /* Hide scrollbars but keep functionality */
          .project-swiper {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .project-swiper::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
}
