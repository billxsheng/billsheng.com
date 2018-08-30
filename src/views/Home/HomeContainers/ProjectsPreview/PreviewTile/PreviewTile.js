import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './PreviewTile.css';

const PreviewTile = (props) => (
    <div styleName="project-preview-tile" className="col-md-4">
        <div styleName="upper-wrapper">
        
        </div>
        <div styleName="lower-wrapper" className="text-center">
            <h3>Project Name</h3>
            <p>short description</p>
        </div>
    </div>
)

export default CSSModules(PreviewTile, styles);