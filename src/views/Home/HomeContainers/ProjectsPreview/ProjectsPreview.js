import React, {Component} from 'react';

import CSSModules from 'react-css-modules';
import styles from './ProjectsPreview.css';
import Link from '../../../../components/Button/Link/Link';
import SlideCarousel from '../../../../components/Carousel/SlideCarousel/SlideCarousel';
import CarouselItem from '../../../../components/Carousel/SlideCarousel/CarouselItem/CarouselItem';
import projectsInfo from '../../../../assets/projectsInfo';
import homeInfo from '../../../../assets/homeInfo';

class projectsPreview extends Component {

    render() {
        return (
            <div styleName= 'projectsPreview'>
            <span className="container">
                    <h2>{homeInfo.projects.title}</h2>
            </span>
            <span styleName="projects-preview-paragraph" className="container">
                    <p>{homeInfo.projects.description} <span aria-label="emoji" role="img">💡</span></p>            
            </span> 
            <div styleName="carousel-relative">
                <SlideCarousel>
                    <CarouselItem title={projectsInfo.ctc.name} tag={projectsInfo.ctc.tag} type="coop1" to="/projects/canadian-tire"/>
                    <CarouselItem title={projectsInfo.blitz.name} tag={projectsInfo.blitz.tag} type="blitz" to="/projects/blitz"/>
                    <CarouselItem title={projectsInfo.ryse.name} tag={projectsInfo.ryse.tag} type="ryse" to="/projects/ryse"/>
                </SlideCarousel>
            </div>
                <div styleName="link-container" className="row">
                    <Link margin="25px" link="/projects">View All Projects</Link>
                </div>
            </div>
        )
    }
} 
   
export default CSSModules(projectsPreview, styles);