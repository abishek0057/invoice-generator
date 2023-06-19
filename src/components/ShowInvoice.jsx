import { useRef, useEffect } from "react";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

import Calculation from "../helper/Calculation";

const ShowInvoice = ({ setShowInvoice, itemData, inputValues }) => {
  const modalRef = useRef(null);
  itemData = itemData.filter((e) => e.itemName != "" && e.itemRate != "");
  const itemCalculation = new Calculation(
    itemData,
    inputValues.discountRate,
    inputValues.taxRate
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowInvoice(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowInvoice]);

  const SaveAsPDFHandler = () => {
    const dom = document.getElementById("print");
    toPng(dom)
      .then((dataUrl) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = dataUrl;
        img.onload = () => {
          const pdfWidth = 350;
          const pdfHeight = (img.height * pdfWidth) / img.width;
          const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: [pdfWidth, pdfHeight],
          });
          const imgProps = pdf.getImageProperties(img);
          const imageType = imgProps.fileType;
          const pxFullHeight = imgProps.height;
          const pxPageHeight = Math.floor(
            (imgProps.width * pdfHeight) / pdfWidth
          );
          const nPages = Math.ceil(pxFullHeight / pxPageHeight);

          const pageCanvas = document.createElement("canvas");
          const pageCtx = pageCanvas.getContext("2d");
          pageCanvas.width = imgProps.width;
          pageCanvas.height = pxPageHeight;

          for (let page = 0; page < nPages; page++) {
            if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
              pageCanvas.height = pxFullHeight % pxPageHeight;
            }

            const w = pageCanvas.width;
            const h = pageCanvas.height;
            pageCtx.fillStyle = "white";
            pageCtx.fillRect(0, 0, w, h);
            pageCtx.drawImage(img, 0, page * pxPageHeight, w, h, 0, 0, w, h);

            if (page) pdf.addPage();

            const imgData = pageCanvas.toDataURL(`image/${imageType}`, 1);
            pdf.addImage(imgData, imageType, 0, 0, pdfWidth, pdfHeight);
          }

          pdf.save(`invoice ${new Date().toTimeString().slice(0, 9)}.pdf`);
        };
      })
      .catch((error) => {
        console.error("Oops, something went wrong!", error);
      });

    setShowInvoice(false);
  };

  return (
    <div className='fixed top-0 left-0 flex justify-center items-center h-screen w-screen z-10 bg-slate-800 bg-opacity-60'>
      <div
        className='flex flex-col justify-center rounded-lg bg-white p-4'
        ref={modalRef}
      >
        <div className='h-[28rem] overflow-y-auto mb-2'>
          <div
            className='flex flex-col justify-center rounded-lg bg-white p-4 mb-4'
            id='print'
          >
            <h1 className='text-center text-3xl pb-5'>Invoice</h1>
            <div className='mb-3 grid grid-cols-2 gap-x-5'>
              <span className='font-bold whitespace-nowrap'>
                Invoice Number:
              </span>
              <span>{inputValues.billNo}</span>
              <span className='font-bold'>Cashier:</span>
              <span>{inputValues.cashierName}</span>
              <span className='font-bold'>Customer:</span>
              <span>{inputValues.customerName}</span>
              <span className='font-bold'>Date:</span>
              <span>{inputValues.date}</span>
            </div>
            <table className='w-full text-left'>
              <thead>
                <tr className='border-y border-black/10 text-sm md:text-base'>
                  <th>ITEM</th>
                  <th className='text-center'>QTY</th>
                  <th className='text-right'>PRICE</th>
                  <th className='text-right'>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {itemData.map((e) => {
                  return (
                    <tr className='space-x-3' key={e.itemName}>
                      <td className='w-full'>{e.itemName}</td>
                      <td className='min-w-[50px] text-center'>
                        {e.itemQuantity}
                      </td>
                      <td className='min-w-[80px] text-right'>{e.itemRate}</td>
                      <td className='min-w-[90px] text-right'>
                        {e.itemQuantity * e.itemRate}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className='mt-4 flex flex-col items-end space-y-2'>
              <div className='flex w-full justify-between border-t border-black/10 pt-2'>
                <span className='font-bold'>Subtotal:</span>
                <span>{itemCalculation.calSubTotal().toFixed(2)}</span>
              </div>
              <div className='flex w-full justify-between'>
                <span className='font-bold'>Discount:</span>
                <span>{itemCalculation.discountAmt().toFixed(2)}</span>
              </div>
              <div className='flex w-full justify-between'>
                <span className='font-bold'>Tax:</span>
                <span>{itemCalculation.taxAmt().toFixed(2)}</span>
              </div>
              <div className='flex w-full justify-between border-t border-black/10 py-2'>
                <span className='font-bold'>Total:</span>
                <span className='font-bold'>
                  {itemCalculation.total().toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2 mx-auto print:hidden'
          onClick={SaveAsPDFHandler}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default ShowInvoice;
