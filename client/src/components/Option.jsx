import React from "react";

const Option = ({
  role,
  subText = "",
  handleRadio,
  select,
  height = 54,
  equation = "",
  squared = false,
}) => {
  return (
    <label
      htmlFor={role}
      style={{
        height: `${height}px`,
        width: squared !== true ? "80%" : `${height}px`,
      }}
      className={`flex border rounded-lg  border-gray-300 ${
        squared ? "" : "pl-10"
      } justify-start items-center ${
        select === role ? "bg-gray-300" : "bg-white"
      }`}
    >
      <input
        type="radio"
        value={role}
        onChange={handleRadio}
        checked={select === role}
        name="radioGroup"
        id={role}
        hidden
      />
      <div
        className={`flex flex-col items-center justify-center ${
          squared ? "mx-auto" : ""
        }`}
      >
        {equation !== "" && <p>{equation}</p>}
        <p>
          <strong>{role}</strong>
          <span> </span>
          {squared ? "" : <span>{subText}</span>}
        </p>
        {squared ? <p>{subText}</p> : ""}
      </div>
    </label>
  );
};

export default Option;
