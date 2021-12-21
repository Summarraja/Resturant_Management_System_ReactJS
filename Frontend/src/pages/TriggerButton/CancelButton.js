import React from 'react';
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
      <div>
    <button
      className="btn btn-lg btn-danger center modal-button"
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </button>
    <hr></hr>
    </div>
  );
};
export default Trigger;
