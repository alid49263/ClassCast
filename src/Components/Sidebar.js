import React from 'react'
import './Sidebar.css'
import PersonalInfo from './PersonalInfo'
import Trainers from './Trainers'

const Sidebar = () => {
    return (
        <div className="sidebarContainer">
            <PersonalInfo />
            <Trainers />
        </div>
    )
}

export default Sidebar
