import { FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-neutral-900 flex flex-col items-center gap-2 p-2 sm:flex-row sm:justify-between md:p-4 ">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <MdEmail />
          <a href="mailto:imankhorshidi@gmail.com">Email me</a>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone />
          <p>Tel : +98-9361419215</p>
        </div>
      </div>
      <div>
        <p>&copy; All rights reserved by iman khorshidi</p>
      </div>
    </div>
  );
};

export default Footer;
