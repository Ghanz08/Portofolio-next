"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function TechStack() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init();
    });
  }, []);

  const techCategories = [
    {
      id: "frontend",
      label: "FRONTEND",
      technologies: [
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          needsBg: true,
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
      ],
    },
    {
      id: "backend",
      label: "BACKEND",
      technologies: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          needsBg: true,
        },
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
          name: "Laravel",
          icon: "https://raw.githubusercontent.com/laravel/art/master/laravel-logo.svg",
        },
      ],
    },
    {
      id: "database",
      label: "DATABASE",
      technologies: [
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        // {
        //   name: "MongoDB",
        //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        // },
        // {
        //   name: "PostgreSQL",
        //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        // },
      ],
    },
    {
      id: "tools",
      label: "TOOLS",
      technologies: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          needsBg: true,
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "VS Code",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
          name: "Postman",
          icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
      ],
    },
  ];

  const scrollToSection = (sectionId: string) => {
    document
      .querySelector(`#${sectionId}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="tech-stack"
      className="bg-[#0b090a00] text-white py-20 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2
            className="text-white text-4xl font-bold mb-4 font-['Poppins']"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tech Stack
          </h2>
          <p
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Tech Categories */}
        <div className="flex flex-col gap-20">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className="flex md:flex-row flex-col gap-8 items-start"
              id={category.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={categoryIndex * 200}
            >
              {/* Category Label */}
              <div className="w-full md:w-1/5 text-gray-400 text-lg font-bold sticky top-18">
                <div
                  className="category-label cursor-pointer hover:text-[#b69b43] transition-all duration-30 hover:drop-shadow-[0_0_25px_#b69b43] hover:filter hover:brightness-110"
                  style={{
                    transformOrigin: "left center",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                  onClick={() => scrollToSection(category.id)}
                >
                  {category.label}
                </div>
              </div>

              {/* Tech Grid */}
              <div className="w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 hover:text-[#b69b43] transition-all duration-30 cursor-pointer group"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={techIndex * 100}
                  >
                    <div
                      className={`w-6 h-6 flex-shrink-0 ${
                        tech.needsBg ? "bg-white rounded p-0.5" : ""
                      }`}
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-lg group-hover:text-[#b69b43] transition-all duration-30 group-hover:drop-shadow-[0_0_15px_#b69b43] group-hover:filter group-hover:brightness-110">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
