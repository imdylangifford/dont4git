import React, { Component } from "react";
import Who from "./Components/Who";
import What from "./Components/What";
import When from "./Components/When";
import Submit from "./Components/Submit";

import moment from "moment";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      who: "",
      what: "",
      when: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(e) {
    console.log("i ran");
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleDate(e) {
    this.setState({
      when: e._d
    });
  }

  handleReset() {
    this.setState({
      who: "",
      what: "",
      when: "pick a date"
    });
  }
  render() {
    return (
      <div className="App">
        <h1 className="head">DONT4GIT</h1>
        <When func={this.handleDate} when={this.state.when} />
        <Who func={this.handleChange} who={this.state.who} />
        <What func={this.handleChange} what={this.state.what} />
        <div>
          <Submit
            message={this.state.what}
            number={this.state.who}
            date={this.state.when}
            reset={this.handleReset}
          />
        </div>
      </div>
    );
  }
}

export default App;
