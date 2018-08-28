import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Hero.css';
import Button from '../../../../components/Button/Button';
import Icon from '../../../../components/Icon/Icon';
import Links from '../../../../assets/links';


const Hero = (props) => {
    let waveStyle = {
        height: '100px',
        margin: 'auto 20px 10px 20px'
    }

    return (
        <div styleName='hero'>
            <span className="container">
                <div className="row">
                    <h1> 
                        <span>
                            <img style={waveStyle} src={require('../../../../assets/images/wave.png')} />
                         </span>
                         Hey, I'm Bill.
                    </h1>
                </div>
            </span>
            <div className="row text-center" styleName="btn-container">
                <div className="col-md-3">
                    <Button link={Links.resumePath} btnType="btnIcon" ><Icon iconName="far fa-file" iconType="iconSmall" /></Button>
                </div>
                <div className="col-md-3">
                    <Button link={Links.email} btnType="btnIcon" ><Icon iconName="far fa-envelope" iconType="iconSmall" /></Button>
                </div>
                <div className="col-md-3">
                    <Button link={Links.github} btnType="btnIcon" ><Icon iconName="fab fa-github" iconType="iconSmall" /></Button>
                </div>
                <div className="col-md-3">
                    <Button link={Links.linkedin} btnType="btnIcon" ><Icon iconName="fab fa-linkedin" iconType="iconSmall" /></Button>
                </div>
            </div>
            <svg width="100%" height="100%" version="1.1"><defs></defs><path id="mainWave" d=""/></svg>

        </div>
    )
}

export default CSSModules(Hero, styles);