import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../Todoitem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";
import { CreateTodoButton } from "../CreateTodoButton";
import React from "react";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
// function AppUi({ completedTodos, totalTodos, searchValue, setsearchValue, searchTodos, completeTodos, deleteTodoByIndex, todos, error, loading }) {

import { TodoContext } from "../TodoContext";

function AppUi() {
  const { searchTodos, completeTodos, deleteTodoByIndex, error, loading, openModal, setOpenModal } = React.useContext(TodoContext);

  return (
    <>
      {/* <TodoCounter total={totalTodos} completed={completedTodos} isEmpty={todos.length === 0} />
      <TodoSearch searchValue={searchValue} setsearchValue={setsearchValue} /> */}

      <TodoCounter />
      <TodoSearch />
      {/* <TodoContext.Consumer>
        {({ searchTodos, completeTodos, deleteTodoByIndex, error, loading }) => ( */}
      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && searchTodos.length === 0 && <TodosEmpty />}

        {searchTodos.map((todo, i) => (
          <TodoItem
            key={i}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.id)}
            onDelete={() => deleteTodoByIndex(todo.id)}
          />
        ))}
      </TodoList>
      {/* )} */}
      {/* </TodoContext.Consumer> */}

      <CreateTodoButton />

      {openModal && <Modal>

            <TodoForm></TodoForm>
        
        </Modal>}
    </>
  );
}

export { AppUi };
