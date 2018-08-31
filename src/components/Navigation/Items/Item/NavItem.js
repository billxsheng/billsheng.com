import React from 'react';
import CSSModules from 'react-css-modules';
import { NavLink } from 'react-router-dom';

import styles from './NavItem.css';

const navItem = (props) => (
    <li styleName="nav-item-parent" className="nav-item" >
        <NavLink to={props.link} data-toggle={props.dataToggle} data-target={props.dataTarget} styleName='btnNav' className="nav-link">{props.children}</NavLink>
    </li>
)

export default CSSModules(navItem, styles);

