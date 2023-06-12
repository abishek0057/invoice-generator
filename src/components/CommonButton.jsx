import React from "react";

const CommonButton = ({ btnName, onBtnClick, paddingX }) => {
  return (
    <div>
      <button
        className={`rounded-md bg-blue-800 py-2 text-white text-base px-${paddingX}`}
        onClick={onBtnClick}
      >
        {btnName}
      </button>
    </div>
  );
};

export default CommonButton;
