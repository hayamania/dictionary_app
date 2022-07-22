import React from "react";

export default function Audio(props) {
  if (props.data) {
    return (
      <div className="Audio">
        <audio controls src={props.data} className="m-1" />
      </div>
    );
  } else {
    return null;
  }
}
