import { useState } from "react";

const RateInput = ({ sendInput, title }) => {
  const [inputValue, setInputValue] = useState("");
  const [validInp, setValidInp] = useState(true);
  const handleChange = (e) => {
    const inpVal = e.target.value;
    if (inpVal === "") {
      setValidInp(true);
      setInputValue("");
      sendInput({
        value: 0,
        type: title.toLowerCase().split(" ")[0],
      });
    } else if (/^(?:[1-9][0-9]?|100)$/.test(inpVal)) {
      setValidInp(true);
      setInputValue(inpVal);
      sendInput({
        value: parseInt(inpVal),
        type: title.toLowerCase().split(" ")[0],
      });
    } else {
      setValidInp(false);
      setInputValue(inpVal);
    }
  };
  return (
    <div className='w-full'>
      <h1 className='font-semibold text-lg pb-2'>{title}</h1>
      <div className='flex items-center'>
        <input
          className='p-2 rounded-l-md outline-none indent-1 w-full'
          type='number'
          placeholder='0.0'
          onChange={handleChange}
          value={inputValue}
        />
        <span className='rounded-r-md bg-gray-200 py-2 px-4 text-gray-500 '>
          %
        </span>
      </div>
      {!validInp && (
        <p className='text-red-600 pl-2'>
          {title.toLowerCase().replace(":", "")} must be between 0 and 100
        </p>
      )}
    </div>
  );
};

export default RateInput;
