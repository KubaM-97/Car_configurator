import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { removeFromChosenItems, subtractFromTotalSum, addToTotalSum, addToChosenItems } from "../../store/actionCreators/chosenItems"
import { formatPrice } from "./../../utils"

class Item extends Component{
    constructor(props){
        super(props)
        this.handleAddChosenItem = this.handleAddChosenItem.bind(this)
        
    }
    handleAddChosenItem(newItem){
        const isItemWithThisCategoryExists = this.props.chosenItems.find(el => el.inputNameAttr === newItem.inputNameAttr)

        if(isItemWithThisCategoryExists) {
            const intruderIndex = this.props.chosenItems.length-1
            this.props.dispatch(subtractFromTotalSum(this.props.chosenItems[intruderIndex].price))
            this.props.dispatch(removeFromChosenItems(intruderIndex))
        }

        this.props.dispatch(addToChosenItems(newItem))
        this.props.dispatch(addToTotalSum(this.props.price))
    }
    render(){
        return(
            <div className="option m-3">

                <input type="radio" name={this.props.inputNameAttr} id={this.props.name} 
                    onClick={() => {
                        this.props.onActive(this.props); 
                        this.handleAddChosenItem({
                            id: this.props.id,
                            name: this.props.name,
                            img: this.props.img,
                            price: this.props.price,
                            inputNameAttr: this.props.inputNameAttr,
                            category: this.props.category
                        });
                    }} />

                <label htmlFor={this.props.name} className="d-flex flex-wrap align-items-start">
                        <img className="mb-1" src={this.props.img} alt={this.props.name}/>
                        <div className="d-flex justify-content-center flex-wrap align-items-center">
                            <p className="my-1 w-100">{this.props.name}</p>
                            <p className="my-1 w-100">Cena: <strong>{formatPrice(this.props.price)} zł</strong></p>
                        </div>
                </label>
            </div> 
            )
    }
}

Item.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    inputNameAttr: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    onActive: PropTypes.func
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

export default connect(mapStateToProps, mapDispatchToProps)(Item);