import React, { Component } from "react"
import PropTypes from "prop-types"
import Item from "./Item"
import uniqid from "uniqid"

import chairBlack from "./../../images/armchairs/chairBlack.png"
import chairYellow from "./../../images/armchairs/chairYellow.png"
import chairGreen from "./../../images/armchairs/chairGreen.png"
import chairPurple from "./../../images/armchairs/chairPurple.png"
import chairRed from "./../../images/armchairs/chairRed.png"
import chairBlue from "./../../images/armchairs/chairBlue.png"

import { handleButtonActivation } from "./../../utils"

class Armchair extends Component {
    constructor(){
        super()
        this.state = {
            armchairs: [
                {id: uniqid(), img: chairBlack, name: "Czarne", price: 750},
                {id: uniqid(), img: chairYellow, name: "Złote", price: 750},
                {id: uniqid(), img: chairGreen, name: "Zielone", price: 750},
                {id: uniqid(), img: chairPurple, name: "Fioletowe", price: 750},
                {id: uniqid(), img: chairRed, name: "Czerwone", price: 750},
                {id: uniqid(), img: chairBlue, name: "Niebieskie", price: 750}
            ],
            isButtonDisabled: true
        }
    }
       
    render(){
        const items = this.state.armchairs.map(el => {
            return <Item key={el.id} id={el.id} img={el.img} name={el.name} price={el.price} inputNameAttr="armchair" category="Fotele"
                    onActive={ propsChildren => { handleButtonActivation(propsChildren.inputNameAttr, this) }} />
        })

        return(
            <div className="wrapperOptions wrapperOptionsHigher mx-auto p-md-5 py-3">
              <div className="layer position-absolute fixed-top bg-dark w-100 h-100"></div>
                <h3>Wybór fotela</h3>
                <div className="options d-flex justify-content-evenly flex-wrap mt-4">
                    {items}
                </div>
                <button disabled={this.state.isButtonDisabled} onClick={()=>this.props.onGoOn()} className="m-5 px-5">Dalej!!!</button>
            </div>
        )
    }
}


Armchair.propTypes = {
    onGoOn: PropTypes.func
}
    

export default Armchair