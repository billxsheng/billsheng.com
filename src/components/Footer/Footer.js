import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Footer.css';
import MainButtonRow from '../Button/MainButtonRow/MainButtonRow';
import Logo from '../Logo/Logo';

const footer = (props) => (
    <footer styleName='footer'>

        <MainButtonRow/>
        <div className="container">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bill Sheng 2018 ©</p>
        </div>
        <div className="row" >
            <Logo height="50px" margin="10px auto 0 auto" />
        </div>
    </footer>
)

export default CSSModules(footer, styles);