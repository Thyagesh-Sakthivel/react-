import React from 'react';

function Button({ text, onClick, type = "button", className = "" }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      click  me 
    </button>
  );
}

export default Button;
