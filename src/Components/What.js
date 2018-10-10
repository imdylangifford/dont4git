import React from "react";

export default function What(props) {
  return (
    <div>
      <div className="what">
        <h1 className="whathead">WHAT:</h1>
        <input
          type="text"
          name="what"
          onChange={props.func}
          value={props.what}
        />
      </div>
    </div>
  );
}
