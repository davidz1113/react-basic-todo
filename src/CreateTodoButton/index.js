import React from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function btnCreateElement(setOpenModal) {
  setOpenModal((state) => !state);
}

function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext);

  return (
    <button className="btn-add-task" onClick={() => btnCreateElement(setOpenModal)}>
      +
    </button>
  );
}

export { CreateTodoButton };
