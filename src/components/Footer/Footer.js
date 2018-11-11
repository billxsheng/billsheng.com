import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Footer.css';
import MainButtonRow from '../Button/MainButtonRow/MainButtonRow';

const footer = (props) => (
    <footer styleName='footer'>
        <MainButtonRow/>
        <div className="container">
            <p>Created from scratch by Bill Sheng  &nbsp;<span aria-label="emoji" role="img">🚀</span></p>
        </div>
    </footer>
)

export default CSSModules(footer, styles);