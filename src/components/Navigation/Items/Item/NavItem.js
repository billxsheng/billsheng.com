import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './NavItem.css';

const navItem = (props) => (
    <li className="nav-item" >
        <a data-toggle={props.dataToggle} data-target={props.dataTarget} styleName='btnNav' className="nav-link">{props.children}</a>
    </li>
)

export default CSSModules(navItem, styles);

