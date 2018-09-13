import React from 'react';
import CSSModules from 'react-css-modules';
import {NavLink} from 'react-router-dom';
import styles from './GalleryPreviewTile.css';

const galleryTile = (props) => {
    console.log(props.path);
        const bg = require('../../../../../assets/images/gallery/' + props.path);
    
        const bgStyle = {
            'background': `linear-gradient(to right, rgb(0,0,0, 0.4), rgb(0,0,0,0), rgb(0,0,0, 0.4)), url(${bg})`,
            'backgroundSize': 'cover',
        }
        
        return (
            <NavLink styleName="carousel-wrapper" to="/gallery" className='btn' styleName="gallery-preview-tile" >
                <div style={bgStyle} styleName="upper-wrapper">

                </div>
                <div styleName="lower-wrapper" className="row">
                    <div styleName="text-div">
                        <h3>{props.title}</h3>
                        <p>{props.date}</p>
                    </div>
                </div>
            </NavLink>
        )
}
    


export default CSSModules(galleryTile, styles, {allowMultiple: true});