import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './PreviewTile.css';

const PreviewTile = (props) => (
        <div styleName="project-preview-tile" >
            <div styleName="tile-div">
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    )
    


export default CSSModules(PreviewTile, styles, {allowMultiple: true});