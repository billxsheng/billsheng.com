import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './GalleryPreview.css';
import Link from '../../../../components/Button/Link/Link';

const galleryPreview = (props) => (
    <div styleName= 'galleryPreview'>
    <span className="container">
            <h2>Gallery</h2>
            <div styleName="gallery-prev-el" className="row">
                <Link link="/gallery">View Gallery</Link>
            </div>
    </span>
</div>
)

export default CSSModules(galleryPreview, styles);