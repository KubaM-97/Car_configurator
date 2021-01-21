import React from "react"
import PropTypes from "prop-types"


const Welcome = props => (
    <div className="wrapper p-md-5 pt-3">
        <div className="layer position-absolute fixed-top bg-dark w-100 h-100"></div>
        <h1 className="pb-4">Witamy w konfiguratorze pojazdu!!!</h1>
        <h1 className="pb-4">Kliknij w przycisk poniżej!</h1>
        <button className="m-5 mx-auto" onClick={()=>props.onGoOn()}>Zaczynamy!!!</button>
    </div>
)

Welcome.propTypes = {
    onGoOn: PropTypes.func
}

export default Welcome