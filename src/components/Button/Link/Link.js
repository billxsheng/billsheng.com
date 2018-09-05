import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Link.css';
import {NavLink} from 'react-router-dom';

const link = (props) => (
    <NavLink styleName="btn-link" to={props.link}>{props.children}</NavLink>
)

export default CSSModules(link, styles);