import React from "react"
import {connect} from 'react-redux';

import FinalPrice from "./FinalPrice";

const FinalPanel = props => {
    const chosenItemsImg = props.chosenItems.map(el => {
        return (
            <div key="el.id" className="finalPanelDiv border border-4 border-dark mx-2">
                <img src={el.img} alt="el.name" className="w-100 h-100"/>
            </div>
        )
    })
    return    (
        <div className="finalPanel mx-auto py-3 d-flex align-items-center">
        <div className="layer position-absolute fixed-top bg-dark w-100 h-100"></div>
        <div className="d-flex justify-content-start align-items-center w-75 mx-auto">
                {chosenItemsImg}
        </div>
            <FinalPrice />
        </div>
    )}

const mapStateToProps = state => {
    return {
        chosenItems: state.items.chosenItems,
    };
};

export default connect(mapStateToProps)(FinalPanel);