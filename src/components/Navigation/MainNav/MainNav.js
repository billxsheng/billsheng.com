import React from 'react';

import styles from './MainNav.css';
import CSSModules from 'react-css-modules';
import NavItems from '../Items/NavItems';

const mainNav = (props) => (
    <nav styleName="navContainer navContainerActive">
        <span>
            <NavItems/>
        </span>
    </nav>
)

export default CSSModules(mainNav, styles, {allowMultiple: true});