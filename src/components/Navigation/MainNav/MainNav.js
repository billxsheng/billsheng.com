import React from 'react';

import styles from './MainNav.css';
import CSSModules from 'react-css-modules';
import NavItems from '../Items/NavItems';

const mainNav = (props) => (
    <nav styleName="navContainer">
    <span>
    <NavItems/>
    </span>
    </nav>
)

export default CSSModules(mainNav, styles);