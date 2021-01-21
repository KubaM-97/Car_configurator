import React, { Component } from "react"
import PropTypes from "prop-types"
import Item from "./Item"
import uniqid from "uniqid"

import engineHeat from "./../../images/engines/engineHeat.jpg"
import engineCombustion from "./../../images/engines/engineCombustion.jpg"
import engineIon from "./../../images/engines/engineIon.jpg"

import { handleButtonActivation } from "./../../utils"

class Engine extends Component {
    constructor(){
        super()
        this.state = {
            engines: [
                {id: uniqid(), img: engineHeat, name: "Cieplny", price: 600},
                {id: uniqid(), img: engineCombustion, name: "Spalinowy", price: 31000},
                {id: uniqid(), img: engineIon, name: "Jonowy", price: 176000}
            ],
            isButtonDisabled: true
        }
    }
    render(){
        const items = this.state.engines.map(el => {
            return <Item key={el.id} id={el.id} img={el.img} name={el.name} price={el.price} inputNameAttr="engine" category="Silnik" 
                    onActive={ propsChildren => { handleButtonActivation(propsChildren.inputNameAttr, this)} }/>
        })

        return(
            <div className="wrapperOptions mx-auto p-md-5 py-3">
              <div className="layer position-absolute fixed-top bg-dark w-100 h-100"></div>
                <h1>Wybór silnika</h1>
                <div className="options d-flex justify-content-evenly flex-wrap mt-4">
                    {items}
                </div>
                <button disabled={this.state.isButtonDisabled} onClick={()=>this.props.onGoOn()} className="m-5 px-5">Dalej!!!</button>
            </div>
        )
    }
}


Engine.propTypes = {
    onGoOn: PropTypes.func
}
    

export default Engine