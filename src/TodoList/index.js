import './TodoList.css'

function TodoList(props) {
  return <ul className="list-center">{props.children}</ul>;
}

export { TodoList };
