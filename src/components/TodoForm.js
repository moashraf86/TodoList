import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
  state = {
    text: ""
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //make sure input is nit empty
    if (this.state.text !== "") {
      this.props.onSubmit({
        id: shortid.generate(),
        text: this.state.text,
        completed: false
      });
    } else {
      return null;
    }

    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="add todo.."
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button type="submit">add todo</button>
      </form>
    );
  }
}
