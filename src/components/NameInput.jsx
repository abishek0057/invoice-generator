import React, { useState } from "react";

const NameInput = ({ person, sendInput }) => {
  const [name, setName] = useState("");
  const [isvalid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const isValidInput = /^[A-Za-z ]+$/.test(inputValue);
    setName(inputValue);
    if (!isValidInput) {
      setIsValid(false);
    } else {
      setIsValid(true);
      sendInput({
        value: inputValue,
        type: person.replace(":", "").toLowerCase(),
      });
    }
  };

  return (
    <div className='grow'>
      <h1 className='font-semibold text-lg pb-1'>{person}</h1>
      <input
        className='p-2 rounded-md outline-none indent-1 w-full bg-slate-100'
        type='text'
        placeholder={person.replace(":", "") + " name"}
        onChange={handleChange}
        value={name}
        required
      />
      {!isvalid && <p className='absolute pl-2 text-red-600'>Invalid name</p>}
    </div>
  );
};

export default NameInput;
