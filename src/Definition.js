import React from "react";
import Example from "./Example";

export default function Definition(props) {
  return (
    <div className="Definition">
      {props.definitions.map(function (definition, index) {
        return (
          <ul key={index} className="m-0">
            <li>{definition.definition}</li>
            <Example data={definition.example} />
          </ul>
        );
      })}
    </div>
  );
}
