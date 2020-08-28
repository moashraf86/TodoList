import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

/*
  TodoMVC
  1. add todo === DONE
  2. display todos === DONE
  3. cross off todo === DONE
  4. show number of active todos === DONE
  5. filter all/active/complete === DONE
  6. delete todo === DONE
  7. delete all complete === DONE
    7.1 only show if atleast one is complete === DONE
  8. button to toggle all on/off
*/

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "all"
  };

  //add todo function
  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  //toggle Complete
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        //check if it matches
        if (todo.id === id) {
          if (todo.completed) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  //update todo to show
  updateTodo = (s) => {
    this.setState({
      todoToShow: s
    });
  };

  //delete todo
  handleDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  };

  //Delete all
  deleteAll = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.completed)
    });
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.completed);
    } else {
      todos = this.state.todos.filter((todo) => todo.completed);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {/* Generate list items */}

        <ul style={{ listStyle: "none", padding: "0" }}>
          {todos.map((todo) => (
            <Todo
              className={todo.className}
              toggleComplete={() => this.toggleComplete(todo.id)}
              key={todo.id}
              todo={todo}
              deleteTodo={() => this.handleDelete(todo.id)}
            />
          ))}
        </ul>
        <div>
          active todos:{" "}
          {this.state.todos.filter((todo) => !todo.completed).length}
        </div>
        <div>
          <button onClick={() => this.updateTodo("all")}>all</button>
          <button onClick={() => this.updateTodo("active")}>active</button>
          <button onClick={() => this.updateTodo("completed")}>
            completed
          </button>
          <button
            className={
              this.state.todos.find((todo) => todo.completed) ? "show" : "hide"
            }
            onClick={() => this.deleteAll()}
          >
            delete all completed
          </button>
        </div>
      </div>
    );
  }
}
