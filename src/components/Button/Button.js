import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Button.css';

const button = (props) => {

    return (
        <a target="_blank" to={props.linkSPA} href={props.link} styleName={props.btnType}>{props.children}</a>
    )
}

export default CSSModules(button, styles);