import React from 'react';
import styles from './Projects.css';
import CSSModules from 'react-css-modules';
import ProjectTile from './ProjectTile/ProjectTile';

const Projects = (props) => (
    <div styleName="about" className="container">
        <span className="container">
            <h1>
                Projects
            </h1>
        </span>
        <ProjectTile title="Blitz" shortDesc="Sports notification innovation." />
        <ProjectTile title="Blitz" shortDesc="Sports notification innovation."/>
    </div>
)

export default CSSModules(Projects, styles);