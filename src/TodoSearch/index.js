import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";
import React from "react";

function inpSearchByValue({ target }, setsearchValue) {
  const { value } = target;
  setsearchValue(value);
}

function TodoSearch() {
  const { searchValue, setsearchValue } = React.useContext(TodoContext);

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchValue}
        placeholder="Ej: Terminar clases temprano"
        onChange={(event) => inpSearchByValue(event, setsearchValue)}
      />
    </div>
  );
}

export { TodoSearch };
