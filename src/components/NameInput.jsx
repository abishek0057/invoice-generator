import React, { useState } from "react";

const NameInput = ({ person, sendInput }) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
    sendInput({
      value: e.target.value,
      type: person.replace(":", "").toLowerCase(),
    });
  };

  return (
    <div>
      <h1 className='font-semibold text-lg pb-1'>{person}</h1>
      <input
        className='p-2 rounded-md outline-none indent-1 w-full bg-slate-100'
        type='text'
        placeholder={person.replace(":", "") + " name"}
        onChange={handleChange}
        value={name}
      />
    </div>
  );
};

export default NameInput;
