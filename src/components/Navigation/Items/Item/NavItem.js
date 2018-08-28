import React from 'react';

import classes from './NavItem.css';

const navItem = (props) => (
    <li className="nav-item" >
        <a data-toggle={props.dataToggle} data-target={props.dataTarget} className="nav-link"><span className={classes.btnNav}>{props.children}</span></a>
    </li>
)

export default navItem;

