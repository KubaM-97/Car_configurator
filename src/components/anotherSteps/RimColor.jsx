import React, { Component } from "react"
import PropTypes from "prop-types"
import Item from "./Item"
import uniqid from "uniqid"

import rimBlack from "./../../images/rimsColor/rimBlack.png"
import rimGreen from "./../../images/rimsColor/rimGreen.png"
import rimPink from "./../../images/rimsColor/rimPink.png"

import { handleButtonActivation } from "./../../utils"

class RimColor extends Component {
    constructor(){
        super()
        this.state = {
            rimsColor: [
                {id: uniqid(), img: rimBlack, name: "Czarny", price: 300},
                {id: uniqid(), img: rimGreen, name: "Zielony", price: 300},
                {id: uniqid(), img: rimPink, name: "Różowy", price: 300}
            ],
            isButtonDisabled: true
        }
    }
       
    render(){
        const items = this.state.rimsColor.map(el => {
            return <Item key={el.id} id={el.id} img={el.img} name={el.name} price={el.price} inputNameAttr="rimColor" category="Kolor obręczy" 
                    onActive={ propsChildren => { handleButtonActivation(propsChildren.inputNameAttr, this) }} />
        })

        return(
            <div className="wrapperOptions mx-auto p-md-5 py-3">
              <div className="layer position-absolute fixed-top bg-dark w-100 h-100"></div>
                <h3>Wybór koloru obręczy</h3>
                <div className="options d-flex justify-content-evenly flex-wrap mt-4">
                    {items}
                </div>
                <button disabled={this.state.isButtonDisabled} onClick={()=>this.props.onGoOn()} className="m-5 px-5">Dalej!!!</button>
            </div>
        )
    }
}


RimColor.propTypes = {
    onGoOn: PropTypes.func
}
    

export default RimColor