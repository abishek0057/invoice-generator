import { useState } from "react";

const DatePicker = ({ sendInput }) => {
  const [date, setDate] = useState(new Date().toJSON().slice(0, 10));

  const handleChange = (e) => {
    setDate(e.target.value);
    sendInput({ value: e.target.value, type: "date" });
  };

  return (
    <div className='pt-2'>
      <label className='text-lg font-semibold mr-2'>Bill Date:</label>
      <input
        type='date'
        className='outline-none text-base font-normal bg-transparent'
        value={date}
        onChange={handleChange}
      />
    </div>
  );
};

export default DatePicker;
