import { ReactComponent as CheckSVG } from "../assets/check.svg";
import { ReactComponent as DeleteSVG } from "../assets/delete.svg";
import "./TodoIcon.css";

const iconTypes = {
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
  close: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span onClick={onClick} className={`Icon Icon-${type}`}>
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
