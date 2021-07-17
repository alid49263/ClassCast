import React from 'react'
import Avatar from './Avatar'
import './Trainers.css'
import Chicken from '../Images/chicken.jpg'
import CuteIcon from './CuteIcon'
import Message from '../Images/message.png'

const Trainers = () => {
    return (
        <div className='trainersContainer'>
            <p>Your Trainers</p>
            <div className='trainersHeader'>
                <Avatar
                    image={Chicken}
                    name="Syed Nayab Ali"
                    accountType="MMA Coach"
                />
                <div className="onlineIndicator"></div>
                <div className='trainersHeaderButtons'>
                    <CuteIcon icon={Message} />
                </div>
            </div>
            <div className='trainersHeader'>
                <Avatar
                    image={Chicken}
                    name="Hitesh Meena"
                    accountType="Boxing Coach"
                />
                <div className="onlineIndicator"></div>
                <div className='trainersHeaderButtons'>
                    <CuteIcon icon={Message} />
                </div>
            </div>
        </div>
    )
}

export default Trainers
