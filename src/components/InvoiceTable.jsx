import React, { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import CommonButton from "./CommonButton";

const InvoiceTable = ({ itemData, setItemData }) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      itemData: [
        {
          itemName: "",
          itemQuantity: 1,
          itemRate: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "itemData",
    control,
  });

  const onSubmit = (data) => {
    console.log(data.itemData);
    setItemData(data.itemData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          {fields.map((field, index) => {
            return (
              <tr className='w-full h-12' key={field.id}>
                <td className='w-6/12'>
                  <input
                    type='text'
                    className='outline-none text-base font-normal bg-slate-100 p-2 rounded-md w-full'
                    placeholder='Item Name'
                    {...register(`itemData.${index}.itemName`)}
                  />
                </td>
                <td className='w-2/12'>
                  <input
                    type='number'
                    className='outline-none text-base font-normal bg-slate-100 p-2 rounded-md w-full'
                    placeholder='0'
                    {...register(`itemData.${index}.itemQuantity`)}
                  />
                </td>
                <td className='w-2/12'>
                  <input
                    type='number'
                    className='outline-none text-base font-normal bg-slate-100 p-2 rounded-md w-full'
                    placeholder='1'
                    {...register(`itemData.${index}.itemRate`)}
                  />
                </td>
                <td className='w-3/12'>
                  <input
                    type='number'
                    className='outline-none text-base font-normal bg-slate-100 p-2 rounded-md w-full'
                    readOnly
                  />
                </td>
                <td className='flex justify-center items-center'>
                  {index > 0 && (
                    <button
                      className='text-2xl hover:cursor-pointer hover:scale-110'
                      onClick={() => remove(index)}
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
        onBtnClick={() =>
          append({ itemName: "", itemQuantity: 0, itemRate: "" })
        }
      />
    </form>
  );
};

export default InvoiceTable;
