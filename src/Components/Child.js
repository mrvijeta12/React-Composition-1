import React from 'react';

const Modal = ({ show, onClose, children }) => {
  console.log(show)
 
  if (!show) {
    return null;
  }
  console.log(show)


  return (
    <div >
      <div className="model-overlay">
        <button className=" model-close" onClick={onClose}>
          Close
        </button>
        <div className="model-p">{children}</div>
      </div>
    </div>
  );
};

export default Modal;