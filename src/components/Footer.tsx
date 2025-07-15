import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b090a] py-12 mt-16">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-white text-3xl font-bold mb-4 font-['Poppins']">
          Stay Connected
        </h2>
        <p className="text-gray-400 mb-8 font-['Poppins']">
          &copy; {currentYear} Ghani Zulhusni Bahri. All rights reserved.
        </p>

        <div className="flex justify-center gap-6">
          <a
            target="_blank"
            href="http://www.linkedin.com/in/ghanizulhusni"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#ffffff] flex items-center justify-center transition-all duration-300 hover:bg-[#a08539] transform hover:-translate-y-1"
          >
            <Image
              src="/assets/linkedin.png"
              alt="LinkedIn"
              width={26}
              height={26}
            />
          </a>
          <a
            target="_blank"
            href="https://github.com/Ghanz08"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#ffffff] flex items-center justify-center transition-all duration-300 hover:bg-[#a08539] transform hover:-translate-y-1"
          >
            <Image
              src="/assets/github.png"
              alt="GitHub"
              width={26}
              height={26}
            />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/zulhusnibahri_06"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#ffffff] flex items-center justify-center transition-all duration-300 hover:bg-[#a08539] transform hover:-translate-y-1"
          >
            <Image
              src="/assets/instagram.png"
              alt="Instagram"
              width={26}
              height={26}
            />
          </a>
          <a
            target="_blank"
            href="https://open.spotify.com/user/psyhqhkn9m8nwwgfq8sk9ezhl?si=10fd32c900484e32"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#ffffff] flex items-center justify-center transition-all duration-300 hover:bg-[#a08539] transform hover:-translate-y-1"
          >
            <Image
              src="/assets/spotify.png"
              alt="Spotify"
              width={26}
              height={26}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
