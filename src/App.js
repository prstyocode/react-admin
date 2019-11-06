import React from "react";
import "./App.css";
import Sidebar from "./layouts/Sidebar";
import Main from "./layouts/Main";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalState>
        <Sidebar />
        <Main />
      </GlobalState>
    </div>
  );
}

export default App;
