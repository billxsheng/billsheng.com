import React, {Component} from 'react';

import CSSModules from 'react-css-modules';
import styles from './GalleryPreview.css';
import Link from '../../../../components/Button/Link/Link';
import OwlCarousel from 'react-owl-carousel2';
import '../../../../external/owl.carousel.css';
import '../../../../external/owl.theme.default.css';
import Carousel from '../../../../components/Carousel/Carousel';
import PreviewTile from '../ProjectsPreview/PreviewTile/PreviewTile';

class galleryPreview extends Component {
    render() {
        const options = {
            items: 1,
            dots: true,
            autoplayTimeout: 1500,
            rtl: false,
            mouseDrag: false,
        }

        const carouselStyle = {
            'width': '500px',
            'margin': '0 auto'
        }

        return (
            <div styleName= 'galleryPreview'>
                <span className="container">
                    <h2>Gallery</h2>
                    <OwlCarousel style={carouselStyle} ref="projCarousel" options={options}>   
                        <PreviewTile title="Skout" desc="LinkedIn for Athletes" tag="Project" />
                        <PreviewTile title="Canadian Tire" desc="Canada's largest retail organization" tag="Internship" />
                        <PreviewTile title="Blitz" desc="Sports Notification Innovation" tag="Project" />
                    </OwlCarousel>
                <button onClick={() => this.refs.projCarousel.prev()}>prev</button>
                <button onClick={() => this.refs.projCarousel.next()}>next</button>
                    <div styleName="gallery-prev-el" className="row">
                        <Link link="/gallery">View Gallery</Link>
                    </div>
                </span>
            </div>
        )
    }
} 

export default CSSModules(galleryPreview, styles);