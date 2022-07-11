import React from "react";
import "./app-modal.css";

type TProps = {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};

function AppModal({ isOpen, onClose, children }: TProps) {
  function handleClose() {
    onClose();
  }
  return (
    <div className={isOpen ? "modal open" : "modal"}>
      <div className="modal__back" onClick={handleClose}></div>
      <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default AppModal;
