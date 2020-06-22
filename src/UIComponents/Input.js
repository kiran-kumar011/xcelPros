import React from 'react';

const Input = ({ type, placeholder, onChangeMethod, value, style }) => {
  return (
    <div>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChangeMethod(e)}
        style={{ ...style }}
      />
    </div>
  );
};

export default Input;
