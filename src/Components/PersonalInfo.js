import React from 'react'
import Avatar from './Avatar'
import './PersonalInfo.css'
import Chicken from '../Images/chicken.jpg'
import Notification from '../Images/notification-bell.png'
import Menu from '../Images/apps.png'
import CuteIcon from './CuteIcon'
import HealthIndicators from './HealthIndicators'
import Clock from '../Images/minute.png'
import Heart from '../Images/heartbeat.png'
import Apple from '../Images/apple.png'
import Break from '../Images/break.png'
import Card from './Card'

const PersonalInfo = () =>{
    return (
        <div className="personalInfoContainer">
            <div className='personalInfoHeader'>
                <Avatar
                    image={Chicken}
                    name="Philip"
                    accountType="Free Account"
                />
                <div className='personalInfoHeaderButtons'>
                    <CuteIcon icon={Notification} />
                    <CuteIcon icon={Menu} />
                </div>
            </div>
            <div className='persoalInfoHealth'>
                <p className='heading'>Health</p>
                <div className="persoalInfoHealthParameters">
                    <HealthIndicators
                        unit="Hours"
                        icon={Clock}
                        color="#4e94fb"
                        percentage={60}
                        value="6:25"
                    />
                    <div className="line"></div>
                    <HealthIndicators
                        unit="Bpm"
                        icon={Heart}
                        color="#ec7166"
                        percentage={90}
                        value="120"
                    />
                    <div className="line"></div>
                    <HealthIndicators
                        unit="Hours"
                        icon={Apple}
                        color="#76d171"
                        percentage={40}
                        value="1.84" />
                </div>
            </div>
            <div className='signupCard'>
                <Card
                    type="signup"
                    color="#fffbf1"
                    shadow="#feeec3" 
                    name="Box"      
                    club="Sports Club"
                    exercize1="Warm-up"
                    duration1="40"
                    exercize2="Stretch"
                    duration2="20"
                    time="9:00"
                /> 
            </div>
            <div className='personalInfoTrainings'>
                <p className='heading'>Today Trainings</p>
                <Card
                    type="normal"
                    color="#4d95fc"
                    shadow="#c0dafd" 
                    name="Box"      
                    club="Sports Club"
                    exercize1="Warm-up"
                    duration1="40"
                    exercize2="Stretch"
                    duration2="20"
                    time="9:00"
                />
                <Card
                    type="normal"
                    color="#ec7067"
                    shadow="#f4bec2" 
                    name="Crossfit"      
                    club="Sports Club"
                    exercize1="Warm-up"
                    duration1="40"
                    exercize2="Pull-ups"
                    duration2="20"
                    time="10:00"
                />
            </div>
            <img className="breakImg" src={Break} alt="" />
        </div>
    )
}

export default PersonalInfo
