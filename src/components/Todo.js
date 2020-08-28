import React from "react";

export default (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <li
        className={props.todo.completed ? "checked" : ""}
        onClick={props.toggleComplete}
      >
        {props.todo.text}
      </li>
      <button onClick={props.deleteTodo}>x</button>
    </div>
  );
};
