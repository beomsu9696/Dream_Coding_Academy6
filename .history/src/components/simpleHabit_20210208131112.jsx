import React, { Component } from "react";

class SimpleHabit extends Component {
  state = {
    count: 0,
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <li>
        <span>Reading</span>
        <span>{this.state.count}</span>
        <button onClick={this.handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
      </li>
    );
  }
}

export default SimpleHabit;
