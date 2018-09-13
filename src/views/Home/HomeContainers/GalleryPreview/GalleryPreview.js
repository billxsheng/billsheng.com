import React, {Component} from 'react';

import CSSModules from 'react-css-modules';
import styles from './GalleryPreview.css';
import GalleryInfo from '../../../../assets/gallery';
import SlideCarousel from '../../../../components/Carousel/SlideCarousel/SlideCarousel';
import CarouselItem from '../../../../components/Carousel/SlideCarousel/CarouselItem/CarouselItem';
import Link from '../../../../components/Button/Link/Link';

class galleryPreview extends Component {
    render() {
        return (
            <div styleName= 'galleryPreview'>
                <span className="container">
                    <h2>Gallery</h2>
                    <span styleName="gallery-preview-paragraph" className="container">
                        <p>From pick six to python.</p>            
                    </span> 
                            <SlideCarousel>
                                <CarouselItem to="/gallery" path = "gallery/fbs.jpeg" date={GalleryInfo.saturdayNightLights.date} title={GalleryInfo.saturdayNightLights.title}  />
                                <CarouselItem to="/gallery"  path = "gallery/graphql.jpg"  title={GalleryInfo.graphQL.title} date={GalleryInfo.graphQL.date} />
                                <CarouselItem  to="/gallery" path = "gallery/waterloo-campus.jpg"  title={GalleryInfo.firstYear.title}  date={GalleryInfo.firstYear.date} />
                            </SlideCarousel>
                        <div styleName="gallery-prev-el" className="row">
                            <Link margin="180px" link="/gallery">View Gallery</Link>
                        </div>
                </span>
            </div>
        )
    }
} 

export default CSSModules(galleryPreview, styles);