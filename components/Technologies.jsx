import ProgressInput from "./ProgressInput";

const Technologies = () => {
  return (
    <div className="darkGradient mt-14 py-6 h-[100vh] ">
      <h1 className="text-4xl pl-2 mb-8 sm:text-5xl">Technologies</h1>
      <div className="grid grid-cols-1 px-2 gap-y-3 md:grid-cols-2 md:gap-y-8">
        <ProgressInput />
        <ProgressInput label="Css" value="85" />
        <ProgressInput label="Sass" value="80" />
        <ProgressInput label="Bootstrap" value="80" />
        <ProgressInput label="TailwindCss" value="80" />
        <ProgressInput label="Js" value="80" />
        <ProgressInput label="React" value="80" />
        <ProgressInput label="Redux" value="80" />
        <ProgressInput label="Styled Components" value="90" />
        <ProgressInput label="Git" value="80" />
        <ProgressInput label="NextJs" value="40" />
        <ProgressInput label="Typescript" value="10" />
        <ProgressInput label="Material UI" value="20" />
      </div>
    </div>
  );
};

export default Technologies;
