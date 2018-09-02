import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './GalleryPreview.css';
import { NavLink } from 'react-router-dom';

const galleryPreview = (props) => (
    <div styleName= 'galleryPreview'>
    <span className="container">
            <h1>Gallery</h1>
            <div styleName="gallery-prev-el" className="row">
                <NavLink styleName="btn-link" to="/gallery">View Gallery</NavLink>
            </div>
    </span>
</div>
)

export default CSSModules(galleryPreview, styles);