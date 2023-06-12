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
    <div className='p-2 rounded-md bg-white m-3 mt-5 min-w-max'>
      <div className='flex flex-col justify-center'>
        <DatePicker sendInput={ReceiveInput} />
        <InvoiceNumber sendInput={ReceiveInput} />
      </div>
      <hr />
      <h1 className='text-center text-3xl py-2 font-semibold'>INVOICE</h1>
      <div className='flex gap-x-2 pt-5'>
        <NameInput person={"Cashier"} sendInput={ReceiveInput} />
        <NameInput person={"Customer"} sendInput={ReceiveInput} />
      </div>
    </div>
  );
};

export default App;

