import React, { useState } from "react";

const RateInput = ({ sendInput, title, type }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
    sendInput({ value: e.target.value, type });
  };
  return (
    <div>
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
    </div>
  );
};

export default RateInput;
