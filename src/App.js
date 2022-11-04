import React from "react";
import AppBar from "./components/Appbar";
import MainBox from "./components/MainBox";

function App() {
  return (
    <div className="relative">
      <header>
        <AppBar />
      </header>
      <main className="relative">
        <MainBox />
      </main>
    </div>
  );
}

export default App;
