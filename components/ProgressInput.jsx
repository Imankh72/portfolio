const ProgressInput = ({ label, value }) => {
  console.log(value);
  return (
    <div className="flex items-center w-[90%]">
      <label className="flex-[0.5] font-bold">{label}</label>
      <div className="h-4 flex-1 bg-gray-200 rounded-full w-[90%]">
        <div
          className="h-4 bg-gray-500 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

ProgressInput.defaultProps = {
  label: "Html",
  value: "90",
};

export default ProgressInput;
