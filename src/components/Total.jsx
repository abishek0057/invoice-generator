import React from "react";

const Total = (itemData, inputValues) => {
  return (
    <div className='flex flex-col items-end space-y-1 pt-5'>
      <div className='flex w-full justify-between md:w-1/2'>
        <span className='font-bold'>Subtotal:</span>
        <span>$0.00</span>
      </div>
      <div className='flex w-full justify-between md:w-1/2'>
        <span className='font-bold'>Discount:</span>
        <span>$0.00</span>
      </div>
      <div className='flex w-full justify-between md:w-1/2'>
        <span className='font-bold'>Tax:</span>
        <span>$0.00</span>
      </div>
      <div className='flex w-full justify-between md:w-1/2'>
        <span className='font-bold'>Total:</span>
        <span className='font-bold'>$0.00</span>
      </div>
    </div>
  );
};

export default Total;
