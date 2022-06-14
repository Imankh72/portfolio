import Link from "next/link";
import { DiCssdeck } from "react-icons/di";

const Header = () => {
  return (
    <div className="flex flex-col justify-between gap-7">
      <div>
        <Link href="/">
          <a className="flex items-center justify-between text-2xl">
            <DiCssdeck size="3rem" />
            <span>Portfolio</span>
          </a>
        </Link>
      </div>
      <div>
        <ul className="flex flex-col gap-5">
          <li className="navLink">
            <Link href="#projects">
              <a>Projects</a>
            </Link>
          </li>
          <li className="navLink">
            <Link href="#technologies">
              <a>Technologies</a>
            </Link>
          </li>
          <li className="navLink">
            <Link href="#about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
