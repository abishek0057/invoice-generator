import React, { useState } from "react";

const RateInput = ({ sendInput, title }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
    sendInput({ value: { [title]: e.target.value } });
  };
  return (
    <div className='w-full'>
      <h1 className='pb-2 text-lg font-semibold'>{title}</h1>
      <div className='flex items-center'>
        <input
          className='p-2 w-full rounded-l-md outline-none indent-1'
          type='number'
          placeholder='0.0'
          onChange={handleChange}
          value={inputValue}
        />
        <span className='px-4 py-2 text-gray-500 bg-gray-200 rounded-r-md'>
          %
        </span>
      </div>
    </div>
  );
};

export default RateInput;
