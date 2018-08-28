import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Icon.css';

const icon = (props) => {

    return (
      <i target="_blank" className={props.iconName} styleName={props.iconType}></i>
    )
}

export default CSSModules(icon, styles);