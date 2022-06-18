import { useState } from "react";
import Link from "next/link";

import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Projects", "Technologies", "About"];

  return (
    <nav className="navBar">
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

        <Link href="/">
          <a className="text-2xl">Iman Khorshidi</a>
        </Link>
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
        <li className="transition-all md:hover:scale-125 md:ml-72">
          <a href="https://www.linkedin.com/in/iman-khorshidi/" target="_blank">
            <FaLinkedin className="transition-all text-3xl ml-2 mb-2 mt-12 cursor-pointer hover:scale-125 md:mb-0 md:mt-0 md:hover:scale-100" />
          </a>
        </li>
        <li className="transition-all md:hover:scale-125">
          <a href="https://github.com/Imankh72" target="_blank">
            <FaGithub className="transition-all text-3xl ml-2 cursor-pointer hover:scale-125 md:hover:scale-100" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
