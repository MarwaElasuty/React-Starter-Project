import React, { useEffect } from 'react'
import './Header.css'
import reactHeaderImg from '../../assets/react-core-concepts.png';


const Header = () => {

    const reactDescriptions = ['Core', 'Fundamental', 'Crucial'];

    function genRandomInt(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    return (
        <header>
     
            <img src={reactHeaderImg}/>
            <h1>React Essentials</h1>
            <p>
                {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
                going to build!
            </p>
      
        </header>
        
    )
}

export default Header