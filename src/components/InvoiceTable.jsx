import React, { useState } from "react";
import CommonButton from "./CommonButton";

const InvoiceTable = ({ itemData, setItemData }) => {
  const handleChange = (e, index, key) => {
    const { value } = e.target;
    setItemData((prevItemData) => {
      const updatedItemData = [...prevItemData];
      updatedItemData[index] = {
        ...updatedItemData[index],
        [key]: value,
      };
      return updatedItemData;
    });
  };

  const handleDelete = (index) => {
    setItemData((prevItemData) => {
      const updatedItemData = [...prevItemData];
      updatedItemData.splice(index, 1);
      return updatedItemData;
    });
  };

  return (
    <form>
      <table className='w-full mt-8'>
        <thead>
          <tr>
            <td className='text-xl text-left font-semibold'>Items</td>
            <td className='text-xl text-left font-semibold'>Quantity</td>
            <td className='text-xl text-left font-semibold'>Rate</td>
            <td className='text-xl text-left font-semibold'>Total</td>
            <td className='text-xl text-left font-semibold'>Action</td>
          </tr>
        </thead>
        <tbody>
          {itemData.map((item, index) => {
            return (
              <tr className='w-full h-12' key={index}>
                <td className='w-6/12'>
                  <input
                    autoFocus
                    required
                    type='text'
                    className='outline-none text-base font-normal bg-slate-100 p-2 rounded-md w-full'
                    placeholder='Item Name'
                    value={item.itemName}
                    onChange={(e) => handleChange(e, index, "itemName")}
                  />
                </td>
                <td className='w-2/12'>
                  <input
                    type='number'
                    className='outline-none text-base font-normal bg-slate-100 p-2 rounded-md w-full'
                    placeholder='0'
                    value={item.itemQuantity}
                    onChange={(e) => handleChange(e, index, "itemQuantity")}
                  />
                </td>
                <td className='w-2/12'>
                  <input
                    type='number'
                    className='outline-none text-base font-normal bg-slate-100 p-2 rounded-md w-full'
                    placeholder='1'
                    value={item.itemRate}
                    onChange={(e) => handleChange(e, index, "itemRate")}
                  />
                </td>
                <td className='w-3/12'>
                  <input
                    type='number'
                    className='outline-none text-base font-normal bg-slate-100 p-2 rounded-md w-full'
                    readOnly
                    value={
                      item.itemRate && item.itemName
                        ? (item.itemQuantity * Number(item.itemRate)).toFixed(2)
                        : "0.0"
                    }
                  />
                </td>
                <td className='flex justify-center items-center'>
                  {index > 0 && (
                    <button
                      className='text-2xl hover:cursor-pointer hover:scale-110'
                      onClick={(e) => handleDelete(index)}
                      type='button'
                    >
                      ❌
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CommonButton
        customCSS={"mt-5"}
        btnName='Add Items'
        onBtnClick={(e) => {
          setItemData((prevItemData) => [
            ...prevItemData,
            {
              itemName: "",
              itemQuantity: 1,
              itemRate: "",
            },
          ]);
        }}
      />
    </form>
  );
};

export default InvoiceTable;
