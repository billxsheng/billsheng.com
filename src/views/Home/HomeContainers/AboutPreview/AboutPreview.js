import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './AboutPreview.css';
import Typing from 'react-typing-animation';


const aboutPreview = (props) => (
    <div styleName='aboutPreview'>
        <span className="container">
            <h1>About</h1>
        </span>
    </div>
)

export default CSSModules(aboutPreview, styles);