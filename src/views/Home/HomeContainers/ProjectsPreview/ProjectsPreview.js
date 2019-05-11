import React, {Component} from 'react';

import CSSModules from 'react-css-modules';
import styles from './ProjectsPreview.css';
import Button from '../../../../components/Button/Button';
import SlideCarousel from '../../../../components/Carousel/SlideCarousel/SlideCarousel';
import CarouselItem from '../../../../components/Carousel/SlideCarousel/CarouselItem/CarouselItem';
import projectsInfo from '../../../../assets/projectsInfo';
import homeInfo from '../../../../assets/homeInfo';
import Fade from 'react-reveal/Fade';

class projectsPreview extends Component {

    render() {
        return (
            <div styleName= 'projectsPreview'>
                <span className="container">
                    <Fade bottom>
                    <h2>{homeInfo.projects.title}</h2>
                    </Fade>
                </span>
                <span styleName="projects-preview-paragraph" className="container">
                    <Fade bottom>
                    <p>{homeInfo.projects.description} <span aria-label="emoji" role="img">💡</span></p> 
                    </Fade>   
                </span> 
                <div styleName="carousel-relative">
                    <Fade bottom>
                    <SlideCarousel>
                        <CarouselItem title={projectsInfo.headings.experience.title} description={projectsInfo.headings.experience.description} type="exp" to="/projects/experience"/>
                        <CarouselItem title={projectsInfo.headings.webMobile.title} description={projectsInfo.headings.webMobile.description} type="wm" to="/projects/web-mobile"/>
                        <CarouselItem title={projectsInfo.headings.ds.title} description={projectsInfo.headings.ds.description} type="ds" to="/projects/data-science"/>
                        <CarouselItem title={projectsInfo.headings.hackathons.title} description={projectsInfo.headings.hackathons.description} type="hack" to="/projects/hackathons"/>
                    </SlideCarousel>
                    </Fade>
                </div>
                <Fade bottom>
                <div styleName="link-container" className="row">
                    <Button margin="30px auto" to="/projects">View Projects</Button>
                </div>
                </Fade>
            </div>
        )
    }
} 
   
export default CSSModules(projectsPreview, styles);