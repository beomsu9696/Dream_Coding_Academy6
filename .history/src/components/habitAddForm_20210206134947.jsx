import React, { Component } from "react";

class HabitAddForm extends Component {
  onAdd = (e) => {
    e.preventDefault();
    console.log(e.target[0]);
  };
  onReset = (e) => {
    console.log(e);
  };
  render() {
    return (
      <form action="" className="add-form" onSubmit={this.onAdd}>
        <input placeholder="Habit" type="text" className="add-input" />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
