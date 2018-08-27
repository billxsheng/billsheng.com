import React from 'react';

import classes from './Hero.css';


const Hero = (props) => (
    <div className= {classes.hero}>
        <span className="container">
            <row>
                <h1>Hey, I'm Bill.</h1>
            </row>
        </span>
    </div>
)

export default Hero;