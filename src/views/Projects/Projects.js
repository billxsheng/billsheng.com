import React from 'react';
import styles from './Projects.css';
import CSSModules from 'react-css-modules';

const Projects = (props) => (
    <div styleName="about">
        <span className="container">
                <div className="row">
                    <h1>
                       Projects
                    </h1>
                </div>
            </span>
    </div>
)

export default CSSModules(Projects, styles);