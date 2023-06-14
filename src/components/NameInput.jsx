import React, { useState } from "react";

const NameInput = ({ person, sendInput }) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
    sendInput({ value: { [person]: e.target.value } });
  };

  return (
    <div className='grow'>
      <h1 className='pb-1 text-lg font-semibold'>{person}</h1>
      <input
        className='p-2 w-full rounded-md outline-none indent-1 bg-slate-100'
        type='text'
        placeholder={person.replace(":", "") + " name"}
        onChange={handleChange}
        value={name}
      />
    </div>
  );
};

export default NameInput;
