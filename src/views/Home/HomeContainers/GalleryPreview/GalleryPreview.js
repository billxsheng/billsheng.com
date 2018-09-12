import React, {Component} from 'react';

import CSSModules from 'react-css-modules';
import styles from './GalleryPreview.css';
import OwlCarousel from 'react-owl-carousel2';
import GalleryPreviewTile from './GalleryPreviewTile/GalleryPreviewTile';
import Icon from '../../../../components/Icon/Icon';

class galleryPreview extends Component {
    render() {
        const options = {
            items: 1,
            dots: true,
            rtl: false,
            mouseDrag: false,
            loop: true
        }

        const carouselStyle = {
            'width': 'inherit',
            'margin': '0 auto',
            'backgroundColor': 'transparent',
            'borderRadius': '40px',
            'position':'relative',
            'boxShadow': '0 0 40px #ccc'
        }

        return (
            <div styleName= 'galleryPreview'>
                <span className="container">
                    <h2>Gallery</h2>
                    <span className="container">
                        <p>From pick 6 to python.</p>            
                    </span> 
                        <div styleName="carousel-wrapper-btn"  >
                            <OwlCarousel style={carouselStyle} ref="projCarousel" options={options}>   
                                <GalleryPreviewTile path = "fbs.jpeg" date="September 5, 2018" title="The Rise of the FBS" desc="The NFL's successor" />
                                <GalleryPreviewTile  path = "graphql.jpg"  title="GraphQL" desc="Seamless API manipulation" date="September 5, 2018" />
                                <GalleryPreviewTile  path = "coop1.jpg"  title="Co-op #1" desc="Thoughts and Reflections" date="September 5, 2018" />
                            </OwlCarousel>
                            <a styleName="btn-left" onClick={() => this.refs.projCarousel.prev()}><Icon iconType="iconSmall" iconName="fas fa-chevron-left"></Icon></a>
                            <a styleName="btn-right" onClick={() => this.refs.projCarousel.next()}><Icon iconType="iconSmall" iconName="fas fa-chevron-right"></Icon></a>
                        </div>
                        {/* <div styleName="gallery-prev-el" className="row">
                            <Link link="/gallery">View Gallery</Link>
                        </div> */}
                </span>
            </div>
        )
    }
} 

export default CSSModules(galleryPreview, styles);