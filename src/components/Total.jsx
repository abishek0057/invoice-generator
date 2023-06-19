import Calculation from "../helper/calculation";

const Total = ({ itemData, inputValues }) => {
  const itemCalculation = new Calculation(
    itemData.filter((e) => e.itemName != ""),
    inputValues.discountRate,
    inputValues.taxRate
  );
  return (
    <div className='flex flex-col items-end space-y-1 pt-5 mr-5'>
      <div className='flex w-full justify-between md:w-1/2'>
        <span className='font-bold'>Subtotal:</span>
        <span>{itemCalculation.calSubTotal().toFixed(2)}</span>
      </div>
      <div className='flex w-full justify-between md:w-1/2'>
        <span className='font-bold'>Discount:</span>
        <span>{itemCalculation.discountAmt().toFixed(2)}</span>
      </div>
      <div className='flex w-full justify-between md:w-1/2'>
        <span className='font-bold'>Tax:</span>
        <span>{itemCalculation.taxAmt().toFixed(2)}</span>
      </div>
      <div className='flex w-full justify-between md:w-1/2'>
        <span className='font-bold'>Total:</span>
        <span className='font-bold'>{itemCalculation.total().toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Total;
