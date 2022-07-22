import React from "react";
import "./Result.css";
import Definition from "./Definition";
import Audio from "./Audio";
import Synonym from "./Synonym";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <span className="Result-word me-2">{props.result.word}</span>
        <span className="Result-phonetic"> {props.result.phonetic}</span>
        <Audio data={props.result.phonetics[0].audio} />
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index} className="mb-1">
              <span className="partOfSpeech">{meaning.partOfSpeech}</span>
              <br />
              <Definition definitions={meaning.definitions} />
              <Synonym synonyms={meaning.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
