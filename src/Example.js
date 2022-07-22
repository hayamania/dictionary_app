import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.data) {
    return (
      <div className="Example">
        <li>(Example) {props.data}</li>
      </div>
    );
  } else {
    return null;
  }
}
