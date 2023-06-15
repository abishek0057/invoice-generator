import React, { useState } from "react";
import RateInput from "./components/RateInput";
import DatePicker from "./components/DatePicker";
import NameInput from "./components/NameInput";
import CommonButton from "./components/CommonButton";
import InvoiceNumber from "./components/InvoiceNumber";
import InvoiceTable from "./components/InvoiceTable";
import Total from "./components/Total";

const App = () => {
  const [itemData, setItemData] = useState([
    {
      itemName: "",
      itemQuantity: 1,
      itemRate: "",
    },
  ]);
  const [inputValues, SetinputValues] = useState({
    date: new Date().toJSON().slice(0, 10),
    billNo: 1,
    cashierName: "",
    customerName: "",
    taxRate: 0,
    discountRate: 0,
  });
  const ReceiveInput = (recValue) => {
    switch (recValue.type) {
      case "date":
        SetinputValues({ ...inputValues, date: recValue.value });
        break;
      case "invoice":
        SetinputValues({ ...inputValues, billNo: recValue.value });
        break;
      case "cashier":
        SetinputValues({ ...inputValues, cashierName: recValue.value });
        break;
      case "customer":
        SetinputValues({ ...inputValues, customerName: recValue.value });
        break;
      case "tax":
        SetinputValues({ ...inputValues, taxRate: recValue.value });
        break;
      case "discount":
        SetinputValues({ ...inputValues, discountRate: recValue.value });
        break;
    }
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
        <InvoiceTable setItemData={setItemData} itemData={itemData} />
        <Total inputValues={inputValues} itemData={itemData} />
      </div>
      <div className=' sticky top-5 flex flex-col justify-center px-2 md:w-3/12 gap-y-3'>
        <CommonButton
          btnName='Review Invoice'
          customCSS='w-full'
          onBtnClick={(e) => console.log(itemData)}
        />
        <RateInput title='Tax rate:' sendInput={ReceiveInput} />
        <RateInput title='Discount rate:' sendInput={ReceiveInput} />
      </div>
    </div>
  );
};

export default App;

