import React, {Component} from 'react';

import CSSModules from 'react-css-modules';
import styles from './GalleryPreview.css';
import GalleryInfo from '../../../../assets/galleryInfo';
import SlideCarousel from '../../../../components/Carousel/SlideCarousel/SlideCarousel';
import CarouselItem from '../../../../components/Carousel/SlideCarousel/CarouselItem/CarouselItem';
import Button from '../../../../components/Button/Button';
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
                        <CarouselItem to="/gallery/photos" type = "photos" description={GalleryInfo.photos.description} title={GalleryInfo.photos.title}  />
                        <CarouselItem to="/gallery/saturday-night-lights" type = "snl" description={GalleryInfo.snl.description} title={GalleryInfo.snl.title}  />
                        <CarouselItem to="/gallery/graphql"  type = "graphql"  title={GalleryInfo.graphql.title} description={GalleryInfo.graphql.description} />
                        <CarouselItem  to="/gallery/waterloo-engineering" type = "wateng"  title={GalleryInfo.year1.title} description={GalleryInfo.year1.description} />
                    </SlideCarousel>
                    </div>
                    <div styleName="link-container" className="row">
                        <Button  margin="30px auto" to="/gallery">View Gallery</Button>
                    </div>
                </span>
            </div>
        )
    }
} 

export default CSSModules(galleryPreview, styles);