import React, { Component } from "react"
import Welcome from "./Welcome"
import Engine from "./Engine"
import BodyColor from "./BodyColor"
import RimColor from "./RimColor"
import RimSize from "./RimSize"
import Armchairs from "./Armchairs"
import UpholsteriesColor from "./UpholsteriesColor"
import Accessories from "./Accessories"
import Summary from "./Summary.jsx"

class Main extends Component {
    constructor(){
      super()
      this.state = {
          anotherSteps: [
            {id: 0, component: Welcome}, 
            {id: 1, component: Engine},
            {id: 2, component: BodyColor},
            {id: 3, component: RimColor},
            {id: 4, component: RimSize},
            {id: 5, component: Armchairs},
            {id: 6, component: UpholsteriesColor},
            {id: 7, component: Accessories},
            {id: 8, component: Summary}
          ],
          index: 0,
      }
      this.handleIncreaseIndex = this.handleIncreaseIndex.bind(this)
    };

    handleIncreaseIndex(){
        this.setState(prevState => {
            return {
                index: prevState.index+1
            }
        })
    }

    render(){
        const whatComponentToChange = this.state.anotherSteps[this.state.index].component
        return (
          <div className="p-5">
              {React.createElement(whatComponentToChange, {onGoOn: () => this.handleIncreaseIndex() })}
          </div>
        );
    }
  
  }

export default Main