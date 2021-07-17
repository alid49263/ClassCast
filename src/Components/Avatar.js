import React from 'react'
import './Avatar.css'

const Avatar = (props) => {
    const {image,name,accountType}=props
    return (
        <div className="avatarContainer">
            <img className="avatarImage" src={image} alt="Avatar" />
            <div className="avatarDetails">
              <p className="avatarDetailsName">{name}</p>
              <p className="avatarDetailsType">{accountType}</p>
            </div>
        </div>
    )
}

export default Avatar
