import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const [searchValue, setsearchValue] = React.useState("");
  const { item: todos, saveItems: setTodos, loading, error } = useLocalStorage("TODOS_V1", []);
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const searchTodos = todos.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      id: newTodos.length + 1,
      text,
      completed: false,
    });
    setTodos(newTodos);
  };

  const completeTodos = (id) => {
    const newTodos = [...todos];
    let todoFinded = newTodos.find((todo) => todo.id === id);
    todoFinded.completed = true;
    setTodos(newTodos);
  };

  const deleteTodoByIndex = (id) => {
    const newTodos = [...todos];
    const indexTodoFinded = newTodos.findIndex((todo) => todo.id === id);
    newTodos.splice(indexTodoFinded, 1);
    setTodos(newTodos);
  };

  const isEmpty = todos.length === 0;

  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchValue,
        setsearchValue,
        searchTodos,
        completeTodos,
        deleteTodoByIndex,
        todos,
        error,
        loading,
        isEmpty,
        setOpenModal,
        openModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

// localStorage.removeItem("TODOS_V1");
// const defaultTodos = [
//   {
//     id: 1,
//     text: "terminar curso",
//     completed: false,
//   },
//   {
//     id: 2,
//     text: "Casarme",
//     completed: false,
//   },
//   {
//     id: 3,
//     text: "Tener hijos",
//     completed: false,
//   },
//   {
//     id: 4,
//     text: "Jubilarme",
//     completed: false,
//   },
//   {
//     id: 5,
//     text: "Jubilarme otra vez",
//     completed: true,
//   },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
