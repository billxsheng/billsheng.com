import React from 'react';
import styles from './Gallery.css';
import CSSModules from 'react-css-modules';

const Gallery = (props) => (
    <div styleName="gallery">
        <span className="container">
                <div className="row">
                    <h1>
                       Gallery
                    </h1>
                </div>
            </span>
    </div>
)

export default CSSModules(Gallery, styles);