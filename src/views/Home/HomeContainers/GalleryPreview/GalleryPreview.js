import React, {Component} from 'react';

import CSSModules from 'react-css-modules';
import styles from './GalleryPreview.css';
import gallery from '../../../../assets/gallery';
import SlideCarousel from '../../../../components/Carousel/SlideCarousel/SlideCarousel';
import CarouselItem from '../../../../components/Carousel/SlideCarousel/CarouselItem/CarouselItem';
import Button from '../../../../components/Button/Button';
import home from '../../../../assets/home';
import Fade from 'react-reveal/Fade';

class galleryPreview extends Component {
    render() {
        return (
            <div styleName= 'galleryPreview'>
                <span className="container">
                    <h2>{home.gallery.title}</h2>
                    <Fade bottom>
                    <span styleName="gallery-preview-paragraph" className="container">
                        <p>{home.gallery.description}</p>            
                    </span> 
                    </Fade>
                    <div styleName="carousel-relative" >
                    <Fade bottom>
                    <SlideCarousel>
                        <CarouselItem to="/gallery/photos" type = "photos" description={gallery.photos.description} title={gallery.photos.title}  />
                        <CarouselItem to="/gallery/saturday-night-lights" type = "snl" description={gallery.snl.description} title={gallery.snl.title}  />
                        <CarouselItem to="/gallery/graphql"  type = "graphql"  title={gallery.graphql.title} description={gallery.graphql.description} />
                        <CarouselItem  to="/gallery/waterloo-engineering" type = "wateng"  title={gallery.year1.title} description={gallery.year1.description} />
                    </SlideCarousel>
                    </Fade>
                    </div>
                    <Fade bottom>
                    <div styleName="link-container" className="row">
                        <Button margin="30px auto" to="/gallery">View Gallery</Button>
                    </div>
                    </Fade>
                </span>
            </div>
        )
    }
} 

export default CSSModules(galleryPreview, styles);