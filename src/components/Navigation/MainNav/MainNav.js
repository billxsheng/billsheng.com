import React from 'react';
import classes from './MainNav.css';

import NavItems from '../Items/NavItems';

const mainNav = (props) => (
    <nav className={classes.navContainer}>
    <span>
    <NavItems/>
    </span>
    </nav>
)

export default mainNav;