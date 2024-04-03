import React from 'react';
import './ButtonStyle.css'; 

export const ButtonComponent = ({onClick, className, children }) => (
  <button onClick={onClick} className={`custom-button ${className}`}>{children}</button>
);



