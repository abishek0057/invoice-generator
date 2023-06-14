import React, { useState } from "react";
import RateInput from "./components/RateInput";
import DatePicker from "./components/DatePicker";
import NameInput from "./components/NameInput";
import CommonButton from "./components/CommonButton";
import InvoiceNumber from "./components/InvoiceNumber";
import InvoiceTable from "./components/InvoiceTable";
import Total from "./components/Total";

const App = () => {
  const [itemData, setItemData] = useState([]);
  const [inputValues, SetinputValues] = useState({
    date: new Date().toJSON().slice(0, 10),
    billNo: 1,
    cashierName: "",
    customerName: "",
    taxRate: 0,
    discountRate: 0,
  });
  console.log(inputValues);
  const ReceiveInput = (recValue) => {
    console.log(recValue.value);
    SetinputValues({ ...inputValues, ...recValue.value });
  };
  return (
    <div className="flex flex-col gap-x-3 mx-auto mt-5 max-w-7xl md:flex-row md:items-start">
      <div className="flex-grow p-2 bg-white rounded-md">
        <div className="flex flex-wrap justify-between items-center">
          <DatePicker sendInput={ReceiveInput} />
          <InvoiceNumber sendInput={ReceiveInput} />
        </div>
        <hr />
        <h1 className="py-2 text-3xl font-semibold text-center">INVOICE</h1>
        <div className="flex gap-3 justify-start items-center pt-5 w-full">
          <NameInput person={"cashierName"} sendInput={ReceiveInput} />
          <NameInput person={"customerName"} sendInput={ReceiveInput} />
        </div>
        <InvoiceTable setItemData={setItemData} itemData={itemData} />
        <Total inputValues={inputValues} itemData={itemData} />
      </div>
      <div className="flex sticky top-5 flex-col gap-y-3 justify-center px-2 md:w-3/12">
        <CommonButton
          btnName="Review Invoice"
          customCSS="w-full"
          onBtnClick={(e) => console.log(itemData)}
        />
        <RateInput title="taxRate" sendInput={ReceiveInput} />
        <RateInput title="discountRate" sendInput={ReceiveInput} />
      </div>
    </div>
  );
};

export default App;
