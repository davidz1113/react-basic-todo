import React from "react";
import { AppUi } from "./AppUi";
import { TodoProvider } from "../TodoContext";

function App() {
  // React.useEffect(() => {
  //   console.log("Hola use Efect");
  // }, [totalTodos]);

  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
    // <AppUi
    //   completedTodos={completedTodos}
    //   totalTodos={totalTodos}
    //   searchValue={searchValue}
    //   setsearchValue={setsearchValue}
    //   searchTodos={searchTodos}
    //   completeTodos={completeTodos}
    //   deleteTodoByIndex={deleteTodoByIndex}
    //   todos={todos}
    //   loading={loading}
    //   error={error}
    // />
  );
}

export default App;
