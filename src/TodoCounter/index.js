// const styles = {
//   fontSize: "2rem",
//   textAlign: "center",
//   margin: 0,
//   padding: '48px'
// };
import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos: completed, totalTodos: total, isEmpty } = React.useContext(TodoContext);

  if (isEmpty) {
    return <h1>No has creado ninguna tarea todavia</h1>;
  }

  if (total == completed) {
    return <h1>Felicitaciones has completado todas las tareas</h1>;
  }
  return (
    // <h1 style={styles}>
    <h1>
      Has completado <span>{completed}</span> de <span>{total}</span> ToDos
    </h1>
  );
}

export { TodoCounter };
