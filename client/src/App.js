import React from "react";
import "./App.css";
import Cards from "./Cards";
import Grid from "./Grid";
import Modal from "./ModalOne";
import img from "./consensys.png";
import NavBar from "./NavBar";
import MenuItems from "./MenuItems";
function App() {
  return (
    <div className="App">
      {/* <div className="navbar"> */}
      {/* <NavBar /> */}
      <MenuItems />
      <Grid /> }
    </div>
  );
}

export default App;
