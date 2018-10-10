import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "",
      number: "",
      date: new Date()
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    axios.post("http://localhost:5000/", {
      message: this.state.message,
      number: this.state.number,
      date: this.state.date
    });
    this.setState({
      message: "",
      number: ""
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onChange = date => this.setState({ date });
  render() {
    return (
      <div className="App">
        <h1>Send a Text</h1>
        <input
          name="message"
          value={this.state.message}
          type="text"
          onChange={this.handleChange}
          placeholder="type messsage"
        />
        <input
          value={this.state.number}
          type="text"
          name="number"
          onChange={this.handleChange}
          placeholder="type number"
        />
        <DateTimePicker onChange={this.onChange} value={this.state.date} />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
