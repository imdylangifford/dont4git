import React from "react";

export default function Who(props) {
  return (
    <div>
      <div className="who">
        <h1>WHO:</h1>
        <input
          value={props.who}
          onChange={props.func}
          name="who"
          type="text"
          placeholder="enter 10 digit number"
        />
      </div>
    </div>
  );
}
