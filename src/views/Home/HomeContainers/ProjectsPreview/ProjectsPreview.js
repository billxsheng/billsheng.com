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
                    <CarouselItem title="Ryse" tag="Hackathon" type="ryse" to="/projects/ryse"/>
                    <CarouselItem title="Canadian Tire" tag="Internship" type="coop1" to="/projects/canadian-tire"/>
                    <CarouselItem title="Blitz" tag="Project" type="blitz" to="/projects/blitz"/>
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