import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Footer.css';
import MainButtonRow from '../Button/MainButtonRow/MainButtonRow';

const footer = (props) => (
    <footer styleName='footer'>
        <span className="container">
                <h1>Footer</h1>
        </span>
        <MainButtonRow/>
    </footer>
)

export default CSSModules(footer, styles);