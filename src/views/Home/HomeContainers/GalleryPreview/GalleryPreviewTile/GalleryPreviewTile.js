import React from 'react';
import CSSModules from 'react-css-modules';
import {NavLink} from 'react-router-dom';
import styles from './GalleryPreviewTile.css';

const galleryTile = (props) => {
    console.log(props.path);
        const bg = require('../../../../../assets/images/gallery/' + props.path);
    
        const bgStyle = {
            // 'background': `linear-gradient(to top left, rgb(0, 0, 0, 0.7), rgb(0, 0, 0, 0.7), rgb(0, 0, 0, 0.7)), url(${bg})`,
            'backgroundImage': `url(${bg})`,
            'backgroundSize': 'cover',
        }
        
        return (
            <NavLink styleName="carousel-wrapper" to="/gallery" className='btn' styleName="gallery-preview-tile" >
                <div style={bgStyle} styleName="upper-wrapper">

                </div>
                <div styleName="lower-wrapper" className="row">
                    <div class="col-md-8">
                    <h3>{props.title}</h3>
                    </div>
                    <div class="col-md-4">
                        <p>{props.desc}</p>
                        <p>{props.date}</p>
                    </div>
                </div>
            </NavLink>
        )
}
    

{/* <div style={carouselStyle}   styleName="tile-div"> 
<h3>{props.title}</h3>
<p>{props.desc}</p>
<p>{props.date}</p>
</div>
<div styleName="lower-overlay"></div> */}


export default CSSModules(galleryTile, styles, {allowMultiple: true});