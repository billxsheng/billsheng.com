import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Hero.css';
import MainButtonRow from '../../../../components/Button/MainButtonRow/MainButtonRow';

const Hero = (props) => {
    const waveStyle = {
        'width': '120px',
        'height': '100%'
    }
    

    return (
        <div styleName='hero'>
            <span className="container">
                <div className="row" styleName="main-title">
                    <h1>
                    {/* <span aria-label="emoji" role="img">👋</span>&nbsp; Hey, I'm Bill. */}
                    <span><img styleName="wave" alt="wave" style={waveStyle} src={require('../../../../assets/images/wave.png')}></img></span>
                    &nbsp;
                    Hey, I'm Bill!
                    </h1>
                </div>
            </span>
           <div>
                <div styleName="stripe"/>    
                <div styleName="stripe-reflected"/>  
           </div>
            <div className="container" styleName="divide-container">
               <div styleName="upper-wrapper" >
               </div>
               <div styleName="lower-wrapper" >
                    <MainButtonRow/>
               </div>
            </div>
        </div>
        
    )
}

export default CSSModules(Hero, styles,{allowMultiple: true});