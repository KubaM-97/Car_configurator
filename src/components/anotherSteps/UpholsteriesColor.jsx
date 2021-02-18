import React, { Component } from "react"
import PropTypes from "prop-types"
import Item from "./Item"
import uniqid from "uniqid"

import upholsteryBlack from "./../../images/upholsteriesColor/upholsteryBlack.png"
import upholsteryGreen from "./../../images/upholsteriesColor/upholsteryGreen.png"
import upholsteryRed from "./../../images/upholsteriesColor/upholsteryRed.png"

import { handleButtonActivation } from "./../../utils"

class UpholsteriesColor extends Component {
    constructor(){
        super()
        this.state = {
            upholsteriesColor: [
                {id: uniqid(), img: upholsteryBlack, name: "Black", price: 300},
                {id: uniqid(), img: upholsteryGreen, name: "Green", price: 300},
                {id: uniqid(), img: upholsteryRed, name: "Red", price: 300}
            ],
            isButtonDisabled: true
        }
    }
       
    render(){
        const items = this.state.upholsteriesColor.map(el => {
            return <Item key={el.id} id={el.id} img={el.img} name={el.name} price={el.price} inputNameAttr="upholsteriesColor" category="Upholsteries"
                    onActive={ propsChildren => { handleButtonActivation(propsChildren.inputNameAttr, this) }} />
        })

        return(
            <div className="wrapperOptions mx-auto p-md-5 py-3">
              <div className="layer position-absolute fixed-top bg-dark w-100 h-100"></div>
                <h3>Upholsteries</h3>
                <div className="options d-flex justify-content-evenly flex-wrap mt-4">
                    {items}
                </div>
                <button disabled={this.state.isButtonDisabled} onClick={()=>this.props.onGoOn()} className="m-5 px-5">Continue!!!</button>
            </div>
        )
    }
}


UpholsteriesColor.propTypes = {
    onGoOn: PropTypes.func
}
    

export default UpholsteriesColor