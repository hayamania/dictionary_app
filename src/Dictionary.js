import axios from "axios";
import React, { useState } from "react";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, SetKeyword] = useState(null);
  let [result, SetResult] = useState(null);
  let [msg, SetMsg] = useState(null);

  function searchDictionary(response) {
    SetMsg(null);
    SetResult(response.data[0]);
  }

  function errorHappens() {
    SetResult(null);
    SetMsg(`Sorry, No Definitions Found`);
  }

  function searchKeyword(event) {
    event.preventDefault();

    // Documents: https://github.com/meetDeveloper/freeDictionaryAPI
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(searchDictionary).catch(errorHappens);
  }

  function updateKeyword(event) {
    SetKeyword(event.target.value);
  }
  return (
    <div className="Dictionary text-center">
      <div className="container m-3">
        <h1>Dictionary</h1>
        <form onSubmit={searchKeyword} className="mb-4">
          <input
            type="search"
            autoFocus={true}
            onChange={updateKeyword}
            placeholder="Type a word...such as sunset, sky, flower..."
          />
        </form>
        <Result result={result} />
        <h2>{msg}</h2>
      </div>
    </div>
  );
}
