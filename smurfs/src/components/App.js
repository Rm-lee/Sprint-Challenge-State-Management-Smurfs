import React, { Component } from "react";
import Smurfs from "./Smurfs"
import "./App.css";
import AddSmurf from "./AddSmurf";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurfs />
        <AddSmurf />
      </div>
    );
  }
}

export default App;
