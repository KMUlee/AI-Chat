import React, { useState } from "react";
import AppBar from "./components/Appbar";
import MainBox from "./components/MainBox";
import Profile from "./components/Profile";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <header>
        <AppBar />
      </header>
      <main>
        <MainBox />
      </main>

      <div
        style={{
          position: "absolute",
          bottom: "0px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <footer>
          <h5 style={{ fontFamily: "Montserrat" }}>
            made by <a onClick={() => setVisible(true)}>이승원</a>
          </h5>
        </footer>
      </div>
      <Profile visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default App;
