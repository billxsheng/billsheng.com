import React, {Component} from 'react';

import CSSModules from 'react-css-modules';
import styles from './ProjectsPreview.css';
import Link from '../../../../components/Button/Link/Link';
import SlideCarousel from '../../../../components/Carousel/SlideCarousel/SlideCarousel';
import CarouselItem from '../../../../components/Carousel/SlideCarousel/CarouselItem/CarouselItem';

class projectsPreview extends Component {
    

    render() {
        return (
            <div styleName= 'projectsPreview'>
            <span className="container">
                    <h2>Projects</h2>
            </span>
            <span styleName="projects-preview-paragraph" className="container">
                    <p>I'm always up for a challenge <span aria-label="emoji" role="img">💡</span></p>            
            </span> 
            <div styleName="carousel-relative">
                <SlideCarousel>
                    <CarouselItem title="Ryse" tag="Hackathon" path="projects/ryse-screen.png" to="/projects/ryse"/>
                    <CarouselItem title="Canadian Tire" tag="Internship" path="gallery/coop1.jpg" to="/projects/canadian-tire"/>
                    <CarouselItem title="Blitz" tag="Project" path="projects/blitz-nfl.jpg" to="/projects/blitz"/>
                </SlideCarousel>
            </div>
                <div styleName="link-container" className="row">
                    <Link margin="50px" link="/projects">View All Projects</Link>
                </div>
            </div>
        )
    }
} 
   
export default CSSModules(projectsPreview, styles);