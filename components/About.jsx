import Image from "next/image";

const About = () => {
  return (
    <div className="darkGradient mt-14 py-6 h-[100vh] px-6">
      <h1 className="text-4xl pl-2 mb-16 sm:text-5xl ">About</h1>
      <div className="flex flex-col items-center gap-10 md:flex-row">
        <div className="rounded-full overflow-hidden w-[280px] h-[300px] ">
          <Image src="/static/images/iman.png" width={300} height={350} />
        </div>
        <div className="pt-6 md:w-[65%]">
          <p className="text-2xl md:text-3xl">
            Interested in programming specially in web development and going to
            be a MERN stack developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
