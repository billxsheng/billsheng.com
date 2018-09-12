import React from 'react';
import CSSModules from 'react-css-modules';
import {NavLink} from 'react-router-dom';
import styles from './GalleryPreviewTile.css';

const galleryTile = (props) => {
        const carouselStyle = {
            'backgroundImage': `url(${props.background})`,
            'backgroundSize': 'cover'
        }
        
        return (
            <NavLink style={carouselStyle} to="/gallery" className='btn' styleName="gallery-preview-tile" >
                <div styleName="tile-div"> 
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                </div>
            </NavLink>
        )
}
    


export default CSSModules(galleryTile, styles, {allowMultiple: true});