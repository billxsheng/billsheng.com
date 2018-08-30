import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Hero.css';
import MainButtonRow from '../../../../components/Button/MainButtonRow/MainButtonRow';

const Hero = (props) => {
    return (
        <div styleName='hero'>
            <span className="container">
                <div className="row">
                    <h1>
                        👋 &nbsp;Hey, I'm Bill.
                    </h1>
                </div>
            </span>
           <MainButtonRow/>
            <div className="container" styleName="divide-container">
               <div styleName="upper-wrapper" >

               </div>
               <div styleName="lower-wrapper" >

               </div>
            </div>
            <svg styleName="wave" width="100%" height="100%" version="1.1"><defs></defs><path id="mainWave" d="" /></svg>
        </div>
        
    )
}

export default CSSModules(Hero, styles);