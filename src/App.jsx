import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "60px" }}>
        <h1>Hello React1</h1>
      </div>
    </>
  );
}

export default App;
