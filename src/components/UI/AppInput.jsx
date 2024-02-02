import React from "react";

export const AppInput = ({inputLabel,
    isRequired,
    inputType,
    id,
    inputPlaceholder,
    inputErr,
    value,
    hasErr,
    onChange
    

  }) => {
  return (
    <label className={`input-wrapper ${hasErr&&"_error"}`} htmlFor={id}>
      {inputLabel}
      <input
        required={isRequired}
        type={inputType}
        name={id}
        id={id}
        placeholder={inputPlaceholder}
        value={value}
        onChange={(e)=> onChange(e.target.value)}
      />
      {hasErr && <span id="error-message">  {inputErr} </span> }
   
    </label>
  );
};
