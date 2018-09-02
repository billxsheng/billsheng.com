import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Footer.css';
import MainButtonRow from '../Button/MainButtonRow/MainButtonRow';

const footer = (props) => (
    <footer styleName='footer'>
        <MainButtonRow/>
    </footer>
)

export default CSSModules(footer, styles);