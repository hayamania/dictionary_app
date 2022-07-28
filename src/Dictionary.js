import axios from "axios";
import React, { useState } from "react";
import Result from "./Result";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, SetKeyword] = useState(null);
  let [result, SetResult] = useState(null);
  let [msg, SetMsg] = useState(null);
  let [images, SetImages] = useState(null);

  function searchDictionary(response) {
    SetMsg(null);
    SetResult(response.data[0]);
    searchImages();
  }

  function errorHappens() {
    SetResult(null);
    SetImages(null);
    SetMsg(`Sorry, No Definitions Found`);
  }

  function getImages(response) {
    SetImages(response.data.photos);
  }

  function searchImages() {
    const imageApiKey = `563492ad6f9170000100000192fdee6ecedd4063bac7094729c878e8`;
    const imageApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(imageApiUrl, { headers: { authorization: imageApiKey } })
      .then(getImages);
  }

  function searchKeyword(event) {
    event.preventDefault();

    // Documents: https://github.com/meetDeveloper/freeDictionaryAPI
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
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
        <Photos photos={images} />
        <h2>{msg}</h2>
      </div>
    </div>
  );
}
