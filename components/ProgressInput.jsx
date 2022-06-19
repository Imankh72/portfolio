const ProgressInput = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between w-[90%]">
      <label>{label}</label>
      <input
        type="progress"
        className="inline-block h-[24px] w-[50%] text-center font-bold text-neutral-900 rounded-md "
        defaultValue={`${value}%`}
        readOnly
      />
    </div>
  );
};

ProgressInput.defaultProps = {
  label: "Html",
  value: "90",
};

export default ProgressInput;
