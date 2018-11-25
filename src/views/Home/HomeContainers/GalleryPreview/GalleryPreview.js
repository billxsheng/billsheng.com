import React, {Component} from 'react';

import CSSModules from 'react-css-modules';
import styles from './GalleryPreview.css';
import GalleryInfo from '../../../../assets/galleryInfo';
import SlideCarousel from '../../../../components/Carousel/SlideCarousel/SlideCarousel';
import CarouselItem from '../../../../components/Carousel/SlideCarousel/CarouselItem/CarouselItem';
import Link from '../../../../components/Button/Link/Link';
import homeInfo from '../../../../assets/homeInfo';

class galleryPreview extends Component {
    render() {
        return (
            <div styleName= 'galleryPreview'>
                <span className="container">
                    <h2>{homeInfo.gallery.title}</h2>
                    <span styleName="gallery-preview-paragraph" className="container">
                        <p>{homeInfo.gallery.description}</p>            
                    </span> 
                    <div styleName="carousel-relative" >
                    <SlideCarousel>
                        <CarouselItem to="/gallery/saturday-night-lights" type = "snl" date={GalleryInfo.snl.date} title={GalleryInfo.snl.title}  />
                        <CarouselItem to="/gallery/graphql"  type = "graphql"  title={GalleryInfo.graphql.title} date={GalleryInfo.graphql.date} />
                        <CarouselItem  to="/gallery/waterloo-engineering" type = "wateng"  title={GalleryInfo.year1.title}  date={GalleryInfo.year1.date} />
                    </SlideCarousel>
                    </div>
                    <div styleName="link-container" className="row">
                        <Link  margin="25px" link="/gallery">View Gallery</Link>
                    </div>
                </span>
            </div>
        )
    }
} 

export default CSSModules(galleryPreview, styles);