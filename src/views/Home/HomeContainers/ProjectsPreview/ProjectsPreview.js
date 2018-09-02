import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './ProjectsPreview.css';
import Button from './../../../../components/Button/Button';
import PreviewTile from './PreviewTile/PreviewTile';
import { NavLink } from 'react-router-dom';

const projectsPreview = (props) => (
    <div styleName= 'projectsPreview'>
    <span className="container">
            <h1>Projects</h1>
    </span>
    <div className="container">
        <div styleName="tile-wrapper" className="row">
            <PreviewTile title="Blitz" desc="Revolutionizing sports notifications." />
            <PreviewTile title="Munkee" desc="Just for fun." />
            <PreviewTile title="Moodify" desc="For job seekers." />
        </div>
    </div>
    <div className="container">
        <div styleName="proj-prev-el" className="row">
            <NavLink styleName="btn-link" to="/projects">View All Projects</NavLink>
        </div>
    </div>
</div>
)

export default CSSModules(projectsPreview, styles);