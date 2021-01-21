import React, { Component } from "react"
import PropTypes from "prop-types"
import Item from "./Item"
import uniqid from "uniqid"

import bodyYellow from "./../../images/bodiesColor/bodyYellow.png"
import bodyGreen from "./../../images/bodiesColor/bodyGreen.png"
import bodyGrey from "./../../images/bodiesColor/bodyGrey.png"
import bodyLemon from "./../../images/bodiesColor/bodyLemon.png"
import bodyRed from "./../../images/bodiesColor/bodyRed.png"
import bodyBlue from "./../../images/bodiesColor/bodyBlue.png"
import bodyOrange from "./../../images/bodiesColor/bodyOrange.png"
import bodyPink from "./../../images/bodiesColor/bodyPink.png"

import { handleButtonActivation } from "./../../utils"

class BodyColor extends Component {
    constructor(){
        super()
        this.state = {
            bodiesColor: [
                {id: uniqid(), img: bodyYellow, name: "Żółta", price: 940},
                {id: uniqid(), img: bodyGreen, name: "Zielona", price: 940},
                {id: uniqid(), img: bodyGrey, name: "Szara", price: 940},
                {id: uniqid(), img: bodyLemon, name: "Lemonkowa", price: 940},
                {id: uniqid(), img: bodyRed, name: "Czerwona", price: 940},
                {id: uniqid(), img: bodyBlue, name: "Niebieska", price: 940},
                {id: uniqid(), img: bodyOrange, name: "Pomarańczowa", price: 940},
                {id: uniqid(), img: bodyPink, name: "Różowa", price: 940}
            ],
            isButtonDisabled: true
        }
    }
       
    render(){
        const items = this.state.bodiesColor.map(el => {
            return <Item key={el.id} id={el.id} img={el.img} name={el.name} price={el.price} inputNameAttr="bodyColor" category="Karoseria"
            onActive={ propsChildren => { handleButtonActivation(propsChildren.inputNameAttr, this)} }/>
        })

        return(
            <div className="wrapperOptions wrapperOptionsHigher mx-auto p-md-5 py-3">
              <div className="layer position-absolute fixed-top bg-dark w-100 h-100"></div>
                <h3>Wybór koloru karoserii</h3>
                <div className="options d-flex justify-content-evenly flex-wrap mt-4">
                    {items}
                </div>
                <button disabled={this.state.isButtonDisabled} onClick={()=>this.props.onGoOn()} className="m-5 px-5">Dalej!!!</button>
            </div>
        )
    }
}


BodyColor.propTypes = {
    onGoOn: PropTypes.func
}
    

export default BodyColor