import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { CloseIcon } from "../TodoIcon/CloseIcon";
import { TodoContext } from "../TodoContext";

function Modal({ children }) {
  const { setOpenModal } = React.useContext(TodoContext);

  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        <CloseIcon onClose={() => setOpenModal(false)} />
        <div className="modal-container">{children}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
