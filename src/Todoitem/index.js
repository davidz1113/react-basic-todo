import "./TodoItem.css";

import {CompleteIcon} from '../TodoIcon/CompleteIcon.js'
import {DeleteIcon} from '../TodoIcon/DeleteIcon.js'


function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="list-item">
      {/* <span className={`list-item-check ${completed ? "list-item-check--active" : ""}`} onClick={() => onComplete()}>
        V
      </span> */}
      <CompleteIcon completed={completed} onComplete={onComplete}/>
      <p className={completed ? `list-item-completed` : ""}>{text}</p>
      <DeleteIcon onDelete={onDelete}/>
      {/* <span className={`list-item-close`} onClick={() => onDelete()}>
        X
      </span> */}
    </li>
  );
}

export { TodoItem };
