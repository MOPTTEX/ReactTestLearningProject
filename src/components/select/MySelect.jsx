import React from "react";

export default function MySelect({ options, defaultValue }) {
  return (
    <select>
      <option disabled={true} value="">{defaultValue}</option>
      {options.map(option => 
        <option value={option.value}>
            {option.name}
        </option>
      )}
    </select>
  );
}
