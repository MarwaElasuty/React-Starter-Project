import React, { useEffect } from 'react'
import './Header.css'
import stateImg from '../../assets/state-mgmt.png';


const Header = () => {
    const test='../../assets/components.png'

    const reactDescriptions = ['Core', 'Fundamental', 'Crucial'];

    function genRandomInt(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    return (
        <header>
     <img src={stateImg} alt="Test" />
            <h1>React Essentials</h1>
            <p>
                {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
                going to build!
            </p>
      
        </header>
        
    )
}

export default Header