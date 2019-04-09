import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Footer.css';
import MainButtonRow from '../Button/MainButtonRow/MainButtonRow';
import auxillary from '../../assets/auxillary';

const Footer = (props) => (
    <footer styleName='footer'>
        <MainButtonRow/>
        <div className="container">
            <p>{auxillary.footer}  &nbsp;<span aria-label="emoji" role="img">🚀</span></p>
        </div>
    </footer>
)

export default CSSModules(Footer, styles);