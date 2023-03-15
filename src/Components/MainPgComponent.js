import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import desktopDivider from '../Images/pattern-divider-desktop.svg'
import mobileDivider from '../Images/pattern-divider-mobile.svg'
import dice from '../Images/icon-dice.svg'
import '../App.css'

export default function MainPgComponent(){
    //useStates for storing variables
    const [id, setId] = useState('117');
    const [advice, setAdvice] = useState("It is easy to sit up and take notice, what's difficult is getting up and taking action.");

    //useEffect for linking button click action
    useEffect( ()=>{handleClick()}, []);

    //function for handling button click actions including API fetch
    async function handleClick(){
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setId(data.slip.id);
        setAdvice(data.slip.advice);
    }
    
    return (
        <div className="advice-box">
            <span className="advice-title">ADVICE #{id}</span>

            <div className="advice-txt-div">
                <span className="advice-txt">“{advice}”</span>
            </div>

            <picture>
                <source media="(max-width: 560px)" srcset={mobileDivider}/>
                <img src={desktopDivider} className="divider-img" alt="divider"/>
            </picture>

            <div onClick={handleClick} className="dice-div">
                <img src={dice}/>
            </div>
        </div>
    );
}