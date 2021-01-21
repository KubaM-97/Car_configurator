import React, { Component } from "react"

import Main from "./components/anotherSteps/Main"
import FinalPanel from "./components/final/FinalPanel"


class App extends Component {
  render(){
    return (
      <div className="App text-center">
        <Main />
        <FinalPanel />
      </div>
    );
  }
}


export default App;
