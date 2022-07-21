import "./App.css";
import React from "react";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Dictionary app</header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>
            This is coded by Chie HYM and{" "}
            <a href="https://clinquant-lolly-a74fa2.netlify.app/">
              open-sorced
            </a>{" "}
            on Netlify
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
