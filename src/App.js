import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>
            This is coded by Chie HYM and{" "}
            <a
              href="https://clinquant-lolly-a74fa2.netlify.app/"
              target="_blank"
            >
              open-sorced
            </a>
            on Netlify
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
