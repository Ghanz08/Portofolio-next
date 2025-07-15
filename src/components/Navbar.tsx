"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about-me",
        "tech-stack",
        "project",
        "contact-me",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(
          section === "home" ? "" : section
        );
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex flex-row w-full px-12 py-10 justify-center font-['Poppins'] relative">
        {/* Logo */}
        <div className="absolute left-24">
          <a href="#" className="text-[#b69b43] font-bold text-xl">
            Ghani.portfolio;
          </a>
        </div>

        {/* Desktop Navigation Menu */}
        <ol className="flex flex-row list-none gap-10">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className={`text-sm font-bold cursor-pointer transition-all duration-200 hover:text-[#b69b43] ${
                activeSection === "home" ? "text-white" : "text-white/70"
              }`}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about-me"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about-me");
              }}
              className={`text-sm font-bold cursor-pointer transition-all duration-200 hover:text-[#b69b43] ${
                activeSection === "about-me" ? "text-white" : "text-white/70"
              }`}
            >
              ABOUT ME
            </a>
          </li>
          <li>
            <a
              href="#tech-stack"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("tech-stack");
              }}
              className={`text-sm font-bold cursor-pointer transition-all duration-200 hover:text-[#b69b43] ${
                activeSection === "tech-stack" ? "text-white" : "text-white/70"
              }`}
            >
              TECH STACK
            </a>
          </li>
          <li>
            <a
              href="#project"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("project");
              }}
              className={`text-sm font-bold cursor-pointer transition-all duration-200 hover:text-[#b69b43] ${
                activeSection === "project" ? "text-white" : "text-white/70"
              }`}
            >
              PROJECT
            </a>
          </li>
          <li>
            <a
              href="#contact-me"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact-me");
              }}
              className={`text-sm font-bold cursor-pointer transition-all duration-200 hover:text-[#b69b43] ${
                activeSection === "contact-me" ? "text-white" : "text-white/70"
              }`}
            >
              CONTACT
            </a>
          </li>
        </ol>
      </nav>

      {/* Mobile Top Bar - Only Logo */}
      <div className="md:hidden flex justify-center py-6 px-6 relative mobile-navbar-safe">
        <a href="#" className="text-[#b69b43] font-bold text-lg">
          Ghani.portfolio;
        </a>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav 
        className="mobile-bottom-nav md:hidden fixed bottom-0 left-0 right-0 bg-[#0b090a] border-t border-gray-800 px-4 py-2 z-[9999] shadow-lg backdrop-blur-sm"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          transform: 'none'
        }}
      >
        <div className="flex justify-around items-center max-w-md mx-auto">
          {/* Home */}
          <button
            onClick={() => scrollToSection("home")}
            className={`flex flex-col items-center justify-center p-2 transition-all duration-200 ${
              activeSection === "home" ? "text-[#b69b43]" : "text-gray-400"
            }`}
          >
            <svg
              className="w-5 h-5 mb-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs font-medium">Home</span>
          </button>

          {/* About */}
          <button
            onClick={() => scrollToSection("about-me")}
            className={`flex flex-col items-center justify-center p-2 transition-all duration-200 ${
              activeSection === "about-me" ? "text-[#b69b43]" : "text-gray-400"
            }`}
          >
            <svg
              className="w-5 h-5 mb-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs font-medium">About</span>
          </button>

          {/* Tech Stack */}
          <button
            onClick={() => scrollToSection("tech-stack")}
            className={`flex flex-col items-center justify-center p-2 transition-all duration-200 ${
              activeSection === "tech-stack"
                ? "text-[#b69b43]"
                : "text-gray-400"
            }`}
          >
            <svg
              className="w-5 h-5 mb-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs font-medium">Tech</span>
          </button>

          {/* Projects */}
          <button
            onClick={() => scrollToSection("project")}
            className={`flex flex-col items-center justify-center p-2 transition-all duration-200 ${
              activeSection === "project" ? "text-[#b69b43]" : "text-gray-400"
            }`}
          >
            <svg
              className="w-5 h-5 mb-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            <span className="text-xs font-medium">Projects</span>
          </button>

          {/* Contact */}
          <button
            onClick={() => scrollToSection("contact-me")}
            className={`flex flex-col items-center justify-center p-2 transition-all duration-200 ${
              activeSection === "contact-me"
                ? "text-[#b69b43]"
                : "text-gray-400"
            }`}
          >
            <svg
              className="w-5 h-5 mb-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-xs font-medium">Contact</span>
          </button>
        </div>
      </nav>
    </>
  );
}
