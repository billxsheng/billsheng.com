import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './ProjectTile.css';

const projectTile = (props) => {
    return (
        <div className="row" styleName="project-tile">
            <h2>
                {props.title}
            </h2>
            <p>
                {props.shortDesc}
            </p>
        </div>
    )
}

export default CSSModules(projectTile, styles);