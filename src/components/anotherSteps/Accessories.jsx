import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import uniqid from "uniqid"

import { removeFromChosenItems, subtractFromTotalSum, addToTotalSum, addToChosenItems } from "../../store/actionCreators/chosenItems"
import {formatPrice} from "./../../utils"

import LED from "./../../images/accessories/LED.jpg"
import soundSystem from "./../../images/accessories/soundSystem.jpg"
import sportsSuspension from "./../../images/accessories/sportsSuspension.jpg"

class Accessories extends Component {
    constructor(){
        super()
        this.state = {
            accessories: [
                {id: uniqid(), img: LED, name: "LED", price: 270},
                {id: uniqid(), img: soundSystem, name: "Sound System", price: 480},
                {id: uniqid(), img: sportsSuspension, name: "Sports Suspension", price: 1410}
            ],
            isButtonDisabled: true
        }
    }

    handleAddChosenItem(newItem, isChecked){
        if(isChecked){
            this.props.dispatch(addToChosenItems(newItem))
            this.props.dispatch(addToTotalSum(newItem.price))
        }
        else{
            const intruderIndex = this.props.chosenItems.findIndex(el => el.id === newItem.id)
            this.props.dispatch(subtractFromTotalSum(newItem.price))
            this.props.dispatch(removeFromChosenItems(intruderIndex))
        }
    }

    render(){
        const items = this.state.accessories.map(el => {
            return (
            <div className="option m-3">

                <input type="checkbox" name="accessories" key={el.id} id={el.id} 
                onClick={e=>this.handleAddChosenItem({
                    id: el.id,
                    name: el.name,
                    img: el.img,
                    price: el.price,
                    inputNameAttr: "accessories",
                    category: "Accessories"
                }, e.target.checked)}/>

                <label htmlFor={el.id} className="d-flex flex-wrap align-items-center">
                        <img className="mb-1" src={el.img} alt={el.name}/>
                        <div className="d-flex justify-content-center flex-wrap align-items-center">
                            <p className="my-1">{el.name}</p>
                            <p className="my-1">Price: € <strong>{formatPrice(el.price)}</strong></p>
                        </div>
                </label>
            </div> 
            )
        })

        return(
            <div className="wrapperOptions mx-auto p-5 pb-1">
              <div className="layer position-absolute fixed-top bg-dark w-100 h-100"></div>
                <h3>Additional accessories</h3>
                <div className="options d-flex justify-content-evenly flex-wrap mt-4">
                    {items}
                </div>
                <button onClick={()=>this.props.onGoOn()} className="m-5">Summarize</button>
            </div>
        )
    }
}


Accessories.propTypes = {
    onGoOn: PropTypes.func
}
    
const mapStateToProps = state => {
    return {
        chosenItems: state.items.chosenItems,
        totalSum: state.items.totalSum
    };
};

const mapDispatchToProps = dispatch => ({
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Accessories);