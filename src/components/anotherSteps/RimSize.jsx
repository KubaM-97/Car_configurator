import React, { Component } from "react"
import PropTypes from "prop-types"
import Item from "./Item"
import uniqid from "uniqid"

import Rim15 from "./../../images/rimsSize/rim15.png"
import Rim16 from "./../../images/rimsSize/rim16.png"
import Rim17 from "./../../images/rimsSize/rim17.png"

import { handleButtonActivation } from "./../../utils"

class RimSize extends Component {
    constructor(){
        super()
        this.state = {
            rimsSize: [
                {id: uniqid(), img: Rim15, name: "15-cali", price: 800},
                {id: uniqid(), img: Rim16, name: "16-cali", price: 1400},
                {id: uniqid(), img: Rim17, name: "17-cali", price: 2200}
            ],
            isButtonDisabled: true
        }
    }
       
    render(){
        const items = this.state.rimsSize.map(el => {
            return <Item key={el.id} id={el.id} img={el.img} name={el.name} price={el.price} inputNameAttr="rimSize" category="Rozmiar obręczy"
                    onActive={ propsChildren => { handleButtonActivation(propsChildren.inputNameAttr, this) }} />
        })

        return(
            <div className="wrapperOptions mx-auto p-md-5 py-3">
              <div className="layer position-absolute fixed-top bg-dark w-100 h-100"></div>
                <h3>Rozmiaru obręczy</h3>
                <div className="options d-flex justify-content-evenly flex-wrap mt-4">
                    {items}
                </div>
                <button disabled={this.state.isButtonDisabled} onClick={()=>this.props.onGoOn()} className="m-5 px-5">Dalej!!!</button>
            </div>
        )
    }
}



RimSize.propTypes = {
    onGoOn: PropTypes.func
}
    

export default RimSize