import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        // checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <div>{props.item.text}</div>
      <hr />
    </div>
  );
}

export default TodoItem;
