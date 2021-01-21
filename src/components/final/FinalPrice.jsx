import React from "react"
import { connect } from 'react-redux';

import { formatPrice } from "../../utils"

const FinalPrice = props => {
    const TotalPrice = props.totalSum;
    return(
    <div className="finalPrice_container position-absolute bg-info d-flex justify-content-center align-items-center">
        <div className="finalPrice_layer position-absolute w-100 h-100"> </div>
        <div className="finalPrice position-absolute">
        {formatPrice(TotalPrice)} zł
        </div>
    </div>
    )
}

const mapStateToProps = state => {
    return {
       totalSum: state.items.totalSum,
    };
};

export default connect(mapStateToProps)(FinalPrice);