import React, {Component} from 'react';

import CSSModules from 'react-css-modules';
import styles from './ProjectsPreview.css';
import PreviewTile from './PreviewTile/PreviewTile';
import Link from '../../../../components/Button/Link/Link';
import OwlCarousel from 'react-owl-carousel2';
import '../../../../external/owl.carousel.css';
import '../../../../external/owl.theme.default.css';
import Carousel from '../../../../components/Carousel/Carousel';
import Icon from '../../../../components/Icon/Icon';

class projectsPreview extends Component {
    

    render() {
        const options = {
        items: 1,
        dots: true,
        autoplayTimeout: 1500,
        rtl: false,
        mouseDrag: false,
        nav: false
        }

        const carouselStyle = {
            'width': '500px',
            'margin': '0 auto',
            'backgroundColor': 'transparent',
            'borderRadius': '15px'
        }

        return (
            <div styleName= 'projectsPreview'>
            <span className="container">
                    <h2>Projects</h2>
            </span>
            <span className="container">
                    <p>No idea is too big 💡</p>            
            </span> 
            <div className="container">
                    <div styleName="carousel-wrapper"></div>
                    <OwlCarousel style={carouselStyle} ref="projCarousel" options={options}>   
                        <PreviewTile title="Skout" desc="LinkedIn for Athletes" tag="Project" />
                        <PreviewTile title="Canadian Tire" desc="Canada's largest retail organization" tag="Internship" />
                        <PreviewTile title="Blitz" desc="Sports Notification Innovation" tag="Project" />
                    </OwlCarousel>
                <button onClick={() => this.refs.projCarousel.prev()}><Icon></Icon></button>
                <button onClick={() => this.refs.projCarousel.next()}><Icon></Icon></button>
            </div>
            <div className="container">
                <div styleName="proj-prev-el" className="row">
                    <Link link="/projects">View All Projects</Link>
                </div>
            </div>
            </div>
        )
    }
} 
   
export default CSSModules(projectsPreview, styles);