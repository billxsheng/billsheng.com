import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './PreviewTile.css';

const PreviewTile = (props) => {
        return (
            <div className='btn' styleName="project-preview-tile" >
                <div styleName="tile-div">
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                    <p styleName="project-preview-tag">{props.tag}</p>
                </div>
            </div>
        )
}
    


export default CSSModules(PreviewTile, styles, {allowMultiple: true});