import React from 'react'
import './Card.css'
import Menu from '../Images/menus.png'
import Goofy from '../Images/goofy.png'

const Card = (props) =>
{
    const {
        color, shadow, name,
        club, exercize1, duration1,
        exercize2, duration2, time, type
    } = props

    const styleObj = {
        backgroundColor: `${color}`
    }

    const styleObj1 = {
        backgroundColor: `${shadow}`
    }

    return (
        <div className="cardContainer">
            <div style={styleObj} className="mainCard">
                {type === 'normal' && (
                    <div className="mainCardInfo">
                        <div >
                            <p className="mainCardName">{name}</p>
                            <p className="mainCardClub">{club}</p>
                            <div className="timeCont">
                                <p className="time">{time}</p>
                            </div>
                        </div>
                        <div className="exerciseDet">
                            <p className="duration">{duration1}</p>
                            <p className="durationUnit">Min</p>
                            <p className="exersize">{exercize1}</p>
                        </div>
                        <div className="exerciseDet">
                            <p className="duration">{duration2}</p>
                            <p className="durationUnit">Min</p>
                            <p className="exersize">{exercize2}</p>
                        </div>
                        <img className="menuIcon" src={Menu} alt="" />
                    </div>
                )}
                {type === 'signup' && (
                    <div className="signupCont">
                    <img className="signupImage" src={Goofy} alt="" />
                    <div className="mainCardDetails">
                        <p className="imageText">Sign up for a personal trainer to improve your results</p>
                        <div className='signupButton'>Sign Up</div>
                    </div>
                    </div>
                )}
            </div>
            <div style={styleObj1} className="cardShadow"></div>
        </div>
    )
}

export default Card
