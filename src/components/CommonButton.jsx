import React from "react";

const CommonButton = ({ btnName, onBtnClick, customCSS }) => {
  return (
    <button
      className={`rounded-md bg-blue-800 p-2 text-white text-base ${customCSS}`}
      onClick={onBtnClick}
    >
      {btnName}
    </button>
  );
};

export default CommonButton;
