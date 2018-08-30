import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './ProjectsPreview.css';
import Button from './../../../../components/Button/Button';
import PreviewTile from './PreviewTile/PreviewTile';

const projectsPreview = (props) => (
    <div styleName= 'projectsPreview'>
    <span className="container">
            <h1>Projects</h1>
    </span>
    <div className="container">
        <div styleName="tile-wrapper" className="row">
            <PreviewTile/>
            <PreviewTile/>
            <PreviewTile/>
        </div>
    </div>
    <div className="container">
        <div styleName="proj-prev-el" className="row">
            <Button btnType="btnSmall">View All Projects</Button>
        </div>
    </div>
</div>
)

export default CSSModules(projectsPreview, styles);