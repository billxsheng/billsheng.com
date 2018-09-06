import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './AboutTile.css';
import Icon from '../../../components/Icon/Icon';
import Image from '../../../components/Image/Image';

const aboutTile = (props) => (
    <div className="jumbotron" styleName="aboutTile">
        <div className="row" >
            <Image top="-100px" width="100px" path="logo.png"/>
        </div>
        <div>
            <h3>{props.title}</h3>
        </div>
        <p>{props.para}</p>
    </div>
)

export default CSSModules(aboutTile, styles);