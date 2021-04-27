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
            
        </div>
    )
}

export default CSSModules(Hero, styles,{allowMultiple: true});