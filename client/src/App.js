import React from "react";
import "./App.css";
import Cards from "./Cards";
import Grid from "./Grid";
import Modal from "./ModalOne";
import img from "./consensys.png";
import NavBar from "./NavBar"
function App() {
  return (
    <div className="App">
      <div className="navbar">

        <NavBar />
      </div>
      <Grid />
    </div>
  );
}

export default App;
