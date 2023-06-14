import { useState } from "react";

const InvoiceNumber = ({ sendInput }) => {
  const [invoiceNum, setInvoiceNum] = useState(1);

  const handleChange = (e) => {
    setInvoiceNum(e.target.value);
    sendInput({ value: { billNo: e.target.value } });
  };

  return (
    <div className='py-3'>
      <label className='mr-2 text-lg font-semibold'>Invoice Number: </label>
      <input
        type='number'
        className='p-2 w-5/12 text-base font-normal rounded-md outline-none bg-slate-100'
        value={invoiceNum}
        onChange={handleChange}
      />
    </div>
  );
};

export default InvoiceNumber;
