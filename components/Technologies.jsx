const Technologies = () => {
  return (
    <div className="darkGradient mt-14 py-6 h-[100%] md:h-[100vh]">
      <h1 className="text-4xl pl-2 mb-8 sm:text-5xl">Technologies</h1>
      <div className="grid grid-cols-1 px-2 gap-y-2">
        <div className="flex items-center justify-between w-[90%]">
          <label>Html</label>
          <input
            type="progress"
            className="inline-block h-[24px] w-[70%] text-center text-neutral-900 rounded-md "
            defaultValue="90%"
            readOnly
          />
        </div>
        <div className="flex items-center justify-between w-[90%]">
          <label>Css</label>
          <input
            type="progress"
            className="inline-block h-[24px] w-[70%] text-center text-neutral-900 rounded-md "
            defaultValue="90%"
            readOnly
          />
        </div>
        <div className="flex items-center justify-between w-[90%]">
          <label>Html</label>
          <input
            type="progress"
            className="inline-block h-[24px] w-[70%] text-center text-neutral-900 rounded-md "
            defaultValue="90%"
            readOnly
          />
        </div>
        <div className="flex items-center justify-between w-[90%]">
          <label>Bootstrap</label>
          <input
            type="progress"
            className="inline-block h-[24px] w-[70%] text-center text-neutral-900 rounded-md "
            defaultValue="80%"
            readOnly
          />
        </div>
        <div className="flex items-center justify-between w-[90%]">
          <label>TailwindCss</label>
          <input
            type="progress"
            className="inline-block h-[24px] w-[70%] text-center text-neutral-900 rounded-md "
            defaultValue="80%"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
