import Image from "next/image";

const About = () => {
  return (
    <div className="darkGradient mt-14 py-6 h-[100vh] px-6">
      <h1 className="text-4xl pl-2 mb-8 sm:text-5xl">About</h1>
      <div className="flex gap-10">
        <div className="rounded-full overflow-hidden w-[280px] h-[320px]">
          <Image src="/static/images/iman.png" width={300} height={350} />
        </div>
        <div className="w-[60%] pt-20 ">
          <p className="text-2xl">
            Interested in programming specially in web development and going to
            be a MERN stack developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
