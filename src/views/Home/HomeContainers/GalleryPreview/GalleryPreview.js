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
                    <div styleName="carousel-relative" >
                    <SlideCarousel>
                        <CarouselItem to="/gallery/saturday-night-lights" path = "gallery/fbs.jpg" date={GalleryInfo.saturdayNightLights.date} title={GalleryInfo.saturdayNightLights.title}  />
                        <CarouselItem to="/gallery/graphql"  path = "gallery/graphql.jpg"  title={GalleryInfo.graphQL.title} date={GalleryInfo.graphQL.date} />
                        <CarouselItem  to="/gallery/waterloo-engineering" path = "gallery/waterloo-campus.jpg"  title={GalleryInfo.firstYear.title}  date={GalleryInfo.firstYear.date} />
                    </SlideCarousel>
                    </div>
                    <div styleName="link-container" className="row">
                        <Link  margin="50px" link="/gallery">View Gallery</Link>
                    </div>
                </span>
            </div>
        )
    }
} 

export default CSSModules(galleryPreview, styles);