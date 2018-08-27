import React from 'react';

import classes from './NavItem.css';

const navItem = (props) => (
    <li className="nav-item" >
        <a className="nav-link"><span className={classes.btnNav}>{props.children}</span></a>
    </li>
)

export default navItem;