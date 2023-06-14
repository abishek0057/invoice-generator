import React, { useState } from "react";

const DatePicker = ({ sendInput }) => {
  const [date, setDate] = useState(new Date().toJSON().slice(0, 10));

  const handleChange = (e) => {
    setDate(e.target.value);
    sendInput({ value: { date: e.target.value } });
  };

  return (
    <div className="pt-2">
      <label className="mr-2 text-lg font-semibold">Bill Date:</label>
      <input
        type="date"
        className="text-base font-normal bg-transparent outline-none"
        value={date}
        onChange={handleChange}
      />
    </div>
  );
};

export default DatePicker;
