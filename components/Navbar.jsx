import { useState } from "react";
import Link from "next/link";

import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Projects", "Technologies", "About"];

  return (
    <nav className="bg-gray-800 w-[100%] h-[60px] fixed top-0 left-0 text-white shadow-lg shadow-black/30 text-xl px-2 md:flex md:justify-between md:max-w-7xl xl:left-[50%] xl:desktopNavBar">
      <div className="flex items-center justify-between h-full md:gap-3">
        {open ? (
          <CloseIcon
            className="w-8 hover:cursor-pointer hover:opacity-80 transition-all md:hidden"
            onClick={() => setOpen(false)}
          />
        ) : (
          <MenuIcon
            className="w-8 hover:cursor-pointer hover:opacity-80 transition-all md:hidden"
            onClick={() => setOpen(true)}
          />
        )}

        <span>Portfolio </span>
      </div>
      <ul
        className={`flex flex-col space-y-4 absolute w-[60%] h-[100vh] bg-gray-800 py-5 px-2 ${
          open ? "left-0" : "left-[-100%]"
        } transition-all duration-500 ease-in-out sm:w-[30%] md:flex-row md:w-auto md:h-auto md:static md:space-y-0 md:items-center md:gap-10 md:justify-center`}
      >
        {links.map((link, index) => (
          <Link href={`/${link.toLowerCase()}`} key={index}>
            <a className="p-2 hover:cursor-pointer hover:text-gray-800 hover:bg-white w-[95%] transition-all rounded md:w-auto md:rounded-md">
              {link}
            </a>
          </Link>
        ))}
        <li>
          <a href="https://www.linkedin.com/in/iman-khorshidi/">
            <FaLinkedin className="text-3xl ml-2 mb-2 mt-1 cursor-pointer md:mb-0 md:mt-0" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Imankh72">
            <FaGithub className="text-3xl ml-2 cursor-pointer" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
