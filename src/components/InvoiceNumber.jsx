import { useState } from "react";

const InvoiceNumber = ({ sendInput }) => {
  const [invoiceNum, setInvoiceNum] = useState(1);

  const handleChange = (e) => {
    setInvoiceNum(e.target.value);
    sendInput({ value: e.target.value, type: "invoice" });
  };

  return (
    <div className='py-3'>
      <label className='text-lg font-semibold mr-2'>Invoice Number: </label>
      <input
        type='number'
        className='outline-none text-base font-normal bg-slate-100 p-2 rounded-md w-5/12'
        value={invoiceNum}
        onChange={handleChange}
      />
    </div>
  );
};

export default InvoiceNumber;
