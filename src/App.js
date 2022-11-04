import React from "react";
import AppBar from "./components/Appbar";
import MainBox from "./components/MainBox";

function App() {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <main>
        <MainBox />
      </main>
    </div>
  );
}

export default App;
