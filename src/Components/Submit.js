import React, { Component } from "react";
import axios from "axios";

export default class Submit extends Component {
  onSubmit = () => {
    axios
      .post("http://localhost:5000/", {
        message: this.props.message,
        number: this.props.number,
        date: this.props.date
      })
      .then(this.props.reset);
  };
  render() {
    return (
      <div className="sub">
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}
