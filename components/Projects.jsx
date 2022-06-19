import Image from "next/image";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div className="darkGradient mt-14 py-6 h-[100%] md:h-[100vh]">
      <h1 className="text-4xl pl-2 mb-8 sm:text-5xl">Projects</h1>
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-14">
        {projects.map(({ id, title, image, technologies, source, visit }) => (
          <div
            key={id}
            className="overflow-hidden rounded-md text-center shadow-md shadow-gray-800 w-[250px] h-[420px] pb-4"
          >
            <Image src={image} width={250} height={250} />
            <h3>{title}</h3>
            <span className="w-[50px] h-[2px] rounded-md bg-yellow-200 inline-block"></span>
            <div className="w-[90%] flex items-center justify-center gap-2 flex-wrap mb-2 h-[15%]">
              {technologies.map((tech, index) => (
                <ul key={index}>
                  <li>{tech}</li>
                </ul>
              ))}
            </div>
            <div className="flex items-center justify-between px-4 pt-1 ">
              <a
                href={visit}
                className="bg-gray-200 opacity-80 text-neutral-900 px-2 py-1 rounded-md cursor-pointer hover:opacity-100 transition-all "
                target="_blank"
              >
                Visit
              </a>
              <a
                href={source}
                className="bg-gray-200 opacity-80 text-neutral-900 px-2 py-1 rounded-md cursor-pointer hover:opacity-100 transition-all"
                target="_blank"
              >
                Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
