import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <div>{props.text}</div>
      <hr />
    </div>
  );
}

export default TodoItem;
