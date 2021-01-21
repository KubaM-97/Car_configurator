import React from "react"

import { connect } from 'react-redux';
import { formatPrice } from "./../../utils"

const Summary = props => {
    const items = props.chosenItems.map(el => {
        return (
            <li className="my-3">{el.category}: {el.name}</li>
        )
    })
    return(
<           div className="wrapperOptions wrapperOptionsHigher mx-auto p-lg-2 py-1">
              <div className="layer position-absolute fixed-top bg-dark w-100 h-100"></div>
                <h3 className="pt-3">Oto wybrane produkty</h3>
                <hr className="border border-5 bg-danger"/>
                <div className="options d-flex justify-content-evenly flex-wrap mt-lg-4 p-lg-5">
                    <ol>
                        {items}
                    </ol>
                    <p className="final p-lg-3 p-1 border border-3">Razem: {formatPrice(props.totalSum)} zł</p>
                </div>
            </div>
)}
       

const mapStateToProps = state => {
    return {
        chosenItems: state.items.chosenItems,
        totalSum: state.items.totalSum
    };
};

const mapDispatchToProps = dispatch => ({
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Summary);