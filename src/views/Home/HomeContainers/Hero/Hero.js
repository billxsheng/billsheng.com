import React from 'react';

import classes from './Hero.css';


const Hero = (props) => {
    let waveStyle = {
        height: '100px',
        margin: 'auto 20px 10px 20px'
    }

    return (
        <div className={classes.hero}>
            <span className="container">
                <row>
                    <h1> 
                        <span>
                            <img style={waveStyle} src={require('../../../../assets/images/wave.png')} />
                         </span>
                         Hey, I'm Bill.
                    </h1>
                </row>
            </span>
        </div>
    )
}

export default Hero;