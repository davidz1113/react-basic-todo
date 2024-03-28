import React from "react";
import { TodoIcon } from "./index.js";

function CloseIcon({ onClose }) {
  return <TodoIcon type="close" color="gray" onClick={onClose} />;
}

export { CloseIcon };
