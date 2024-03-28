import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function sendForm(event) {
  console.log("aqui llego");
}

function TodoForm() {
  const {
    setOpenModal,
    addTodo,
    // addTodo
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo Todo</label>
      <textarea placeholder="ej: Terminar curso" value={newTodoValue} onChange={onChange} />
      <div className="TodoForm-buttonContainer">
        <button onClick={onCancel} type="button" className="TodoForm-button TodoForm-button--cancel">
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
