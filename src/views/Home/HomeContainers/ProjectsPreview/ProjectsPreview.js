import React, {Component} from 'react';

import CSSModules from 'react-css-modules';
import styles from './ProjectsPreview.css';
import Button from '../../../../components/Button/Button';
import SlideCarousel from '../../../../components/Carousel/SlideCarousel/SlideCarousel';
import CarouselItem from '../../../../components/Carousel/SlideCarousel/CarouselItem/CarouselItem';
import projectsInfo from '../../../../assets/projects';
import home from '../../../../assets/home';
import Fade from 'react-reveal/Fade';

class projectsPreview extends Component {

    render() {
        return (
            <div styleName= 'projectsPreview'>
                <span className="container">
                    <h2>{home.projects.title}</h2>
                </span>
                <span styleName="projects-preview-paragraph" className="container">
                    <p>{home.projects.description} <span aria-label="emoji" role="img">💡</span></p> 
                </span> 
                <div styleName="carousel-relative">
                    <SlideCarousel>
                        <CarouselItem title={projectsInfo.headings.experience.title} description={projectsInfo.headings.experience.description} type="exp" to="/projects/experience"/>
                        <CarouselItem title={projectsInfo.headings.webMobile.title} description={projectsInfo.headings.webMobile.description} type="wm" to="/projects/side-projects"/>
                        <CarouselItem title={projectsInfo.headings.ds.title} description={projectsInfo.headings.ds.description} type="ds" to="/projects/data"/>
                        <CarouselItem title={projectsInfo.headings.hackathons.title} description={projectsInfo.headings.hackathons.description} type="hack" to="/projects/hackathons"/>
                    </SlideCarousel>
                </div>
                <div styleName="link-container" className="row">
                    <Button margin="30px auto" to="/projects">View Projects</Button>
                </div>
            </div>
        )
    }
} 
   
export default CSSModules(projectsPreview, styles);