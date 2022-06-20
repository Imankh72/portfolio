import { FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="homeBackground text-gray-200 mt-14 pt-16 pl-2 sm:text-left h-[100vh]">
      <h1 className="text-4xl mt-8 mb-12 sm:text-6xl md:text-7xl font-semibold">
        <span className="block">Hi,</span>
        <span className="block">I am Iman,</span>
        <span className="">Front-end developer</span>
      </h1>

      <div className="flex items-center gap-4">
        <a
          className="flex items-center justify-center gap-2 bg-gray-200 text-neutral-900 py-1 px-2 rounded-md hover:text-gray-200 hover:bg-neutral-900 transition-all text-xl sm:text-2xl md:text-3xl md:py-2 md:px-4"
          href="/static/iman-khorshidi.pdf"
          download="iman-khorshidi.pdf"
        >
          <FaDownload /> My CV
        </a>

        <a
          className="flex items-center justify-center gap-2 bg-gray-200 text-neutral-900 py-1 px-2 rounded-md hover:text-gray-200 hover:bg-neutral-900 transition-all text-xl sm:text-2xl md:text-3xl md:py-2 md:px-4"
          href="mailto:imankhorshidi@gmail.com"
        >
          <MdEmail /> Email me
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
