import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './AboutTile.css';
import Icon from '../../../components/Icon/Icon';
import Image from '../../../components/Image/Image';

const aboutTile = (props) => (
    <div className="jumbotron col-md-3" styleName="aboutTile">
        <div className="row" >
            <Icon></Icon>
        </div>
        <div>
            <h3>{props.title}</h3>
        </div>
        <p>{props.para}</p>
    </div>
)

export default CSSModules(aboutTile, styles);