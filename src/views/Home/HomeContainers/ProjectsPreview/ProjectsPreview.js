import React, {Component} from 'react';

import CSSModules from 'react-css-modules';
import styles from './ProjectsPreview.css';
import PreviewTile from './PreviewTile/PreviewTile';
import Link from '../../../../components/Button/Link/Link';
import OwlCarousel from 'react-owl-carousel2';
import '../../../../external/owl.carousel.css';
import '../../../../external/owl.theme.default.css';
import Carousel from '../../../../components/Carousel/Carousel';

class projectsPreview extends Component {
    

    render() {
        const carouselItems = ['🐶', '👔', '🏀', '🎣', '🎸', '🔧', '🌇', '📚', '🍁','🎓', '🧠', '👨🏻‍💻', '🏋🏻‍', '🥑 ', '🏈', '⚾️', '🥅', '🎢'];
        const options = {
        items: 1,
        dots: true,
        autoplayTimeout: 1500,
        rtl: false,
        mouseDrag: false,
        }

        return (
            <div styleName= 'projectsPreview'>
            <span className="container">
                    <h2>Projects</h2>
            </span>
            <div className="container">
                <OwlCarousel ref="car" options={options}>   
                    <PreviewTile title="Skout" desc="LinkedIn for Athletes" tag="Project" />
                    <PreviewTile title="Canadian Tire" desc="Canada's largest retail organization" tag="Internship" />
                    <PreviewTile title="Blitz" desc="Sports Notification Innovation" tag="Project" />
                </OwlCarousel>
                <button onClick={() => this.refs.car.prev()}>prev</button>
                <button onClick={() => this.refs.car.next()}>next</button>

                <div styleName="tile-wrapper" className="row">
                </div>
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