import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Logo.css';

const logo = (props) => {     
    return (
        <img styleName='logo' src={require('../../assets/images/logo.png')} alt="logo" />
    )   
}

export default CSSModules(logo, styles);