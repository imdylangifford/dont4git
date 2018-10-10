import React from "react";
import moment from "moment";
import Datetime from "react-datetime";

export default function When(props) {
  return (
    <div className="when">
      <h1>WHEN:</h1>
      <Datetime name="date" onChange={props.func} value={props.when} />
    </div>
  );
}
