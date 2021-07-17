import React from 'react'
import './HealthIndicator.css'

const HealthIndicators = (props) => {
    const {unit ,icon ,color ,percentage ,value}=props

    const styleObj={
        backgroundColor:`${color}`
    }

    const styleObjPer={
        width:`${percentage}%`,
        backgroundColor:`${color}`
    }
    return (
        <div className="indicatorContainer">
            <p>{value}</p>
            <div className="indicatorIconDetailsContainer">
               <div style={styleObj} className="iconContainer">
                  <img className="icon" src={icon} alt="" />
               </div>
               <p>{unit}</p>
            </div>
            <div className="percentContainer">
                <div style={styleObjPer} className="percentValue"></div>
            </div>
        </div>
    )
}

export default HealthIndicators



