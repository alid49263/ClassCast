import React from 'react'
import './CuteIcon.css'

const CuteIcon = (props) => {
    const {icon}=props
    return (
        <div className="buttonContainer">
             <img className="buttonImage" src={icon} alt="" />
        </div>
    )
}

export default CuteIcon
