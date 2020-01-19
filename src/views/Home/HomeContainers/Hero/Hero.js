import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Hero.css';
import MainButtonRow from '../../../../components/Button/MainButtonRow/MainButtonRow';
import Image from '../../../../components/Image/Image';
import Fade from 'react-reveal/Fade';

const Hero = (props) => {
    const waveStyle = {
        'width': '120px',
        'height': 'auto'
    }
    

    return (
        <div styleName='hero'>
            <span className="container">
                <div className="row" styleName="main-title">
                    <h5>
                    <span><img styleName="wave" alt="wave" style={waveStyle} src={require('../../../../assets/images/other/wave.png')}></img></span>
                    &nbsp;
                    Hey, I'm Bill!
                    </h5>
                </div>
            </span>
            <div styleName="stripe"/>   
            <div styleName="stripe-reflected"/> 
            <div className="container" styleName="divide-container">
               <div styleName="upper-wrapper" >
                <div styleName="img-wide">
                    <Image margin="0px" path="about/other/headshot-hero.jpg"  />
                </div>
                <div styleName="img-narrow">
                    <Image margin="0px" path="about/other/headshot-hero-mobile.jpg"  />
                </div>
               </div>
               <div styleName="lower-wrapper" >
                    <MainButtonRow/>
               </div>
            </div>
        </div>
    )
}

export default CSSModules(Hero, styles,{allowMultiple: true});