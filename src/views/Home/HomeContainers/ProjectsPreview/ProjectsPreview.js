import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './ProjectsPreview.css'

const projectsPreview = (props) => (
    <div styleName= 'projectsPreview'>
    <span className="container">
            <h1>Projects</h1>
    </span>
</div>
)

export default CSSModules(projectsPreview, styles);