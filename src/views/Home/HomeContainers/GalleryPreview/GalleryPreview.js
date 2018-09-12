import React, {Component} from 'react';

import CSSModules from 'react-css-modules';
import styles from './GalleryPreview.css';
import Link from '../../../../components/Button/Link/Link';
import OwlCarousel from 'react-owl-carousel2';
import '../../../../external/owl.carousel.css';
import '../../../../external/owl.theme.default.css';
import Carousel from '../../../../components/Carousel/Carousel';
import GalleryPreviewTile from './GalleryPreviewTile/GalleryPreviewTile';
import Icon from '../../../../components/Icon/Icon';

class galleryPreview extends Component {
    render() {
        const options = {
            items: 1,
            dots: false,
            autoplayTimeout: 1500,
            rtl: false,
            mouseDrag: false,
            loop: true
        }

        const carouselStyle = {
            'width': 'inherit',
            'margin': '0 auto',
            'backgroundColor': 'transparent',
            'borderRadius': '15px',
            'position':'relative',
            'border': 'black solid 3px'
        }

        return (
            <div styleName= 'galleryPreview'>
                <span className="container">
                    <h2>Gallery</h2>
                    <span className="container">
                        <p>From pick 6 to python </p>            
                    </span> 
                        <div styleName="carousel-wrapper-btn"  >
                            <OwlCarousel style={carouselStyle} ref="projCarousel" options={options}>   
                                <GalleryPreviewTile background = "../../../../../assets/images/logo.png" title="The Rise of College Football" desc="" tag="Project" />
                                <GalleryPreviewTile title="GraphQL" desc="" tag="Internship" />
                                <GalleryPreviewTile title="Containerization" desc="" tag="Project" />
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