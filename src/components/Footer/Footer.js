import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Footer.css';

const footer = (props) => (
    <footer styleName='footer'>
        <span className="container">
                <h1>Footer</h1>
        </span>
    </footer>
)

export default CSSModules(footer, styles);