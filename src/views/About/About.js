import React from 'react';
import styles from './About.css';
import CSSModules from 'react-css-modules';

const About = (props) => (
    <div styleName="about">
        <span className="container">
                <div className="row">
                    <h1>
                       About
                    </h1>
                </div>
            </span>
    </div>
)

export default CSSModules(About, styles);