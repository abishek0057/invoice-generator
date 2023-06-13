import React from "react";
import RateInput from "./components/RateInput";
import DatePicker from "./components/DatePicker";
import NameInput from "./components/NameInput";
import CommonButton from "./components/CommonButton";
import InvoiceNumber from "./components/InvoiceNumber";

const App = () => {
  const ReceiveInput = (value) => {
    console.log(value);
  };
  return (
    <div className='flex flex-col md:flex-row max-w-7xl gap-x-3 mx-auto md:items-start mt-5'>
      <div className='p-2 rounded-md bg-white flex-grow'>
        <div className='flex flex-wrap justify-between items-center'>
          <DatePicker sendInput={ReceiveInput} />
          <InvoiceNumber sendInput={ReceiveInput} />
        </div>
        <hr />
        <h1 className='text-center text-3xl py-2 font-semibold'>INVOICE</h1>
        <div className='flex gap-3 justify-start items-center pt-5 w-full'>
          <NameInput person={"Cashier:"} sendInput={ReceiveInput} />
          <NameInput person={"Customer:"} sendInput={ReceiveInput} />
        </div>
      </div>
      <div className='flex flex-col justify-center px-2 md:w-3/12 gap-y-3'>
        <CommonButton btnName='Review Invoice' customCSS='w-full' />
        <RateInput title='Tax rate:' />
        <RateInput title='Discount rate:' />
      </div>
    </div>
  );
};

export default App;

