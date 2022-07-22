import axios from "axios";
import React, { useState } from "react";
import Result from "./Result";

export default function Dictionary() {
  let [keyword, SetKeyword] = useState(null);
  let [result, SetResult] = useState(null);

  function searchDictionary(response) {
    SetResult(response.data[0]);
  }

  function searchKeyword(event) {
    event.preventDefault();

    // Documents: https://github.com/meetDeveloper/freeDictionaryAPI
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(searchDictionary);
  }

  function updateKeyword(event) {
    SetKeyword(event.target.value);
  }
  return (
    <div className="Dictionary text-center">
      <div className="container m-3">
        <h1>Dictionary</h1>
        <form onSubmit={searchKeyword} className="mb-4">
          <input type="search" autoFocus={true} onChange={updateKeyword} />
        </form>
        <Result result={result} />
      </div>
    </div>
  );
}
