import React from "react";
import "./Synonym.css";

export default function Synonym(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonym">
        <span className="ms-3 me-2 title">Synonym</span>
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}> [{synonym}]</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
