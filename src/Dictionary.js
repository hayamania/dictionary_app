import axios from "axios";
import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, SetKeyword] = useState(null);
  function searchDictionary(response) {
    console.log(response);
  }

  function searchKeyword(event) {
    event.preventDefault();
    alert(`Searching keyword:${keyword}`);

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
        <form onSubmit={searchKeyword}>
          <input type="search" autoFocus={true} onChange={updateKeyword} />
        </form>
      </div>
    </div>
  );
}
